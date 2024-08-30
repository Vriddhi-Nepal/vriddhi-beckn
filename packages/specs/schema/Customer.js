const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Contact = require("./Contact");
const Person = require("./Person");

class Customer extends _BecknSchema {
  static joiSchema = Joi.object({
    person: Person.joiSchema.required(),
    contact: Contact.joiSchema.required(),
  });
}

module.exports = Customer;
