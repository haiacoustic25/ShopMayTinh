const Cart = require("../models/Cart");
const Laptop = require("../models/Laptop");

class CartController {
  // @Router /cart/create
  // @desc create cart
  async createCart(req, res) {
    const {
      userId,
      products: { productId, quantity },
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
    const { userId } = req.query;
    try {
      const cart = await Cart.findOne({ userId }).populate(
        "products.productId"
      );
      res.json({ success: true, cart });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  // @router /cart/delete
  // @desc delete product in cart
  async deleteCart(req, res) {
    const { userId, productId } = req.query;

    try {
      const cart = await Cart.findOne({ userId }).populate(
        "products.productId"
      );
      // console.log(cart.products);
      for (let i = 0; i < cart.products.length; i++) {
        if (cart.products[i].productId._id == productId)
          cart.products.splice(i, 1);
      }
      cart.save();
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
}

module.exports = new CartController();
