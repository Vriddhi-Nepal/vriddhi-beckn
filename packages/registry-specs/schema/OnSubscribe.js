const becknExtend = require("@vriddhi-beckn/core-specs/extend");

const status_enum = [
  "INITIATED",
  "UNDER_SUBSCRIPTION",
  "SUBSCRIBED",
  "INVALID_SSL",
  "UNSUBSCRIBED",
];

const [OnSubscribe] = becknExtend("OnSubscribe", (Joi) => {
  return Joi.object({
    status: Joi.string()
      .valid(...status_enum)
      .example(status_enum[0])
      .required(),
    challenge: Joi.string().required(),
  });
});

module.exports = OnSubscribe;
