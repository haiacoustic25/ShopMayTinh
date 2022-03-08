const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PCSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  trademark: {
    type: "string",
    required: true,
    enum: [
      "Lenovo",
      "Razer",
      "Dell",
      "Asus",
      "HP",
      "Microsoft",
      "Acer",
      "PC Gaming",
    ],
  },
  price: { type: "number", required: true },
  promotion: {
    type: "number",
    required: true,
  },
  priceNew: { type: "number" },
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
  CPU: {
    type: "string",
    required: true,
    enum: [
      "Intel Dual Core",
      "Intel Core i3",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core i9",
      "InTel Xeon",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "MD Ryzen 7",
    ],
  },
  RAM: {
    type: "string",
    required: true,
    enum: [
      "4 GB",
      "8 GB",
      "12 GB",
      "16 GB",
      "20 GB",
      "32 GB",
      "64 GB",
      "128 GB",
    ],
  },
  operatingSystem: {
    type: "string",
    required: true,
    enum: ["Window", "Mac OS", "Ubutu"],
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

module.exports = mongoose.model("PC", PCSchema);
