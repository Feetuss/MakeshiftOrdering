const express = require("express");
const controller = require("../controller/users");
const router = express.Router();

//list all users
router.get("/users", controller.handleList);
//list user by id
router.get("/user/:userId", controller.handleGetById);
//create a new user
router.post("/createUser", controller.handleCreate);
//delete a user by id
router.delete("/deleteUser/:userId", controller.handleDelete);

router.patch("/updateUser/:userId", controller.handleUpdate);

module.exports = router;
