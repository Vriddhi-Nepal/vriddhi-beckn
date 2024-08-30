const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const TagGroup = require("./TagGroup");
const Time = require("./Time");

const type_enum = [
  "PRE-ORDER",
  "PRE-FULFILLMENT",
  "ON-FULFILLMENT",
  "POST-FULFILLMENT",
];
const status_enum = ["PAID", "NOT-PAID"];

class Payment extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    collected_by: Joi.string().required(),
    url: Joi.string().uri().required(),
    params: Joi.object({
      transaction_id: Joi.string().required(),
      amount: Joi.string().required(),
      currency: Joi.string().required(),
      bank_code: Joi.string().required(),
      bank_account_number: Joi.string().required(),
      virtual_payment_address: Joi.string().required(),
      source_bank_code: Joi.string().required(),
      source_bank_account_number: Joi.string().required(),
      source_virtual_payment_address: Joi.string().required(),
    }).required(),
    type: Joi.string()
      .valid(...type_enum)
      .example(type_enum[0])
      .required(),
    status: Joi.string()
      .valid(...status_enum)
      .example(status_enum[0])
      .required(),
    time: Time.joiSchema.required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Payment;
