const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Address = require("./Address");
const Circle = require("./Circle");
const City = require("./City");
const Country = require("./Country");
const Descriptor = require("./Descriptor");
const Gps = require("./Gps");
const State = require("./State");

class Location extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    descriptor: Descriptor.joiSchema.required(),
    map_url: Joi.string().uri().required(),
    gps: Gps.joiSchema.required(),
    address: Address.joiSchema.required(),
    city: City.joiSchema.required(),
    district: Joi.string().required(),
    state: State.joiSchema.required(),
    country: Country.joiSchema.required(),
    area_code: Joi.string().required(),
    circle: Circle.joiSchema.required(),
    polygon: Joi.string().required(),
    "3dspace": Joi.string().required(),
    rating: Joi.string().required(),
  }).required();
}

module.exports = Location;
