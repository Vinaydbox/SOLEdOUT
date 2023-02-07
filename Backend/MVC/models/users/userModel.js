const db = require('../conn').db;
const mongoose = require('mongoose');

//! For users
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userCategory: {
        type: String,
    }
})

let userModel = mongoose.model('userdetails', userSchema);
module.exports = { userModel }

