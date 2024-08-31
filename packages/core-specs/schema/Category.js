const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const ItemQuantity = require("./ItemQuantity");
const Descriptor = require("./Descriptor");
const Organization = require("./Organization");
const Price = require("./Price");
const Time = require("./Time");
const TimeToLive = require("./TimeToLive");
const TagGroup = require("./TagGroup");

class Category extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    parent_category_id: Joi.string().required(),
    descriptor: Descriptor.joiSchema.required(),
    time: Time.joiSchema.required(),
    ttl: TimeToLive.joiSchema.required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  }).required();
}

module.exports = Category;
