const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Address = require("./Address");
const City = require("./City");
const Organization = require("./Organization");
const Person = require("./Person");
const State = require("./State");
const Time = require("./Time");

class Biiling extends _BecknSchema {
  static joiSchema = Joi.object({
    name: Joi.string().required(),
    organization: Organization.joiSchema.required(),
    address: Address.joiSchema.required(),
    state: State.joiSchema.required(),
    city: City.joiSchema.required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    time: Time.joiSchema.required(),
    tax_id: Joi.string().required(),
  }).required();
}

module.exports = Biiling;
