const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// create Product
router.post("/create/laptop", productController.createLaptop);
router.post("/create/PC", productController.createPC);
router.post("/create/mouse", productController.createMouse);

// get product
// router.get("/laptop", productController.getLaptop);
router.get("/laptop", productController.getLaptop);
router.get("/PC", productController.getPC);
router.get("/mouse", productController.getMouse);

// find product by id
router.get("/laptop/:id", productController.findLaptop);
router.get("/PC/:id", productController.findPC);
router.get("/mouse/:id", productController.findMouse);

router.put("/fix/laptop/:id", productController.fixLaptop);
router.delete("/delete/laptop/:id", productController.deleteLaptop);
router.delete("/delete/mouse/:id", productController.deleteMouse);
router.delete("/delete/:id", productController.delete);

module.exports = router;
