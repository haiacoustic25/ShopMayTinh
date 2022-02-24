const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// product laptop
const LapTopSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  trademark: {
    type: "string",
    require: true,
  },
  screenSize: {
    type: "string",
    require: true,
  },
  price: { type: "number", require: true },
  promotion: {
    type: "number",
    require: true,
  },
  color: {
    type: "string",
    require: true,
  },
  storage: {
    type: "string",
    require: true,
  },
  RAM: {
    type: "string",
    require: true,
  },
  battery: {
    type: "String",
    require: true,
  },
  weight: {
    type: "number",
    require: true,
  },
  img: {
    type: "string",
    require: true,
  },
  descriptions: {
    type: "String",
    require: true,
  },
  createdAt: {
    type: "date",
    default: new Date(),
  },
});

module.exports = mongoose.model("laptop", LapTopSchema);
