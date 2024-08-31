const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Gps = require("./Gps");
const Scaler = require("./Scaler");

class Circle extends _BecknSchema {
  static joiSchema = Joi.object({
    gps: Gps.joiSchema.required(),
    radius: Scaler.joiSchema.required(),
  }).required();
}

module.exports = Circle;
