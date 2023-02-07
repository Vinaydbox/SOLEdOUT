const db = require('../conn').db;
const mongoose = require('mongoose');

//! For users
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
    category:{
        type: String
    },
    productDesc:{
        type:String
    },
    productURL:{
        type:String
    }
})

let productModel = mongoose.model('productdetails', productSchema);
module.exports = { productModel }

