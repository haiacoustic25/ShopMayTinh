const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// create Product
router.post("/create/laptop", productController.createLaptop);
router.post("/create/PC", productController.createPC);
router.post("/create/mouse",productController.createMouse);

// get product
router.get("/post/laptop", productController.postLaptop);
router.get("/post/PC", productController.postPC);
router.get("/post/mouse", productController.postMouse);


router.get("/find/laptop/:id", productController.findLaptop);
router.put("/fix/laptop/:id", productController.fixLaptop);
router.delete("/delete/laptop/:id", productController.deleteLaptop);
router.delete("/delete/mouse/:id", productController.deleteMouse);
router.delete("/delete/:id", productController.delete);

module.exports = router;
