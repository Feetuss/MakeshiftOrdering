const express = require('express');
const controller = ('/backend/controller/product');
const router = express.Router();



//get list of all orders
//router.app.get('/',controller.handleList);
//get order by id
router.app.get('/:orderId',controller.handl);
//create a new order
router.app.post('/',controller.handleCreate);
//delete an order by id
router.app.delete('/',controller.handleDelete);

module.exports = router;