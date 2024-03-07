const mongoose = require("mongoose");
const productSchema = require("./productsModel");
const userSchema = require("./usersModel");

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // This should match the name you used when you called mongoose.model for the User model
  },
  totalPrice: Number,
});

const order = mongoose.model("Order", orderSchema);

module.exports = order;
