const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Descriptor = require("./Descriptor");

class FulfillmentState extends _BecknSchema {
  static joiSchema = Joi.object({
    descriptor: Descriptor.joiSchema.required(),
    updated_at: Joi.date().required(),
    updated_by: Joi.string().required(),
  }).required();
}

module.exports = FulfillmentState;
