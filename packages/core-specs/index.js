const schema = require("./schema");

module.exports = {
  ack: new schema.Ack(),
  addOn: new schema.AddOn(),
  address: new schema.Address(),
  agent: new schema.Agent(),
  authorization: new schema.Authorization(),
  billing: new schema.Billing(),
  cancellation: new schema.Cancellation(),
  cancellationTerm: new schema.CancellationTerm(),
  catalog: new schema.Catalog(),
  category: new schema.Category(),
  circle: new schema.Circle(),
  city: new schema.City(),
  contact: new schema.Contact(),
  context: new schema.Context(),
  country: new schema.Country(),
  credential: new schema.Credential(),
  customer: new schema.Customer(),
  decimalValue: new schema.DecimalValue(),
  descriptor: new schema.Descriptor(),
  domain: new schema.Domain(),
  duration: new schema.Duration(),
  error: new schema.Error(),
  fee: new schema.Fee(),
  form: new schema.Form(),
  formResponse: new schema.FormResponse(),
  fulfillment: new schema.Fulfillment(),
  fulfillmentState: new schema.FulfillmentState(),
  gps: new schema.Gps(),
  image: new schema.Image(),
  intent: new schema.Intent(),
  item: new schema.Item(),
  itemQuantity: new schema.ItemQuantity(),
  language: new schema.Language(),
  location: new schema.Location(),
  mediaFile: new schema.MediaFile(),
  offer: new schema.Offer(),
  option: new schema.Option(),
  order: new schema.Order(),
  organization: new schema.Organization(),
  payment: new schema.Payment(),
  person: new schema.Person(),
  price: new schema.Price(),
  provider: new schema.Provider(),
  quotation: new schema.Quotation(),
  rating: new schema.Rating(),
  refundTerm: new schema.RefundTerm(),
  region: new schema.Region(),
  replacementTerm: new schema.ReplacementTerm(),
  returnTerm: new schema.ReturnTerm(),
  scaler: new schema.Scaler(),
  schedule: new schema.Schedule(),
  skill: new schema.Skill(),
  state: new schema.State(),
  stop: new schema.Stop(),
  subscriber: new schema.Subscriber(),
  subscription: new schema.Subscription(),
  support: new schema.Support(),
  tag: new schema.Tag(),
  tagGroup: new schema.TagGroup(),
  time: new schema.Time(),
  timeToLive: new schema.TimeToLive(),
  tracking: new schema.Tracking(),
  vehicle: new schema.Vehicle(),
  xInput: new schema.XInput(),
};
