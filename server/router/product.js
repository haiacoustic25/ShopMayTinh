const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// create Product
router.post("/create/laptop", productController.createLaptop);

// get product
router.get("/laptop", productController.getLaptop);

// find product by id
router.get("/:id", productController.findLaptop);
router.put("/fix/laptop/:id", productController.fixLaptop);

router.delete("/delete/:id", productController.deleteLaptop);

module.exports = router;
