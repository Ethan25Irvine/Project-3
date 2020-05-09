const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
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
        notes: String,
        price: Number
      }
    ],
    pickupTime: Number
    
  },
);

module.exports = mongoose.model("Order", OrderSchema);