const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  phoneNumber: {
    type: "number",
    required: true,
  },
  username: {
    type: "string",
    require: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  avatar: {
    type: "string",
    required: false,
  },
  admin: {
    type:"boolean",
  },
  
});

module.exports = mongoose.model("user", UserSchema);
