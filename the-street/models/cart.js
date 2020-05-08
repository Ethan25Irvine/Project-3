const mongoose = require("mongoose");
//create schema and model
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