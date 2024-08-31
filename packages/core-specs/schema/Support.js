const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Support extends _BecknSchema {
  static joiSchema = Joi.object({
    ref_id: Joi.string().required(),
    callback_phone: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    url: Joi.string().uri().required(),
  }).required();
}

module.exports = Support;
