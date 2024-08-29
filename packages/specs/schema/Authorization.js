const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Authorization extends _BecknSchema {
  static joiSchema = Joi.object({
    type: Joi.string().required(),
    token: Joi.string().required(),
    valid_from: Joi.date().required(),
    valid_to: Joi.date().required(),
    status: Joi.string().required(),
  }).required();
}

module.exports = Authorization;
