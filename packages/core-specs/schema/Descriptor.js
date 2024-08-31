const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Image = require("./Image");
const MediaFile = require("./MediaFile");

const content_type_enum = ["text/plain", "text/html", "application/json"];

class Descriptor extends _BecknSchema {
  static joiSchema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required(),
    short_desc: Joi.string().required(),
    long_desc: Joi.string().required(),
    additional_desc: Joi.object({
      url: Joi.string().required().uri(),
      content_type: Joi.string()
        .required()
        .valid(...content_type_enum)
        .example(content_type_enum[0]),
    }).required(),
    media: Joi.array().items(MediaFile.joiSchema).min(1).required(),
    images: Joi.array().items(Image.joiSchema).min(1).required(),
  });
}

module.exports = Descriptor;
