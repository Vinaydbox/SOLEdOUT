const db = require('../conn').db;
const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    productName :{
        type:String,
        required:true
    },
    price :{
        type:Number,
        required:true
    },
    productURL :{
        type:String,
        required:true
    }
})

let cartModel = mongoose.model('cartdetails', cartSchema);
module.exports = { cartModel }