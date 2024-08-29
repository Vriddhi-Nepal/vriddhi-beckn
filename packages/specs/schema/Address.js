const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Address extends _BecknSchema {
  static joiSchema = Joi.string().required();
}

module.exports = Address;
