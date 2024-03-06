const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
});

const user = mongoose.model('User', userSchema);
module.exports = user;