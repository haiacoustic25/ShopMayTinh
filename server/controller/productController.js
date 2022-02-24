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
      storage,
      RAM,
      battery,
      weight,
      img,
    } = req.body;
    // check fill in information
    if (
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
    try {
      const newProduct = new Laptop(req.body);
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
    try {
      const newProduct = new PC(req.body);
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
  async createMouse(req, res) {
    const { name, trademark, price, promotion, color, img } = req.body;
    // check fill in information
    if (!name || !trademark || !promotion || !price || !color || !img) {
      return res
        .status(200)
        .json({ success: false, message: "Missing information" });
    }
    try {
      const newProduct = new Mouse(req.body);
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

  // @router /post/laptop
  // @desc GET product
  async postLaptop(req, res) {
    try {
      const listProduct = await Laptop.find();
      res.json({ success: true, listProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /find/laptop
  // @desc GET find one laptop
  async findLaptop(req, res) {
    try {
      const laptop = await Laptop.findById(req.params.id);
      res.json({ success: true, laptop });
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
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /post/PC
  // @desc GET PC
  async postPC(req, res) {
    try {
      const listProduct = await PC.find();
      res.json({ success: true, listProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /post/mouse
  // @desc GET mouse
  async postMouse(req, res) {
    try {
      const listProduct = await Mouse.find();
      res.json({ success: true, listProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
}

module.exports = new ProductController();
