const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class MediaFile extends _BecknSchema {
  static joiSchema = Joi.object({
    mimetype: Joi.string().required(),
    url: Joi.string().required().uri(),
    signature: Joi.string().required(),
    dsa: Joi.string().required(),
  });
}

module.exports = MediaFile;
