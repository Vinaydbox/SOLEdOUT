const coupon = require('../../models/products/couponModel').couponModel;

function tempCoupon(req,res){
    console.log("tempCoupon method reached.")
    console.log(req.body)
    res.send("received the request")
}

module.exports =  {tempCoupon}