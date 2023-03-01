const couponModelCtrl = require('../../models/products/couponModel')

function fetchCoupon(req, res) {
    const data = couponModelCtrl.couponModel.find({ couponCode: req.params.couponCode })
    try {
        res.send(data);
    }
    catch (err) {
        res.send(err);

    }
}
module.exports = { fetchCoupon };