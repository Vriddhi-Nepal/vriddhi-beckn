# @vriddhi-beckn/core-specs

Core specifications of Beckn. This package will validate the json input or object in compliance with the core specifications of Beckn.

## Installation

```sh
$ npm i @vridhhi-beckn/core-specs
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

## Output

```json
{
  "url": "http://example.com/example.png",
  "size_type": "xs",
  "width": "200px",
  "height": "300px"
}
```
