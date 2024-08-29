const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Duration = require("./Duration");

class Schedule extends _BecknSchema {
  static joiSchema = Joi.object({
    frequency: Duration.joiSchema.required(),
    holidays: Joi.array().items(Joi.date().required()).min(1).required(),
    times: Joi.array().items(Joi.date().required()).min(1).required(),
  }).required();
}

module.exports = Schedule;
