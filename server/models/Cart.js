const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          require: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", CartSchema);
