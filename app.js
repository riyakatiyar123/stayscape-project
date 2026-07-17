const express=require("express");//We are bringing Express into our project because Express helps us make a web server.
const app=express();
const mongoose= require("mongoose");//Mongoose helps our Node.js application talk to MongoDB.  Node.js ↔ Mongoose ↔ MongoDB
const Listing = require("./models/listing");
const path=require("path");
const methodOverride= require("method-override");
const ejsMate=require("ejs-mate");
// wrapAsync automatically catches errors for you.
//wrapAsync is a helper function that automatically catches errors in async routes and sends them to Express’s error handler.
const wrapAsync=require("./utils/wrapAsync.js");
const expressError=require("./utils/expressError.js");
const {listingschema,reviewschema}=require("./schema.js");
const Review=require("./models/review.js");


const mongo_url="mongodb://127.0.0.1:27017/stayscape";

//main->Go connect to MongoDB. JavaScript doesn’t want to freeze while waiting, so it performs this asynchronously.
main().then(()=>{
    console.log("connected to Db")

}).catch((err)=>{
console.log(err);

});

//async tells JavaScript that this function may contain code that takes time to finish.
//await is a keyword used inside an async function to wait until an asynchronous operation is completed before moving to the next line.
async function main(){
    await mongoose.connect(mongo_url);
}

//* New Route → Gives you the blank form.
//Create Route → Takes the filled form and stores it.
app.get("/",(req,res)=>{
    res.send("hi,im a root");
});


const validatelisting=(req,res,next)=>{
    let{error}=listingschema.validate(req.body);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errmsg);
    }
    else{
        next();
    }
};


const validatereview=(req,res,next)=>{
    let{error}=reviewschema.validate(req.body);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errmsg);
    }
    else{
        next();
    }
};




// tell Express how to find and use EJS templates.
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); //All my .ejs files are inside the views folder
app.use(express.urlencoded({extended:true}));  //So this line translates the user’s form data into something your Express application can use
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));  //Anything inside public can be used by the browser

//index route->list all the title 
app.get("/listings",wrapAsync(async(req,res)=>{
 const allListings= await Listing.find();
 res.render("listings/index",{allListings});
}));

//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new");
});

//show route->we have an id and we will return all the data related to that id 
app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let{id}=req.params;      // req.params → Data comes from the URL.
    const listing=await Listing.findById(id).populate("reviews");
    res.render("listings/show",{listing});

}));


//edit route
app.get("/listings/:id/edit",wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
}));

//If you used POST here, it would mean you’re trying to create another listing, not edit the existing one.
//upadte route
app.put("/listings/:id",validatelisting,wrapAsync( async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { //Finds a listing by its ID and updates it with the new values submitted through the edit form.
        ...req.body.listing
    });

    res.redirect(`/listings/${id}`);
}));

//create route-->When a user submits the New Listing Form, this route will run.
//When the user fills out the form and clicks Submit, the form sends a POST request to /listings.
//  Express receives the submitted data in req.body, creates a new Listing object using that data,
//  and saves it to MongoDB with .save(). After the listing is successfully stored, Express redirects 
// the user to /listings, where they can see the newly added listing along with all the existing ones.

app.post("/listings", validatelisting,wrapAsync(async(req,res)=>{ 
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})
);


//delete route
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let { id } = req.params;
    const deletelisting=await Listing.findByIdAndDelete(id);
    console.log(deletelisting);
    res.redirect("/listings");
}));


// post review route
app.post("/listings/:id/reviews",validatereview,wrapAsync(async(req,res)=>{
    console.log(req.body.review.rating);

    console.log(req.body.review.comment);
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);

}));

//delete review route
app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
    let{id,reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}));




// app.get("/testListing",async(req,res)=>{
//     let sampleListing=new Listing({
//         title:"My new villa",
//         description:"staycation",
//         image:"https://media.houseandgarden.co.uk/photos/690cbee6cf8b45d60afb7ebe/master/w_1024%2Cc_limit/250303-oolsg-p1-riva-pool-sunbeds-vert-0927-master.jpg",
//         price: 1200,
//         location:"kanpur",
//         country:"india",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");

// });

//error for all the route that do not exists 
app.use((req, res, next) => {
    next(new expressError(404, "Page not found!"));
});


app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong"}=err;
    // res.status(statusCode).send(message);
    res.status(statusCode);
    res.render("error.ejs",{err});
});


//Start listening for visitors on port 8080
app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});