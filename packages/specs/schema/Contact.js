const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Stage extends _BecknSchema {
  static joiSchema = Joi.object({
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    jcard: Joi.object().required(),
  }).required();
}

module.exports = Stage;
