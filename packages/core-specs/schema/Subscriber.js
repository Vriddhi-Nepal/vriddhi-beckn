const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Location = require("./Location");

const type_enum = ["BAP", "BPP", "BG"];

class Subscriber extends _BecknSchema {
  static joiSchema = Joi.object({
    subscriber_id: Joi.string().required(),
    url: Joi.string().uri().required(),
    type: Joi.string()
      .valid(...type_enum)
      .example(type_enum[0])
      .required(),
    domain: Joi.string().required(),
    location: Location.joiSchema.required(),
  });
}

module.exports = Subscriber;
