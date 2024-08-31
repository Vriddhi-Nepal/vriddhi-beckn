const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Contact = require("./Contact");
const Organization = require("./Organization");
const Person = require("./Person");

class Agent extends _BecknSchema {
  static joiSchema = Joi.object({
    person: Person.joiSchema.required(),
    contact: Contact.joiSchema.required(),
    organization: Organization.joiSchema.required(),
    rating: Joi.string().required(),
  }).required();
}

module.exports = Agent;
