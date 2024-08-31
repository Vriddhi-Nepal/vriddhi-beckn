const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Language extends _BecknSchema {
  static joiSchema = Joi.object({
    code: Joi.string().required(),
    name: Joi.string().required(),
  }).required();
}

module.exports = Language;
