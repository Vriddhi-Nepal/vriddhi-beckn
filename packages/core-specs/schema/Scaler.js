const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const DecimalValue = require("./DecimalValue");

const type_enum = ["CONSTANT", "VARIABLE"];

class Scaler extends _BecknSchema {
  static joiSchema = Joi.object({
    type: Joi.string()
      .valid(...type_enum)
      .example(type_enum[0])
      .required(),
    value: DecimalValue.joiSchema.required(),
    estimated_value: DecimalValue.joiSchema.required(),
    computed_value: DecimalValue.joiSchema.required(),
    range: Joi.object({
      min: DecimalValue.joiSchema.required(),
      max: DecimalValue.joiSchema.required(),
    }).required(),
    unit: Joi.string().required(),
  }).required();
}

module.exports = Scaler;
