const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const {isLoggedIn,isOwner,validatelisting,isReviewAuthor}=require("../middleware.js");
const listingcontroller=require("../controllers/listings.js");



//index route->list all the title 
router.get("/",wrapAsync(listingcontroller.index));

//new route
router.get("/new",isLoggedIn,listingcontroller.renderNewForm);

//show route->we have an id and we will return all the data related to that id 
router.get("/:id",wrapAsync(listingcontroller.showListing));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingcontroller.editListing));

//If you used POST here, it would mean you’re trying to create another listing, not edit the existing one.
//upadte route
router.put("/:id",isLoggedIn,isOwner,validatelisting,wrapAsync( listingcontroller.updateListing));


//create route-->
// 
// When a user submits the New Listing Form, this route will run.
//When the user fills out the form and clicks Submit, the form sends a POST request to /listings.
//  Express receives the submitted data in req.body, creates a new Listing object using that data,
//  and saves it to MongoDB with .save(). After the listing is successfully stored, Express redirects 
// the user to /listings, where they can see the newly added listing along with all the existing ones.

router.post("/",isLoggedIn, validatelisting,wrapAsync(listingcontroller.createListing));

//delete route
router.delete("/:id",isLoggedIn,isReviewAuthor,isOwner,wrapAsync(listingcontroller.destroyRoute));

module.exports=router;