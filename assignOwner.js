require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("./models/listing");

const dbUrl = process.env.ATLASDB_URL;

// Paste your user _id here
const OWNER_ID = "6a6368b71739ed76863c1dab";

async function main() {
    await mongoose.connect(dbUrl);

    console.log("Connected to Atlas");

    const result = await Listing.updateMany(
        {
            $or: [
                { owner: { $exists: false } },
                { owner: null }
            ]
        },
        {
            $set: {
                owner: OWNER_ID
            }
        }
    );

    console.log(result);

    mongoose.connection.close();
}

main().catch(console.error);