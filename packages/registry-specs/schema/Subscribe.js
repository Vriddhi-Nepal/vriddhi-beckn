const becknExtend = require("@vriddhi-beckn/core-specs/extend");
const { Subscription } = require("@vriddhi-beckn/core-specs/schema");

const [Subscribe] = becknExtend("Subscribe", (Joi) => {
  return Subscription.joiSchema.append({
    nonce: Joi.string()
      .pattern(
        new RegExp(
          /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        ),
      )
      .required(),
  });
});

module.exports = Subscribe;
