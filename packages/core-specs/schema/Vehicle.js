const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Vehicle extends _BecknSchema {
  static joiSchema = Joi.object({
    category: Joi.string().required(),
    capacity: Joi.number().integer().required(),
    make: Joi.string().required(),
    model: Joi.string().required(),
    size: Joi.string().required(),
    variant: Joi.string().required(),
    color: Joi.string().required(),
    energy_type: Joi.string().required(),
    registration: Joi.string().required(),
    wheels_count: Joi.string().required(),
    cargo_volumne: Joi.string().required(),
    wheelchair_access: Joi.string().required(),
    code: Joi.string().required(),
    emission_standard: Joi.string().required(),
  }).required();
}

module.exports = Vehicle;
