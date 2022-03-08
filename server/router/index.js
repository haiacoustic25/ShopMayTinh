const authRouter = require("./auth");
const productRouter = require("./product");
const cartRouter = require("./cart");

function router(app) {
  app.use("/auth", authRouter);
  app.use("/product", productRouter);
  app.use("/cart", cartRouter);
}

module.exports = router;
