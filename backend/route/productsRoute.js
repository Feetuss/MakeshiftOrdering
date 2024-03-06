const express = require('express');
const controller = require('../controller/product');
const router = express.Router();


//get list of all products
router.get('/products',controller.handleList);
//get product by id
router.get('/products/:productId',controller.handleGetById);
//create a new product
router.post('/createProduct',controller.handleCreate);
//delete an product by id
router.delete('/products/:productId',controller.handleDelete);

module.exports = router;