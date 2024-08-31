const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

const size_type_enum = ["xs", "sm", "md", "lg", "xl", "custom"];

class Image extends _BecknSchema {
  static joiSchema = Joi.object({
    url: Joi.string().required().uri(),
    size_type: Joi.string()
      .required()
      .valid(...size_type_enum)
      .example(size_type_enum[0]),
    width: Joi.string().required(),
    height: Joi.string().required(),
  });
}

module.exports = Image;
