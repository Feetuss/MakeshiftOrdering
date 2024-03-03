const express = require('express');
const router = express.Router();
const controller = ('/backend/controller/orders.js');


//get list of all orders
router.app.get('/',controller.handleList);
//get order by id
router.app.get('/',controller.handleGetById);
//create a new order
router.app.post('/',controller.handleCreate);
//delete an order by id
router.app.delete('/',controller.handleDelete);

module.exports = router;
