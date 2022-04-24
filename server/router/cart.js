const express = require("express");
const Router = express.Router();

const cartController = require("../controller/cartController");

Router.post("/create", cartController.createCart);
Router.get("/read", cartController.readCart);
Router.delete("/delete", cartController.deleteCart);

module.exports = Router;
