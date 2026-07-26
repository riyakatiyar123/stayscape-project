const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const User = require("../models/user");

const mongo_url="mongodb://127.0.0.1:27017/stayscape";

main().then(()=>{
    console.log("connected to Db")

}).catch((err)=>{
console.log(err);

});

async function main(){
    await mongoose.connect(mongo_url);
}

const initDb = async () => {
    await Listing.deleteMany({});

    const users = await User.find();

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: users[Math.floor(Math.random() * users.length)]._id
    }));

    await Listing.insertMany(initData.data);

    console.log("Data initialized");
};
initDb();