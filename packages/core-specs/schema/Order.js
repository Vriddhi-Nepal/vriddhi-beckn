const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const AddOn = require("./AddOn");
const Billing = require("./Billing");
const Cancellation = require("./Cancellation");
const CancellationTerm = require("./CancellationTerm");
const Fulfillment = require("./Fulfillment");
const Item = require("./Item");
const Offer = require("./Offer");
const Payment = require("./Payment");
const Provider = require("./Provider");
const Quotation = require("./Quotation");
const RefundTerm = require("./RefundTerm");
const ReplacementTerm = require("./ReplacementTerm");
const ReturnTerm = require("./ReturnTerm");
const TagGroup = require("./TagGroup");
const XInput = require("./XInput");

const status_enum = ["ACTIVE", "COMPLETE", "CANCELLED"];
const type_enum = ["DRAFT", "DEFAULT"];

class Order extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    ref_order_ids: Joi.array().items(Joi.string().required()).min(1).required(),
    status: Joi.string()
      .valid(...status_enum)
      .example(status_enum[0])
      .required(),
    type: Joi.string()
      .valid(...type_enum)
      .example(type_enum[0])
      .required(),
    provider: Provider.joiSchema.required(),
    items: Joi.array().items(Item.joiSchema).min(1).required(),
    add_ons: Joi.array().items(AddOn.joiSchema).min(1).required(),
    offers: Joi.array().items(Offer.joiSchema).min(1).required(),
    billing: Billing.joiSchema.required(),
    fulfillments: Joi.array().items(Fulfillment.joiSchema).min(1).required(),
    cancellation: Cancellation.joiSchema.required(),
    cancellation_terms: Joi.array()
      .items(CancellationTerm.joiSchema)
      .min(1)
      .required(),
    refund_terms: Joi.array().items(RefundTerm.joiSchema).min(1).required(),
    replacement_terms: Joi.array()
      .items(ReplacementTerm.joiSchema)
      .min(1)
      .required(),
    return_terms: Joi.array().items(ReturnTerm.joiSchema).min(1).required(),
    quote: Quotation.joiSchema.required(),
    payments: Joi.array().items(Payment.joiSchema).min(1).required(),
    created_at: Joi.date().required(),
    updated_at: Joi.date().required(),
    xinput: XInput.joiSchema.required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Order;
