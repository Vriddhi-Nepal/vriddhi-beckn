const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const FulfillmentState = require("./FulfillmentState");
const Price = require("./Price");
const Time = require("./Time");

class RefundTerm extends _BecknSchema {
  static joiSchema = Joi.object({
    fulfillment_state: FulfillmentState.joiSchema.required(),
    refund_eligible: Joi.boolean().required(),
    refund_within: Time.joiSchema.required(),
    refund_amount: Price.joiSchema.required(),
  }).required();
}

module.exports = RefundTerm;
