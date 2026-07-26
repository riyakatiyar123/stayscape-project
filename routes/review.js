const express=require("express");
const router = express.Router({ mergeParams: true });//mergeParams: true allows a child router (reviews.js) to access route parameters 
// (like :id) defined in the parent router (app.js).mergeParams is only for URL route parameters (those written with :), 
// not for request body, query strings, headers, cookies, or sessions.
const wrapAsync=require("../utils/wrapAsync.js");
const expressError=require("../utils/expressError.js");
const Review=require("../models/review.js");
const Listing = require("../models/listing");
const{isLoggedIn,validatereview}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");


// post review route
router.post("/",isLoggedIn,validatereview,wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,wrapAsync(reviewController.destroyReview));

module.exports=router;