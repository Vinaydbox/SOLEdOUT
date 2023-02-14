const couponModelCtrl = require('../../models/products/couponModel')

//! to add user to the database

async function addCoupon(req, res) {
    console.log(req.body);
    
    let couponData = couponModelCtrl.couponModel({
        couponCode: req.body.couponCode,
        brand: req.body.brand,
        discount: req.body.discount,
    })

    couponData.save((err, result) => {
        if (err) {
            res.send("Error " + err)
        }
        else {
            res.send(result)
        }
    })
}

module.exports = { addCoupon }