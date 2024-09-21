const becknExtend = require("@vriddhi-beckn/core-specs/extend");

const status_enum = ["UNDER_SUBSCRIPTION"];

const [SubscribeResponse] = becknExtend("SubscribeResponse", (Joi) => {
  return Joi.object({
    status: Joi.string()
      .valid(...status_enum)
      .example(status_enum[0])
      .required(),
  });
});

module.exports = SubscribeResponse;
