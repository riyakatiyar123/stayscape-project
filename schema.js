const Joi=require('joi');
//Joi is a JavaScript library used for server-side validation. It checks whether the data received by the server
//  follows the required rules before saving it to the database.

module.exports.listingschema=Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0),
        image: Joi.object({

            url: Joi.string().allow("").required()

        }).required()
    }).required(),
});


module.exports.reviewschema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required(),
});
