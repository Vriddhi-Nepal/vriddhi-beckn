const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Credential = require("./Credential");
const Duration = require("./Duration");
const Image = require("./Image");
const Language = require("./Language");
const Skill = require("./Skill");
const TagGroup = require("./TagGroup");

const rating_category_enum = [
  "Item",
  "Order",
  "Fulfillment",
  "Provider",
  "Agent",
  "Support",
];

class Rating extends _BecknSchema {
  static joiSchema = Joi.object({
    rating_category: Joi.string()
      .valid(...rating_category_enum)
      .example(rating_category_enum[0])
      .required(),
    id: Joi.string().required(),
    value: Joi.string().required(),
  });
}

module.exports = Rating;
