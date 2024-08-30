const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Authorization = require("./Authorization");
const Contact = require("./Contact");
const Descriptor = require("./Descriptor");
const Location = require("./Location");
const Person = require("./Person");
const Time = require("./Time");

class Stop extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    parent_stop_id: Joi.string().required(),
    location: Location.joiSchema.required(),
    type: Joi.string().required(),
    time: Time.joiSchema.required(),
    instructions: Descriptor.joiSchema.required(),
    contact: Contact.joiSchema.required(),
    person: Person.joiSchema.required(),
    authorization: Authorization.joiSchema.required(),
  }).required();
}

module.exports = Stop;
