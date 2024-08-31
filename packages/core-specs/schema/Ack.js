const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const TagGroup = require("./TagGroup");

const status_enum = ["ACK", "NACK"];

class Ack extends _BecknSchema {
  static joiSchema = Joi.object({
    status: Joi.string()
      .valid(...status_enum)
      .example(status_enum[0])
      .required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  });
}

module.exports = Ack;
