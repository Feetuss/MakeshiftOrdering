const mongoose = require('mongoose');
const productSchema = require('./productsModel');
const userSchema = require('./usersModel');

const orderSchema = new mongoose.Schema({
    products: [productSchema],
    users: userSchema,
    totalPrice: Number
});

const order = mongoose.model('Order', orderSchema);

module.exports = order;