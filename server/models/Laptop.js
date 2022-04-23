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
    enum: [
      "Lenovo",
      "Razer",
      "Dell",
      "Asus",
      "Apple",
      "HP",
      "Microsoft",
      "Acer",
    ],
  },
  screenSize: {
    type: "string",
    require: true,
    enum: ["13.3 inch", "14 inch", "15.6 inch"],
  },
  price: { type: "number", require: true },
  priceNew: { type: "number" },
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
  CPU: {
    type: "string",
    require: true,
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
      "Apple M1bat",
    ],
  },
  RAM: {
    type: "String",
    require: true,
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
  descriptionsHTML: {
    type: "String",
    require: true,
  },
  createdAt: {
    type: "date",
    default: new Date(),
  },
});

module.exports = mongoose.model("laptop", LapTopSchema);
