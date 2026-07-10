//A model is a blueprint or template that tells Mongoose what kind of data will be stored in a MongoDB collection and lets you work with that data.
const mongoose=require("mongoose"); //We are bringing Mongoose into our file so we can create schemas and models.
const Schema=mongoose.Schema;

const listingSchema= Schema({
    title: {
        type:String,
        required:true,
    },
    description: String,
    image:{
     filename: String,
     url:{type:String, 
        default:"https://media.houseandgarden.co.uk/photos/690cbee6cf8b45d60afb7ebe/master/w_1024%2Cc_limit/250303-oolsg-p1-riva-pool-sunbeds-vert-0927-master.jpg",
        
        set:(v)=> v==="" ?"https://media.houseandgarden.co.uk/photos/690cbee6cf8b45d60afb7ebe/master/w_1024%2Cc_limit/250303-oolsg-p1-riva-pool-sunbeds-vert-0927-master.jpg":v,
    }
},
    price: Number,
    location: String,
    country: String,
});

const Listing=mongoose.model("listing",listingSchema); //Create a model called Listing using this schema
module.exports=Listing; //This makes the Listing model available to other files.