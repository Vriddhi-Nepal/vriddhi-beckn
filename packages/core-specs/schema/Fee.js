const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const DecimalValue = require("./DecimalValue");
const Price = require("./Price");

class Fee extends _BecknSchema {
  static joiSchema = Joi.object({
    percentage: DecimalValue.joiSchema.required(),
    amount: Price.joiSchema.required(),
  }).required();
}

module.exports = Fee;
