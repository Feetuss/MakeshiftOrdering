const express = require('express');
const router = express.Router();
const controller = require('../controller/orders');


//get list of all orders
router.get('/',controller.handleList);
//get order by id
router.get('/:orderid',controller.handleGetById);
//create a new order
router.post('/',controller.handleCreate);
//delete an order by id
router.delete('/',controller.handleDelete);

module.exports = router;
