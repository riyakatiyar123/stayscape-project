

const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find();
    res.render("listings/index", { allListings });
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new");
};

module.exports.showListin=async(req,res)=>{
    let{id}=req.params;      // req.params → Data comes from the URL.
    const listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing)
    {
           req.flash("error","Listing that you requested does not exist!");
         return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show",{listing});
};


module.exports.editListing=async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing Update!");
    res.redirect(`/listings/ ${ id }`);
};

module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { //Finds a listing by its ID and updates it with the new values submitted through the edit form.
        ...req.body.listing
    });
     req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.createListing=async(req,res)=>{ 
    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};

module.exports.destroyRoute=async(req,res)=>{
    let { id } = req.params;
    const deletelisting=await Listing.findByIdAndDelete(id);
    console.log(deletelisting);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};