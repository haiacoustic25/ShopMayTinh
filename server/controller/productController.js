const Laptop = require("../models/products/Laptop");
const PC = require("../models/products/PC");
const Mouse = require("../models/products/Mouse");

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
  // @POST product PC
  // @desc product/create/PC
  async createPC(req, res) {
    const {
      name,
      trademark,
      price,
      promotion,
      color,
      graphics,
      storage,
      CPU,
      RAM,
      operatingSystem,
      img,
      descriptionsHTML,
    } = req.body;
    // check fill in information
    if (
      !name ||
      !trademark ||
      !promotion ||
      !price ||
      !color ||
      !graphics ||
      !storage ||
      !CPU ||
      !operatingSystem ||
      !RAM ||
      !img
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Missing information" });
    }

    const newPrice = price - (price * promotion) / 100;
    try {
      const newProduct = new PC({
        name,
        trademark,
        price,
        promotion,
        priceNew: newPrice,
        color,
        graphics,
        storage,
        CPU,
        RAM,
        operatingSystem,
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
  // @POST product mouse
  // @desc product/create/mouse
  async createMouse(req, res) {
    const {
      name,
      trademark,
      price,
      promotion,
      connect,
      color,
      img,
      priceNew,
      descriptionsHTML,
    } = req.body;
    // check fill in information
    if (
      !name ||
      !trademark ||
      !promotion ||
      !price ||
      !color ||
      !img ||
      !connect
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Missing information" });
    }
    const newPrice = price - (price * promotion) / 100;
    try {
      const newProduct = new Mouse({
        name,
        trademark,
        price,
        promotion,
        priceNew: newPrice,
        color,
        connect,
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

  // @router /laptop/:id
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
  // @router /PC/:id
  // @desc GET find PC by id
  async findPC(req, res) {
    try {
      const product = await PC.findById(req.params.id);
      res.json({ success: true, product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
  // @router /mouse/:id
  // @desc GET find mouse by id
  async findMouse(req, res) {
    try {
      const product = await Mouse.findById(req.params.id);
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
  // @router /delete/mouse/:id
  // @desc DELETE delete mouse
  async deleteMouse(req, res) {
    try {
      await Mouse.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
  // @router /delete/:id
  // @desc DELETE delete product
  async delete(req, res) {
    try {
      await Mouse.findByIdAndDelete(req.params.id);
      await Laptop.findByIdAndDelete(req.params.id);
      await PC.findByIdAndDelete(req.params.id);
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

  // @router /PC
  // @desc GET PC
  async getPC(req, res) {
    try {
      const query = { ...req.query };
      let listProduct = [];

      // sort
      if (query.hasOwnProperty("sort")) {
        delete query.sort;
        listProduct = await PC.find({ ...query }).sort({
          priceNew: req.query.sort,
        });
      } else listProduct = await PC.find({ ...query });
      res.json({ success: true, listProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /mouse
  // @desc GET mouse
  async getMouse(req, res) {
    try {
      let listProduct = [];
      const query = { ...req.query };

      // sort
      if (query.hasOwnProperty("sort")) {
        delete query.sort;
        listProduct = await Mouse.find({ ...query }).sort({
          priceNew: req.query.sort,
        });
      } else listProduct = await Mouse.find({ ...query });
      res.json({ success: true, listProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
}

module.exports = new ProductController();
