const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Duration extends _BecknSchema {
  static joiSchema = Joi.string().required();
}

module.exports = Duration;
