const express = require('express');
const controller = require('../controller/users');
const router = express.Router();

//list all users
router.get('/users', controller.handleList);
//list user by id
router.get('/users/:userId', controller.handleGetById);
//create a new user
router.post('/createUser', controller.handleCreate);
//delete a user by id
router.delete('/deleteUsers/:userId', controller.handleDelete);

module.exports = router;