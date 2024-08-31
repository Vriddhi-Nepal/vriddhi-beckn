const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Gps extends _BecknSchema {
  static joiSchema = Joi.string()
    .pattern(
      new RegExp(
        /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,
      ),
    )
    .required();
}

module.exports = Gps;
