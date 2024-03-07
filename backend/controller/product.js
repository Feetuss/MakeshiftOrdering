const mongoose = require("mongoose");
const product = require("../service/models/productsModel");

//here we handle CRUD api requests

const handleList = async (req, res) => {
  try {
    const result = await product.find();
    if (result) {
      res.status(200).json({
        products: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error Occured",
      error: error,
    });
  }
};

const handleGetById = async (req, res) => {
  const id = req.params.productId;
  try {
    const result = await product.findById(id);
    if (result) {
      res.status(200).json({
        message: "Product found",
        product: result,
      });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Product not found",
      error: error,
    });
  }
};

const handleCreate = async (req, res) => {
  const productData = new product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    tags: req.body.tags,
    description: req.body.description,
  });
  await productData
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Product created",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const handleDelete = async (req, res) => {
  const id = req.params.productId;
  try {
    const result = await product.findByIdAndDelete(id).exec();
    if (result) {
      res.status(200).json({
        message: "Product deleted",
      });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error Occured",
      error: error,
    });
  }
};

const handleUpdate = async (req, res) => {
  const id = req.params.productId;
  const updatedProduct = {
    name: req.body.name,
    price: req.body.price,
    tags: req.body.tags,
    description: req.body.description,
  };
  try {
    const result = await product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    if (result) {
      res.status(200).json({
        message: "Product Updated",
        updatedProduct: result,
      });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error Occured",
      error: error,
    });
  }
};

module.exports.handleCreate = handleCreate;
module.exports.handleList = handleList;
module.exports.handleGetById = handleGetById;
module.exports.handleDelete = handleDelete;
module.exports.handleUpdate = handleUpdate;
