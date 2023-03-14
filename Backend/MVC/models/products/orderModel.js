const db = require('../conn').db;
const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productURL: {
        type: String,
        required: true
    },
    count: {
        type: Number
    },
    Brand: {
        type: String
    },
    date:{
        type:Date
    }
})

let orderModel = mongoose.model('orderDetails', ordersSchema);
module.exports = { orderModel };