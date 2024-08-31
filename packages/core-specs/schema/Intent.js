const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Category = require("./Category");
const Descriptor = require("./Descriptor");
const Fulfillment = require("./Fulfillment");
const Item = require("./Item");
const Offer = require("./Offer");
const Payment = require("./Payment");
const Provider = require("./Provider");
const TagGroup = require("./TagGroup");

class Intent extends _BecknSchema {
  static joiSchema = Joi.object({
    descriptor: Descriptor.joiSchema.required(),
    provider: Provider.joiSchema.required(),
    fulfillment: Fulfillment.joiSchema.required(),
    payment: Payment.joiSchema.required(),
    category: Category.joiSchema.required(),
    offer: Offer.joiSchema.required(),
    item: Item.joiSchema.required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Intent;
