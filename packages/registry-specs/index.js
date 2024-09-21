const schema = require("./schema");

module.exports = {
  lookup: new schema.Lookup(),
  lookupResponse: new schema.LookupResponse(),
  onSubscribe: new schema.OnSubscribe(),
  onSubscribeResponse: new schema.OnSubscribeResponse(),
  subscribe: new schema.Subscribe(),
  subscribeResponse: new schema.SubscribeResponse(),
};
