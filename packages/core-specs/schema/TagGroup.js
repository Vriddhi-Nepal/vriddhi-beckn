const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Descriptor = require("./Descriptor");
const Tag = require("./Tag");

class TagGroup extends _BecknSchema {
  static joiSchema = Joi.object({
    display: Joi.boolean().required(),
    descriptor: Descriptor.joiSchema.required(),
    list: Joi.array().items(Tag.joiSchema).min(1).required(),
  }).required();
}

module.exports = TagGroup;
