const couponModelCtrl = require('../../models/products/couponModel')

//! to add user to the database

function addCoupon(req, res){
    console.log('addCoupon post call reached.')
    console.log(req.body);
    let couponData = couponModelCtrl.couponModel({
        couponCode: req.body.couponCode,
        brand: req.body.brand,
        discount: req.body.discount,
    })
    console.log("COUPON");
    console.log(couponData);
    couponData.save((err, result) => {
        if (err) {
            res.send("Error " + err)
        }
        else {
            console.log("Success");
            res.send(result)
        }
    })
}

module.exports = { addCoupon }