const express = require('express');
const router = express.Router();
const controller = require('../controller/orders');


//get list of all orders
router.get('/orders/',controller.handleList);
//get order by id
router.get('/orders/:orderid',controller.handleGetById);
//create a new order
router.post('/orders/',controller.handleCreate);
//delete an order by id
router.delete('/orders/',controller.handleDelete);

module.exports = router;
