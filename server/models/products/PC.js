const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PCSchema = new Schema({
  name: {
    type: "string",
  },
  trademark: {
    type: "string",
    required: true,
  },
  price: { type: "number", required: true },
  promotion: {
    type: "number",
    required: true,
  },
  color: {
    type: "string",
  },
  storage: {
    type: "string",
    require: true,
  },
  graphics: {
    type: "string",
    require: true,
  },
  CPU:{
    type: "string",
    required: true,
  },
  RAM: {
    type: "string",
    required: true,
  },
  operatingSystem: {
    type: "string",
    required: true,
  },
  img: {
    type: "string",
    required: false,
  },
  descriptions: {
    type: "String",
  },
  createdAt: {
    type: "date",
    default: new Date(),
  },
});

module.exports = mongoose.model("PC", PCSchema);
