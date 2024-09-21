const Joi = require("joi");

const _BecknSchema = require("./schema/_BecknSchema");

function createClass(className, initJoiSchema) {
  return {
    [className]: class extends _BecknSchema {
      static joiSchema = initJoiSchema(Joi);
    },
  }[className];
}

module.exports = (className, initJoiSchema) => {
  const MyClass = createClass(className, initJoiSchema);
  const myObject = new MyClass();

  return [MyClass, myObject];
};
