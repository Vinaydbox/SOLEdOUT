const couponModelCtrl = require('../../models/products/couponModel')

async function fetchCoupon(req, res) {
    const data = await couponModelCtrl.couponModel.find({ couponCode: req.params.couponCode })
    try {
        res.send(data);
    }
    catch (err) {
        res.send(err);

    }
}
module.exports = { fetchCoupon };