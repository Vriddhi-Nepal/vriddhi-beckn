const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const DecimalValue = require("./DecimalValue");

class Price extends _BecknSchema {
  static joiSchema = Joi.object({
    currency: Joi.string().required(),
    value: DecimalValue.joiSchema.required(),
    estimated_value: DecimalValue.joiSchema.required(),
    computed_value: DecimalValue.joiSchema.required(),
    listed_value: DecimalValue.joiSchema.required(),
    offered_value: DecimalValue.joiSchema.required(),
    minimum_value: DecimalValue.joiSchema.required(),
    maximum_value: DecimalValue.joiSchema.required(),
  }).required();
}

module.exports = Price;
