# @vriddhi-beckn/core-specs

Core specifications of Beckn. This package will validate the json input or object in compliance with the core specifications of Beckn.

## Installation

```sh
$ npm i @vriddhi-beckn/core-specs
```

## Usage

### Input

```js
const schema = require("@vriddhi-beckn/core-specs");

const image = {
  url: "http://example.com/example.png",
  size_type: "xs",
  width: "200px",
  height: "300px",
};

console.log(schema.image.set(image).get());
```

### Output

```json
{
  "url": "http://example.com/example.png",
  "size_type": "xs",
  "width": "200px",
  "height": "300px"
}
```

## Extend

```
const becknExtend = require("@vriddhi-beckn/core-specs/extend");

const [FooBar, fooBar] = becknExtend("FooBar", (Joi) => {
  return Joi.object({
    message: Joi.string().required(),
  });
});

console.log(fooBar instanceof FooBar); // true
// console.log(fooBar.set({}).get()); // Errors
console.log(fooBar.set({ message: "Hello, World!" }).get()); // Errors

```

If you want to work with the class itself, use the first item of array provided by the extend function, or you can directly use the object of your class by using the second item of array.
