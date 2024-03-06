const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    tags: [String],
    description: String,

});

const product = mongoose.model('Product', productSchema);
module.exports = product;
