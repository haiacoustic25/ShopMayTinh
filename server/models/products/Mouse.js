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
    enum: [
      "Logitech",
      "Newmen",
      "Microsoft",
      "Asus",
      "DAREU",
      "Razer",
      "MSI",
      "Lenovo",
      "GIGABYTE",
    ],
  },
  price: { type: "number", required: true },
  promotion: {
    type: "number",
    required: true,
  },
  priceNew: { type: "number" },
  connect: { type: "string", required: true, enum: ["Wired", "Wireless"] },
  color: {
    type: "string",
  },
  img: {
    type: "string",
    required: false,
  },
  descriptionsHTML: {
    type: "String",
  },
  createdAt: {
    type: "date",
    default: new Date(),
  },
});

module.exports = mongoose.model("mouse", MouseSchema);
