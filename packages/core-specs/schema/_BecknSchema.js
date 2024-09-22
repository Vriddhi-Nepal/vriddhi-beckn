class _BecknSchema {
  static joiSchema = null;

  construct() {
    if (!this.constructor.joiSchema) {
      throw new Error("Joi Schema is not initialized");
    }
  }

  set(val) {
    const { error, value } = this.constructor.joiSchema.validate(val, {
      stripUnknown: true,
    });
    if (error) throw new Error(error);

    this.value = value;

    return this;
  }

  get(defaultValue = null) {
    return this.value || defaultValue;
  }
}

module.exports = _BecknSchema;
