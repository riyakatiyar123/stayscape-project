const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingschema, reviewschema } = require("./schema.js");
const expressError = require("./utils/expressError.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }

    if (!listing.owner || !listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing.");
        return res.redirect(`/listings/${id}`);
    }

    next();
};

module.exports.validatelisting = (req, res, next) => {
    const { error } = listingschema.validate(req.body);

    if (error) {
        const errmsg = error.details.map(el => el.message).join(",");
        throw new expressError(400, errmsg);
    }

    next();
};

module.exports.validatereview = (req, res, next) => {
    const { error } = reviewschema.validate(req.body);

    if (error) {
        const errmsg = error.details.map(el => el.message).join(",");
        throw new expressError(400, errmsg);
    }

    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;

    const review = await Review.findById(reviewId);

    if (!review) {
        req.flash("error", "Review not found.");
        return res.redirect(`/listings/${id}`);
    }

    if (!review.author || !review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review.");
        return res.redirect(`/listings/${id}`);
    }

    next();
};