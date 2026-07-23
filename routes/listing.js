const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {listingschema}=require("../schema.js");
const expressError=require("../utils/expressError.js");
const Listing = require("../models/listing");

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

//index route->list all the title 
router.get("/",wrapAsync(async(req,res)=>{
 const allListings= await Listing.find();
 res.render("listings/index",{allListings});
}));

//new route
router.get("/new",(req,res)=>{
    res.render("listings/new");
});

//show route->we have an id and we will return all the data related to that id 
router.get("/:id",wrapAsync(async(req,res)=>{
    let{id}=req.params;      // req.params → Data comes from the URL.
    const listing=await Listing.findById(id).populate("reviews");
    if(!listing)
    {
           req.flash("error","Listing that you requested does not exist!");
         return res.redirect("/listings");
    }
    res.render("listings/show",{listing});

}));


//edit route
router.get("/:id/edit",wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
     if(!listing)
    {
           req.flash("error","Listing that you requested does not exist!");
          return res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
}));

//If you used POST here, it would mean you’re trying to create another listing, not edit the existing one.
//upadte route
router.put("/:id",validatelisting,wrapAsync( async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { //Finds a listing by its ID and updates it with the new values submitted through the edit form.
        ...req.body.listing
    });
     req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
}));

//create route-->When a user submits the New Listing Form, this route will run.
//When the user fills out the form and clicks Submit, the form sends a POST request to /listings.
//  Express receives the submitted data in req.body, creates a new Listing object using that data,
//  and saves it to MongoDB with .save(). After the listing is successfully stored, Express redirects 
// the user to /listings, where they can see the newly added listing along with all the existing ones.

router.post("/", validatelisting,wrapAsync(async(req,res)=>{ 
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
})
);


//delete route
router.delete("/:id",wrapAsync(async(req,res)=>{
    let { id } = req.params;
    const deletelisting=await Listing.findByIdAndDelete(id);
    console.log(deletelisting);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
}));

module.exports=router;