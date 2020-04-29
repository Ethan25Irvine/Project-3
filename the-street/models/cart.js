const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
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
    ],
    active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now()
    }
  },
);

module.exports = mongoose.model("Cart", CartSchema);