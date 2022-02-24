const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MouseSchema = new Schema({
  name: {
    type: "string",
    required: true,
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

module.exports = mongoose.model("mouse", MouseSchema);
