const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Error extends _BecknSchema {
  static joiSchema = Joi.object({
    code: Joi.string().required(),
    paths: Joi.string().required(),
    message: Joi.string().required(),
  }).required();
}

module.exports = Error;
