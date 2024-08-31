const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Error = require("./Error");

class FormResponse extends _BecknSchema {
  static joiSchema = Joi.object({
    status: Joi.boolean().required(),
    submission_id: Joi.string()
      .pattern(
        new RegExp(
          /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        ),
      )
      .required(),
    errors: Joi.array().items(Error.joiSchema).min(1).required(),
  }).required();
}

module.exports = FormResponse;
