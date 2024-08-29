const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Credential extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    type: Joi.string().required(),
    url: Joi.string().required().uri(),
  });
}

module.exports = Credential;
