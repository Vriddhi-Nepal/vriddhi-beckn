const becknExtend = require("@vriddhi-beckn/core-specs/extend");

const Lookup = require("./Lookup");

const [LookupResponse] = becknExtend("LookupResponse", (Joi) => {
  return Joi.array().items(Lookup.joiSchema).min(1).required();
});

module.exports = LookupResponse;
