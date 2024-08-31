const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class TimeToLive extends _BecknSchema {
  static joiSchema = Joi.number().integer().min(-1);
}

module.exports = TimeToLive;
