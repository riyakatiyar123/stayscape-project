// const mongoose = require("mongoose");
// const axios = require("axios");
// const Listing = require("../../../models/listing");

// const MONGO_URL = "mongodb://127.0.0.1:27017/stayscape";

// async function main() {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect(MONGO_URL);
//         console.log("Connected to MongoDB");

//         // Get all listings
//         const listings = await Listing.find();

//         // Loop through each listing
//         for (let listing of listings) {

//             const location = `${listing.location}, ${listing.country}`;

//             try {
//                 const response = await axios.get(
//                     "https://nominatim.openstreetmap.org/search",
//                     {
//                         params: {
//                             q: location,
//                             format: "json",
//                             limit: 1,
//                         },
//                         headers: {
//                             "User-Agent": "StayScape",
//                         },
//                     }
//                 );

//                 if (response.data.length > 0) {

//                     listing.geometry = {
//                         type: "Point",
//                         coordinates: [
//                             parseFloat(response.data[0].lon),
//                             parseFloat(response.data[0].lat),
//                         ],
//                     };

//                     await listing.save();

//                     console.log(`Updated: ${listing.title}`);
//                 } else {
//                     console.log(`Location not found: ${listing.title}`);
//                 }

//             } catch (err) {
//                 console.log(`Error updating ${listing.title}: ${err.message}`);
//             }

//             // Wait 1 second before the next API request
//             await new Promise((resolve) => setTimeout(resolve, 1000));
//         }

//         console.log("All listings updated!");

//     } catch (err) {
//         console.log("Database Connection Error:", err.message);
//     } finally {
//         mongoose.connection.close();
//     }
// }

// main();


// Bootstrap form validation

(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            'submit',
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            },
            false
        );
    });
})();