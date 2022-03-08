const Cart = require("../models/Cart");
const Laptop = require("../models/products/Laptop");
const PC = require("../models/products/PC");
const Mouse = require("../models/products/Mouse");
class CartController {
  // @Router /cart/create
  // @desc create cart
  async createCart(req, res) {
    const {
      userId,
      products: { productId, quantity, onModel },
    } = req.body;

    try {
      let cart = await Cart.findOne({ userId });
      // console.log(cart);
      if (!cart) {
        const dataCart = {
          userId,
          products: [{ productId, quantity }],
        };
        cart = new Cart(dataCart);
        cart.save();
        return res.json({
          success: true,
          cart,
          message: "create cart successfully",
        });
      }
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      console.log(cart);
      if (itemIndex > -1) {
        return res.json({
          success: false,
          message: "product exists in the cart",
        });
      } else {
        //product does not exists in cart, add new item
        cart.products.push({ productId, quantity });
      }
      cart.save();
      return res.json({
        success: true,
        cart: cart,
        messages: "update cart successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /cart/read
  // @desc get cart
  async readCart(req, res) {
    const { userId, model } = req.query;
    try {
      const cart = await Cart.findOne({ userId }).populate({
        path: "products.productId",
        model: model,
      });
      res.json({ success: true, cart });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
}

module.exports = new CartController();
