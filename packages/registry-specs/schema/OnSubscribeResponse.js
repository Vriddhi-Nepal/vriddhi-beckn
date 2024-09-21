const becknExtend = require("@vriddhi-beckn/core-specs/extend");

const [OnSubscribeResponse] = becknExtend("OnSubscribeResponse", (Joi) => {
  return Joi.object({ answer: Joi.string().required() });
});

module.exports = OnSubscribeResponse;
