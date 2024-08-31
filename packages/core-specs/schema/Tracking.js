const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Location = require("./Location");

const status_enum = ["active", "inactive"];

class Tracking extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    url: Joi.string().uri().required(),
    location: Location.joiSchema.required(),
    status: Joi.string()
      .valid(...status_enum)
      .example(status_enum[0])
      .required(),
  }).required();
}

module.exports = Tracking;
