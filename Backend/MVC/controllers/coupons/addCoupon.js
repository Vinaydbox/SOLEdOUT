const couponModelCtrl = require('../../models/products/couponModel')

//! to add user to the database

async function addCoupon(req, res){
    let couponData = couponModelCtrl.couponModel({
        couponCode: req.body.couponCode,
        brand: req.body.brand,
        discount: req.body.discount,
    });
    const result = await couponData.save()
    try{
        res.send(result);
    }
    catch(err){
        res.send(err);
    }
}

module.exports = { addCoupon }