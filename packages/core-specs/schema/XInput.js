const Joi = require("joi");

const _BecknSchema = require("./_BecknSchema");
const Form = require("./Form");

class XInput extends _BecknSchema {
  static joiSchema = Joi.object({
    required: Joi.boolean().required(),
    form: Form.joiSchema.when("required", {
      is: false,
      then: Joi.optional(),
    }),
  }).required();
}

module.exports = XInput;
