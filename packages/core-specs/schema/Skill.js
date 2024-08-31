const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");

class Skill extends _BecknSchema {
  static joiSchema = Joi.object({
    code: Joi.string().required(),
    type: Joi.string().required(),
  }).required();
}

module.exports = Skill;
