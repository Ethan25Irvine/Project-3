const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.String,
      ref: "User"
    },
    userName: {
      type: mongoose.Schema.Types.String,
      ref: "User"
    },
    products: [
      {
        productName: String,
        modifiers: [
          {
            modifierName: String,
          }
        ],
        price: Number
      }
    ]
  }
);

module.exports = mongoose.model("Cart", CartSchema);