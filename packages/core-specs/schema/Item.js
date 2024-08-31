const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const AddOn = require("./AddOn");
const CancellationTerm = require("./CancellationTerm");
const Descriptor = require("./Descriptor");
const ItemQuantity = require("./ItemQuantity");
const Organization = require("./Organization");
const Price = require("./Price");
const RefundTerm = require("./RefundTerm");
const ReplacementTerm = require("./ReplacementTerm");
const ReturnTerm = require("./ReturnTerm");
const TagGroup = require("./TagGroup");
const Time = require("./Time");
const XInput = require("./XInput");

class Item extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    parent_item_id: Joi.string().required(),
    parent_item_quantity: ItemQuantity.joiSchema.required(),
    descriptor: Descriptor.joiSchema.required(),
    creator: Organization.joiSchema.required(),
    price: Price.joiSchema.required(),
    quantity: ItemQuantity.joiSchema.required(),
    category_ids: Joi.array().items(Joi.string().required()).min(1).required(),
    fulfillment_ids: Joi.array()
      .items(Joi.string().required())
      .min(1)
      .required(),
    location_ids: Joi.array().items(Joi.string().required()).min(1).required(),
    payment_ids: Joi.array().items(Joi.string().required()).min(1).required(),
    add_ons: Joi.array().items(AddOn.joiSchema.required()).min(1).required(),
    cancellation_terms: Joi.array()
      .items(CancellationTerm.joiSchema.required())
      .min(1)
      .required(),
    refund_terms: Joi.array()
      .items(RefundTerm.joiSchema.required())
      .min(1)
      .required(),
    replacement_terms: Joi.array()
      .items(ReplacementTerm.joiSchema.required())
      .min(1)
      .required(),
    return_terms: Joi.array()
      .items(ReturnTerm.joiSchema.required())
      .min(1)
      .required(),
    xinput: XInput.joiSchema.required(),
    time: Time.joiSchema.required(),
    rateable: Joi.boolean().required(),
    rating: Joi.string().required(),
    matched: Joi.boolean().required(),
    related: Joi.boolean().required(),
    recommended: Joi.boolean().required(),
    ttl: Joi.string().required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Item;
