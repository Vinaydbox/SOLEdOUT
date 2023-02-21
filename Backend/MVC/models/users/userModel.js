const db = require('../conn').db;
const mongoose = require('mongoose');

//! For users
const userSchema = mongoose.Schema({
    profileImage:{
        type: String,
    },
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
    },
    mobileNumber:{
        type:Number,
    },
    address: {
        type: String,
    },
    userCart:[{
        productName: {type:String},
        price: {type:String},
        productURL: {type:String},
        count:{type:Number},
        brand:{type:String},
        pid:{type:Number}
    }],
    prevOrders:[{
        productName: {type:String},
        price: {type:String},
        productURL: {type:String},
        count:{type:Number},
        brand:{type:String},
        pid:{type:Number}
    }],

    //! for recomendation engine
    userRecomms:{
        onclickRecomms:[{
            pid: {type:Number},
            count: {type:Number}
        }],
        searchRecomms:[{
            pid:{type:Number},
            count: {type:Number}
        }]
    }
})

let userModel = mongoose.model('userdetails', userSchema);
module.exports = { userModel }

