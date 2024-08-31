const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Duration = require("./Duration");
const Schedule = require("./Schedule");

class Time extends _BecknSchema {
  static joiSchema = Joi.object({
    label: Joi.string().required(),
    timestamp: Joi.date().required(),
    duration: Duration.joiSchema.required(),
    range: Joi.object({
      start: Joi.date().required(),
      end: Joi.date().required(),
    }),
    days: Joi.string().required(),
    schedule: Schedule.joiSchema.required(),
  }).required();
}

module.exports = Time;
