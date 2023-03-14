const db = require('../conn').db;
const mongoose = require('mongoose');

//! For Products
const productSchema = mongoose.Schema({
    pid:{
        type: Number
    },
    productName:{
        type: String
    },
    price:{
        type: Number
    },
    brand:{
        type: String
    },
    productDesc:{
        type:String
    },
    productURL:{
        type:String
    },
    count:{
        type:Number
    }
})

let productModel = mongoose.model('productdetails', productSchema);
module.exports = { productModel }

