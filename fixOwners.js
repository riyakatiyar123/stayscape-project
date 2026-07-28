require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("./models/listing");

const dbUrl = process.env.ATLASDB_URL;

// Replace this with YOUR current user ID
const OWNER_ID = "6a68ad00a353b49e5ed53aa8";

async function main() {
    await mongoose.connect(dbUrl);

    const result = await Listing.updateMany(
        {},
        {
            $set: {
                owner: OWNER_ID,
            },
        }
    );

    console.log(result);

    await mongoose.connection.close();
}

main().catch(console.error);