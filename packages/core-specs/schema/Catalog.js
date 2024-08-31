const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Descriptor = require("./Descriptor");
const Fulfillment = require("./Fulfillment");
const Offer = require("./Offer");
const Payment = require("./Payment");
const Provider = require("./Provider");

class Catalog extends _BecknSchema {
  static joiSchema = Joi.object({
    descriptor: Descriptor.joiSchema.required(),
    fulfillments: Joi.array().items(Fulfillment.joiSchema).min(1).required(),
    payments: Joi.array().items(Payment.joiSchema).min(1).required(),
    offers: Joi.array().items(Offer.joiSchema).min(1).required(),
    providers: Joi.array().items(Provider.joiSchema).min(1).required(),
    exp: Joi.date().required(),
    ttl: Joi.string().required(),
  }).required();
}

module.exports = Catalog;
