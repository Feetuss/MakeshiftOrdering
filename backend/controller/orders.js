const mongoose = require("mongoose");
const order = require("../service/models/ordersModel");
const product = require("../service/models/productsModel");
//here we handle CRUD api requests
const handleList = async (req, res) => {
  const result = await order.find();
  if (result) {
    res.status(200).json({
      message: "Orders fetched successfully",
      orders: result,
    });
  } else {
    res.status(200).json({
      orders: [],
    });
  }
};

const handleGetById = async (req, res) => {
  const id = req.params.orderId;
  const result = await order.findById(id);
  if (result) {
    res.status(200).json({
      message: "Order found",
      order: result,
    });
  } else {
    res.status(404).json({
      message: "Order not found",
    });
  }
};

const handleCreate = async (req, res) => {
  try {
    const { products, user } = req.body;

    // Fetch each product and calculate the total price
    let totalPrice = 0;
    for (let productId of products) {
      const Product = await product.findById(productId);
      totalPrice += Product.price;
    }
    totalPrice = totalPrice.toFixed(2);
    // Create the order
    const newOrder = new order({
      products: products,
      user: user,
      totalPrice: totalPrice,
    });

    // Save the order
    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: "Order created successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating order",
    });
  }
};

const handleDelete = async (req, res) => {
  const id = req.params.orderId;
  const result = await order.findByIdAndDelete(id);
  if (result) {
    res.status(200).json({
      message: "Order deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "Order not found",
    });
  }
};

module.exports.handleCreate = handleCreate;
module.exports.handleList = handleList;
module.exports.handleGetById = handleGetById;
module.exports.handleDelete = handleDelete;
