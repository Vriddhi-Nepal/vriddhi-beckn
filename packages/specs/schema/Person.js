const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Credential = require("./Credential");
const Duration = require("./Duration");
const Image = require("./Image");
const Language = require("./Language");
const Skill = require("./Skill");
const TagGroup = require("./TagGroup");

class Person extends _BecknSchema {
  static joiSchema = Joi.object({
    id: Joi.string().required(),
    url: Joi.string().required().uri(),
    name: Joi.string().required(),
    image: Image.joiSchema.required(),
    age: Duration.joiSchema.required(),
    dob: Joi.date().required(),
    gender: Joi.string().required(),
    creds: Joi.array().items(Credential.joiSchema).min(1).required(),
    languages: Joi.array().items(Language.joiSchema).min(1).required(),
    skills: Joi.array().items(Skill.joiSchema).min(1).required(),
    tags: Joi.array().items(TagGroup.joiSchema).min(1).required(),
  });
}

module.exports = Person;
