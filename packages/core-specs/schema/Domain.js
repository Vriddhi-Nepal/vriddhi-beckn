const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const MediaFile = require("./MediaFile");

class Domain extends _BecknSchema {
  static joiSchema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required(),
    additional_info: MediaFile.joiSchema.required(),
  });
}

module.exports = Domain;
