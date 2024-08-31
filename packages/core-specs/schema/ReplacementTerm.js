const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const FulfillmentState = require("./FulfillmentState");
const MediaFile = require("./MediaFile");
const Time = require("./Time");

class ReplacementTerm extends _BecknSchema {
  static joiSchema = Joi.object({
    fulfillment_state: FulfillmentState.joiSchema.required(),
    replace_within: Time.joiSchema.required(),
    external_ref: MediaFile.joiSchema.required(),
  }).required();
}

module.exports = ReplacementTerm;
