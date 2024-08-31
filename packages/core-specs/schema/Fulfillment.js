const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Agent = require("./Agent");
const Contact = require("./Contact");
const Customer = require("./Customer");
const Descriptor = require("./Descriptor");
const FulfillmentState = require("./FulfillmentState");
const Stop = require("./Stop");
const Vehicle = require("./Vehicle");
const TagGroup = require("./TagGroup");

class Fulfillment extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    type: Joi.string().required(),
    rateable: Joi.boolean().required(),
    rating: Joi.string().required(),
    state: FulfillmentState.joiSchema.required(),
    tracking: Joi.boolean().required(),
    customer: Customer.joiSchema.required(),
    agent: Agent.joiSchema.required(),
    contact: Contact.joiSchema.required(),
    vehicle: Vehicle.joiSchema.required(),
    stops: Joi.array().items(Stop.joiSchema).min(1).required(),
    path: Joi.string().required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Fulfillment;
