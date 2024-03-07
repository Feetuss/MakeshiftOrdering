const bodyParser = require("body-parser");
const user = require("../service/models/usersModel");
const mongoose = require("mongoose");
const { findById } = require("../service/models/productsModel");
//here we handle CRUD api requests
const handleList = async (req, res) => {
  console.log("sent a get request to Users controller");
  try {
    const users = await user.find().exec();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const handleGetById = async (req, res) => {
  const id = req.params.userId;
  try {
    const result = await user.findById(id).exec();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User not found",
      error: error,
    });
  }
};

const handleCreate = async (req, res) => {
  console.log("Creating user");

  // Get user data from request body
  const userData = new user({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
  });
  console.log(userData); // Create new user using UsersModel
  await userData
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User created",
        createdUser: result,
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
  console.log("User Deleted");
  const id = req.params.userId;
  try {
    const result = await user.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({
        message: "User Deleted",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};
const handleUpdate = async (req, res) => {
  console.log("User Updated");
  const id = req.params.userId;
  const updatedUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
  };
  res.status(200).json({
    message: "User Updated",
  });
  try {
    const result = await user.findByIdAndUpdate(id, updatedUser, { new: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

module.exports.handleCreate = handleCreate;
module.exports.handleList = handleList;
module.exports.handleGetById = handleGetById;
module.exports.handleDelete = handleDelete;
module.exports.handleUpdate = handleUpdate;
