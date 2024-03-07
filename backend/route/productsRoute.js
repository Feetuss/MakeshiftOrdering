const express = require("express");
const controller = require("../controller/product");
const router = express.Router();

//get list of all products
router.get("/products", controller.handleList);
//get product by id
router.get("/product/:productId", controller.handleGetById);
//create a new product
router.post("/createProduct", controller.handleCreate);
//delete a product by id
router.delete("/deleteProduct/:productId", controller.handleDelete);
//update a product by id
router.patch("/updateProduct/:productId", controller.handleUpdate);

module.exports = router;
