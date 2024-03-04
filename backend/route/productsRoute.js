const express = require('express');
const controller = require('../controller/product');
const router = express.Router();


//get list of all orders
router.get('/',controller.handleList);
//get order by id
router.get('/:orderId',controller.handleGetById);
//create a new order
router.post('/',controller.handleCreate);
//delete an order by id
router.delete('/',controller.handleDelete);

module.exports = router;