const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const mimetype_enum = ["text/html", "application/xml"];

class Form extends _BecknSchema {
  static joiSchema = Joi.object({
    url: Joi.string().uri().required(),
    data: Joi.object().required(),
    mimetype: Joi.string()
      .valid(...mimetype_enum)
      .example(mimetype_enum[0])
      .required(),
    submission_id: Joi.string()
      .pattern(
        new RegExp(
          /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        ),
      )
      .required(),
  }).required();
}

module.exports = Form;
