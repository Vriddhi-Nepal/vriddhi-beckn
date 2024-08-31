const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Stage extends _BecknSchema {
  static joiSchema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required(),
  }).required();
}

module.exports = Stage;
