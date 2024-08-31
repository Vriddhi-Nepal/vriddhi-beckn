const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Scaler = require("./Scaler");

const quantityJoiSchema = (min) =>
  Joi.object({
    count: Joi.number().integer().min(min),
    measure: Scaler.joiSchema.required(),
  }).required();

class ItemQuantity extends _BecknSchema {
  static joiSchema = Joi.object({
    allocated: quantityJoiSchema(0).required(),
    available: quantityJoiSchema(0).required(),
    maximum: quantityJoiSchema(1).required(),
    minimum: quantityJoiSchema(0).required(),
    selected: quantityJoiSchema(0).required(),
    unitized: Joi.object({
      count: Joi.number().integer().min(1).max(1),
      measure: Scaler.joiSchema.required(),
    }).required(),
  }).required();
}

module.exports = ItemQuantity;
