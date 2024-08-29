const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Descriptor = require("./Descriptor");
const Option = require("./Option");

const cancelled_by_enum = ["CONSUMER", "PROVIDER"];

class Cancellation extends _BecknSchema {
  static joiSchema = Joi.object({
    time: Joi.date().required(),
    cancelled_by: Joi.string()
      .valid(...cancelled_by_enum)
      .example(cancelled_by_enum[0])
      .required(),
    reason: Option.joiSchema.required(),
    additional_description: Descriptor.joiSchema.required(),
  }).required();
}

module.exports = Cancellation;
