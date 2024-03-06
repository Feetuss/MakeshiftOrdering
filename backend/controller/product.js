const mongoose = require('mongoose');
const productSchema = require('../service/models/productsModel');


//here we handle CRUD api requests



const handleList = async(req, res) =>{
    console.log("sent a get request to Product controller");
    
    return res.status(200).json({
        'message': 'sent a get request to products'
    });
};

const handleGetById = async (req, res) => {
    const id = req.params.productId;
    console.log("get by ID");
    
};

const handleCreate = async (req, res) =>{
const productData = new productSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    tags: req.body.tags,
    description: req.body.description
});
await productData.save().then(result => {
    console.log(result);
    res.status(201).json({
        message: "Product created",
        createdProduct: result
    });
}).catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});

};

const handleDelete = async(req, res) =>{
console.log("Product Deleted");

};

module.exports.handleCreate = handleCreate;
module.exports.handleList = handleList;
module.exports.handleGetById = handleGetById;
module.exports.handleDelete = handleDelete;