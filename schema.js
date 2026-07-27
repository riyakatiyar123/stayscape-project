
//Joi is a JavaScript library used for server-side validation. It checks whether the data received by the server
//  follows the required rules before saving it to the database.

const Joi = require("joi");

// Joi validates the data sent from the form before it is saved in MongoDB.

module.exports.listingschema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
    }).required(),
});

module.exports.reviewschema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});