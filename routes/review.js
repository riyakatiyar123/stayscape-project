const express=require("express");
const router = express.Router({ mergeParams: true });//mergeParams: true allows a child router (reviews.js) to access route parameters 
// (like :id) defined in the parent router (app.js).mergeParams is only for URL route parameters (those written with :), 
// not for request body, query strings, headers, cookies, or sessions.
const wrapAsync=require("../utils/wrapAsync.js");
const expressError=require("../utils/expressError.js");
const {reviewschema}=require("../schema.js");
const Review=require("../models/review.js");
const Listing = require("../models/listing");



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

// post review route
router.post("/",validatereview,wrapAsync(async(req,res)=>{
    console.log(req.body.review.rating);

    console.log(req.body.review.comment);
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
     req.flash("success","New Review Created!");
    res.redirect(`/listings/${listing._id}`);

}));

//delete review route
router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let{id,reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
     req.flash("success"," Review Deleted!");
    res.redirect(`/listings/${id}`);
}));

module.exports=router;