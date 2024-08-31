const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Descriptor = require("./Descriptor");
const Price = require("./Price");

class AddOn extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    descriptor: Descriptor.joiSchema.required(),
    price: Price.joiSchema.required(),
  }).required();
}

module.exports = AddOn;
