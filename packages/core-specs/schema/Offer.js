const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Descriptor = require("./Descriptor");
const TagGroup = require("./TagGroup");
const Time = require("./Time");

class Offer extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    descriptor: Descriptor.joiSchema.required(),
    location_ids: Joi.array().items(Joi.string().required()).min(1).required(),
    category_ids: Joi.array().items(Joi.string().required()).min(1).required(),
    item_ids: Joi.array().items(Joi.string().required()).min(1).required(),
    time: Time.joiSchema.required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Offer;
