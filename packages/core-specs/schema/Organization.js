const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Address = require("./Address");
const City = require("./City");
const Contact = require("./Contact");
const Descriptor = require("./Descriptor");
const State = require("./State");

class Ogranization extends _BecknSchema {
  static joiSchema = Joi.object({
    descriptor: Descriptor.joiSchema.required(),
    address: Address.joiSchema.required(),
    state: State.joiSchema.required(),
    city: City.joiSchema.required(),
    contact: Contact.joiSchema.required(),
  }).required();
}

module.exports = Ogranization;
