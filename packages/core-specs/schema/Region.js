const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

const dimensions_enum = ["1", "2", "3"];

class Region extends _BecknSchema {
  static joiSchema = Joi.object({
    dimensions: Joi.string()
      .valid(...dimensions_enum)
      .example(dimensions_enum[0])
      .required(),
    type: Joi.string().required(),
    name: Joi.string().required(),
    code: Joi.string().required(),
    boundary: Joi.string().required(),
    map_url: Joi.string().uri().required(),
  });
}

module.exports = Region;
