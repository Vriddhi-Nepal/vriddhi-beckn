class _BecknSchema {
  static joiSchema = null;

  construct() {
    if (!this.constructor.joiSchema) {
      throw new Error("Joi Schema is not initialized");
    }
  }

  set(value) {
    const { error } = this.constructor.joiSchema.validate(value);
    if (error) throw new Error(error);

    this.value = value;

    return this;
  }

  get(defaultValue = null) {
    return this.value || defaultValue;
  }
}

module.exports = _BecknSchema;
