const express=require("express");//We are bringing Express into our project because Express helps us make a web server.
const app=express();
const mongoose= require("mongoose");//Mongoose helps our Node.js application talk to MongoDB.  Node.js ↔ Mongoose ↔ MongoDB
const path=require("path");
const methodOverride= require("method-override");
const ejsMate=require("ejs-mate");
// wrapAsync automatically catches errors for you.
//wrapAsync is a helper function that automatically catches errors in async routes and sends them to Express’s error handler.
const expressError=require("./utils/expressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const localStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter=require("./routes/listing.js");
const reviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");


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


// tell Express how to find and use EJS templates.
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); //All my .ejs files are inside the views folder
app.engine("ejs", ejsMate);

app.use(express.urlencoded({extended:true}));  //So this line translates the user’s form data into something your Express application can use
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));  //Anything inside public can be used by the browser





const sessionOption={
    secret:"mysupersecret",
    resave: false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+ 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;
    next();
});




app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);


// Express first learns:

// * how to render EJS,
// * how to read form data,
// * how to serve static files,

// and then it starts handling routes.


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

//Listing->Factory->It knows how to create hotels.
//listing->One hotel
// const listings = await Listing.find({});->listings->
// [
//    Hotel 1,
//    Hotel 2,
//    Hotel 3
// ]
// Because there are many hotels.
// * Listing (capital L) = the Mongoose model (the factory that talks to MongoDB).
// * listing (small l) = one hotel (one document).
// * listings (small l + s) = many hotels (an array of documents).

// / app.get("/testListing",async(req,res)=>{
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