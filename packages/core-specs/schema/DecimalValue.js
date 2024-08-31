const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class DecimalValue extends _BecknSchema {
  static joiSchema = Joi.string().pattern(
    new RegExp(/^[+-]?([0-9]*[.])?[0-9]+$/),
  );
}

module.exports = DecimalValue;
