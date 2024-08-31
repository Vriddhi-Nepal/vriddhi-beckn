const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Category = require("./Category");
const Descriptor = require("./Descriptor");
const Fulfillment = require("./Fulfillment");
const Item = require("./Item");
const Location = require("./Location");
const Offer = require("./Offer");
const Payment = require("./Payment");
const TagGroup = require("./TagGroup");
const Time = require("./Time");
const TimeToLive = require("./TimeToLive");

class Provider extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    descriptor: Descriptor.joiSchema.required(),
    category_id: Joi.string().required(),
    rating: Joi.string().required(),
    time: Time.joiSchema.required(),
    categories: Joi.array().items(Category.joiSchema).min(1).required(),
    fulfillments: Joi.array().items(Fulfillment.joiSchema).min(1).required(),
    payments: Joi.array().items(Payment.joiSchema).min(1).required(),
    locations: Joi.array().items(Location.joiSchema).min(1).required(),
    offers: Joi.array().items(Offer.joiSchema).min(1).required(),
    items: Joi.array().items(Item.joiSchema).min(1).required(),
    exp: Joi.date().required(),
    rateable: Joi.boolean().required(),
    ttl: TimeToLive.joiSchema.required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Provider;
