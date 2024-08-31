const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Duration = require("./Duration");
const Item = require("./Item");
const Price = require("./Price");

class Quotation extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string()
      .pattern(
        new RegExp(
          /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        ),
      )
      .required(),
    price: Price.joiSchema.required(),
    breakup: Joi.array()
      .items(
        Joi.object({
          item: Item.joiSchema.required(),
          price: Price.joiSchema.required(),
        }).required(),
      )
      .min(1)
      .required(),
    ttl: Duration.joiSchema.required(),
  }).required();
}

module.exports = Quotation;
