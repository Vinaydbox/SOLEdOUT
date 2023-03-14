const db = require('../conn').db;
const mongoose = require('mongoose');

//! For coupons
const couponSchema = mongoose.Schema({
    couponCode:{
        type:String,
    },
    brand:{
        type: Array,
    },
    discount:{
        type:Number,
    }
    
})

let couponModel = mongoose.model('coupondetails', couponSchema);
module.exports = { couponModel }

