const Laptop = require("../models/Laptop");

class ProductController {
  // @POST product Laptop
  // @desc product/create/laptop
  async createLaptop(req, res) {
    const {
      name,
      trademark,
      screenSize,
      price,
      promotion,
      color,
      CPU,
      storage,
      RAM,
      battery,
      weight,
      img,
      descriptionsHTML,
    } = req.body;
    // check fill in information
    if (
      !CPU ||
      !name ||
      !screenSize ||
      !trademark ||
      !promotion ||
      !price ||
      !color ||
      !storage ||
      !RAM ||
      !battery ||
      !weight ||
      !img
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Missing information" });
    }
    const newPrice = price - (price * promotion) / 100;
    try {
      const newProduct = new Laptop({
        name,
        trademark,
        priceNew: newPrice,
        screenSize,
        price,
        promotion,
        color,
        CPU,
        storage,
        RAM,
        battery,
        weight,
        img,
        descriptionsHTML,
      });
      newProduct.save();

      res.json({
        success: true,
        message: "Create product successfully",
        product: newProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /:id
  // @desc GET find laptop by id
  async findLaptop(req, res) {
    try {
      const product = await Laptop.findById(req.params.id);
      res.json({ success: true, product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /fix/laptop
  // @desc PUT fix one laptop
  async fixLaptop(req, res) {
    try {
      const laptop = req.body;
      await Laptop.findByIdAndUpdate(req.params.id, laptop);
      res.json({ success: true, laptop });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /delete/laptop/:id
  // @desc DELETE delete laptop
  async deleteLaptop(req, res) {
    try {
      await Laptop.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /laptop
  // @desc GET product
  async getLaptop(req, res) {
    try {
      const query = { ...req.query };
      let listProduct = [];

      // sort
      if (query.hasOwnProperty("sort")) {
        delete query.sort;
        listProduct = await Laptop.find({ ...query }).sort({
          priceNew: req.query.sort,
        });
      } else listProduct = await Laptop.find({ ...query });
      res.json({ success: true, listProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
}

module.exports = new ProductController();
