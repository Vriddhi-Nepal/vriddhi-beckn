const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const FulfillmentState = require("./FulfillmentState");
const Location = require("./Location");
const Time = require("./Time");

const fulfillment_managed_by_enum = ["CONSUMER", "PROVIDER"];

class ReturnTerm extends _BecknSchema {
  static joiSchema = Joi.object({
    fulfillment_state: FulfillmentState.joiSchema.required(),
    return_eligible: Joi.boolean().required(),
    return_within: Time.joiSchema.required(),
    return_location: Location.joiSchema.required(),
    fulfillment_managed_by: Joi.string()
      .valid(...fulfillment_managed_by_enum)
      .example(fulfillment_managed_by_enum[0])
      .required(),
  }).required();
}

module.exports = ReturnTerm;
