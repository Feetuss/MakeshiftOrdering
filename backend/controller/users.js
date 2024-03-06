const bodyParser = require('body-parser');
const user = require('../service/models/usersModel');
const mongoose = require('mongoose');
//here we handle CRUD api requests
const handleList = async(req, res) =>{
    console.log("sent a get request to Users controller");
    
    return res.status(200).json({
        'message': 'sent a get request to Users'
    });
};

const handleGetById = async (req, res) => {
    const id = req.params.userId;
    console.log("get user by ID");
    return res.status(200).json({
        'message': 'sent a get request to Users',
        'id': id
    });
};

const handleCreate = async (req, res) => {
    console.log("Creating user");

    // Get user data from request body
    const userData = new user({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    
    });
    console.log(userData); // Create new user using UsersModel
        await userData.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: "User created",
                createdUser: result
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    
};

const handleDelete = async(req, res) =>{
console.log("User Deleted");

};

module.exports.handleCreate = handleCreate;
module.exports.handleList = handleList;
module.exports.handleGetById = handleGetById;
module.exports.handleDelete = handleDelete;