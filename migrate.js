require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const LOCAL_DB = "mongodb://127.0.0.1:27017/stayscape";
const ATLAS_DB = process.env.ATLASDB_URL;

async function migrate() {
    // Read from local database
    const localConn = await mongoose.createConnection(LOCAL_DB).asPromise();
    const LocalListing = localConn.model("Listing", Listing.schema);

    const listings = await LocalListing.find({});
    console.log(`Found ${listings.length} listings in local DB`);

    // Write to Atlas
    const atlasConn = await mongoose.createConnection(ATLAS_DB).asPromise();
    const AtlasListing = atlasConn.model("Listing", Listing.schema);

    await AtlasListing.deleteMany({});
    await AtlasListing.insertMany(listings.map(doc => doc.toObject()));

    console.log("Migration completed!");

    await localConn.close();
    await atlasConn.close();
}

migrate().catch(console.error);