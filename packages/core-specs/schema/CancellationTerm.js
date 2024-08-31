const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Fee = require("./Fee");
const FulfillmentState = require("./FulfillmentState");
const MediaFile = require("./MediaFile");
const Time = require("./Time");
const XInput = require("./XInput");

class CancellationTerm extends _BecknSchema {
  static joiSchema = Joi.object({
    fulfillment_state: FulfillmentState.joiSchema.required(),
    reason_required: Joi.boolean().required(),
    cancel_by: Time.joiSchema.required(),
    cancellation_fee: Fee.joiSchema.required(),
    xinput: XInput.joiSchema.required(),
    external_ref: MediaFile.joiSchema.required(),
  }).required();
}

module.exports = CancellationTerm;
