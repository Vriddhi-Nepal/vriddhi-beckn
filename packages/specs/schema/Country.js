const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Country extends _BecknSchema {
  static joiSchema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required(),
  }).required();
}

module.exports = Country;
