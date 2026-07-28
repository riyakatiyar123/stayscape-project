// //A model is a blueprint or template that tells Mongoose what kind of data will be stored in a MongoDB collection and lets you work with that data.
// const mongoose=require("mongoose"); //We are bringing Mongoose into our file so we can create schemas and models.
// const Schema=mongoose.Schema;
// const Review=require("./review.js");


// const listingSchema= Schema({
//     title: {
//         type:String,
//         required:true,
//     },
//     description: String,
//     image:{
//      filename: String,
//      url:String,
//     },
//     price: Number,
//     location: String,
//     country: String,
//     reviews:[
//         {
//         type:Schema.Types.ObjectId,
//         ref:"Review",

//     }],
//     owner:{
//         type:Schema.Types.ObjectId,
//         ref:"User",
//     }


// });

// listingSchema.post("findOneAndDelete",async(listing)=>{
//     if(listing){
//         await Review.deleteMany({_id: {$in: listing.reviews}});
//     }
// });


// const Listing=mongoose.model("listing",listingSchema); //Create a model called Listing using this schema
// module.exports=Listing; //This makes the Listing model available to other file

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,

    image: {
        filename: String,
        url: String,
    },

    price: Number,

    location: String,

    country: String,
    
    category: {
    type: String,
    required: true,
},

    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [77.2090, 28.6139], // [longitude, latitude] (Delhi)
        },
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;