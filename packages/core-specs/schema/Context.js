const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Location = require("./Location");

const type_enum = ["BAP", "BPP", "BG"];

class Context extends _BecknSchema {
  static joiSchema = Joi.object({
    domain: Joi.string().required(),
    location: Location.joiSchema.required(),
    action: Joi.string().required(),
    version: Joi.string().required(),
    bap_id: Joi.string().required(),
    bap_url: Joi.string().uri().required(),
    bpp_id: Joi.string().required(),
    bpp_url: Joi.string().uri().required(),
    transaction_id: Joi.string().required(),
    message_id: Joi.string()
      .pattern(
        new RegExp(
          /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        ),
      )
      .required(),
    timestamp: Joi.date().required(),
    key: Joi.string().required(),
    ttl: Joi.string().required(),
  });
}

module.exports = Context;
