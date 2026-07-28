

const Listing = require("../models/listing");
const axios = require("axios");

// module.exports.index = async (req, res) => {
//     const allListings = await Listing.find();
//     res.render("listings/index", { allListings });
// };

module.exports.index = async (req, res) => {
    let filter = {};

    if (req.query.location) {
        filter.location = {
            $regex: req.query.location,
            $options: "i",
        };
    }

    if (req.query.category) {

    if (req.query.category === "Amazing Views") {
        filter.category = {
            $in: ["Amazing Views", "Mountains" ,"Lakefront","Cabin"]
        };
    } else {
        filter.category = req.query.category;
    }

}

    const allListings = await Listing.find(filter);

    res.render("listings/index", {
        allListings,
        searchLocation: req.query.location || "",
    });
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new");
};

module.exports.showListing=async(req,res)=>{
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

    const listing = await Listing.findById(id);

    if (!listing) {

        req.flash("error", "Listing not found!");

        return res.redirect("/listings");

    }

    res.render("listings/edit", { listing });
};

module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
   let listing= await Listing.findByIdAndUpdate(id, { //Finds a listing by its ID and updates it with the new values submitted through the edit form.
        ...req.body.listing
    });

    if(typeof req.file!= "undefined"){
        let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();

    }
    
     req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// module.exports.createListing=async(req,res)=>{
//     let url=req.file.path;
//     let filename=req.file.filename;

//     const newListing=new Listing(req.body.listing);
//     newListing.owner=req.user._id;
//     newListing.image={url,filename};
//     await newListing.save();
//     req.flash("success","New Listing Created!");
//     res.redirect("/listings");
// };


module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    // 👇 Add this block
    const location = `${newListing.location}, ${newListing.country}`;

    try {
        const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: location,
                    format: "json",
                    limit: 1,
                },
                headers: {
                    "User-Agent": "StayScape",
                },
            }
        );

        if (response.data.length > 0) {
            newListing.geometry = {
                type: "Point",
                coordinates: [
                    parseFloat(response.data[0].lon),
                    parseFloat(response.data[0].lat),
                ],
            };
        }
    } catch (err) {
        console.log("Geocoding Error:", err.message);
    }
    console.log(newListing.geometry);

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};



module.exports.destroyRoute=async(req,res)=>{
    let { id } = req.params;
    const deletelisting=await Listing.findByIdAndDelete(id);
    console.log(deletelisting);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};