const couponModelCtrl = require('../../models/products/couponModel')

async function fetchCoupon(req, res){
    couponModelCtrl.couponModel.find({couponCode:req.params.couponCode},(err, docs)=>{
        if(err){
            res.send("something went wrong");
        }
        else{
            res.send(docs);
        }
    })
}

module.exports = {fetchCoupon};