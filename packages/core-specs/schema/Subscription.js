const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Subscriber = require("./Subscriber");

const status_enum = [
  "INITIATED",
  "UNDER_SUBSCRIPTION",
  "SUBSCRIBED",
  "EXPIRED",
  "UNSUBSCRIBED",
  "INVALID_SSL",
];

class Subscription extends _BecknSchema {
  static joiSchema = Subscriber.joiSchema.append({
    key_id: Joi.string()
      .pattern(
        new RegExp(
          /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        ),
      )
      .required(),
    signing_public_key: Joi.string().required(),
    encr_public_key: Joi.string().required(),
    valid_from: Joi.date().required(),
    valid_until: Joi.date().required(),
    status: Joi.string()
      .valid(...status_enum)
      .example(status_enum[0])
      .required(),
    created: Joi.date().required(),
    updated: Joi.date().required(),
  });
}

module.exports = Subscription;
