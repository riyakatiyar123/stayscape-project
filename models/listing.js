//A model is a blueprint or template that tells Mongoose what kind of data will be stored in a MongoDB collection and lets you work with that data.
const mongoose=require("mongoose"); //We are bringing Mongoose into our file so we can create schemas and models.
const Schema=mongoose.Schema;
const Review=require("./review.js");


const listingSchema= Schema({
    title: {
        type:String,
        required:true,
    },
    description: String,
    image:{
     filename: String,
     url:{type:String, 
        default:"https://i.pinimg.com/1200x/a7/e0/6d/a7e06d0fd6801ad82edd4e70c60ee956.jpg",
        
        set:(v)=> v==="" ?"https://i.pinimg.com/1200x/a7/e0/6d/a7e06d0fd6801ad82edd4e70c60ee956.jpg":v,
    }
},
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
        type:Schema.Types.ObjectId,
        ref:"Review",

    },
],//this adds review model in the listing

});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});


const Listing=mongoose.model("listing",listingSchema); //Create a model called Listing using this schema
module.exports=Listing; //This makes the Listing model available to other files