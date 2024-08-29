const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Descriptor = require("./Descriptor");

class Tag extends _BecknSchema {
  static joiSchema = Joi.object({
    descriptor: Descriptor.joiSchema.required(),
    value: Joi.string().required(),
    display: Joi.boolean().required(),
  }).required();
}

module.exports = Tag;
