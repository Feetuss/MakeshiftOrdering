const mongoose = require('mongoose');

async function connectToDatabase() {
    try{
    await mongoose.connect('mongodb://localhost:27017/MakeshiftOrdering');
    console.log('Connected Successfully to MongoDB');
    }catch(error){
        console.log('Error while connecting to MongoDB: ', error);
    }
}

module.exports = connectToDatabase