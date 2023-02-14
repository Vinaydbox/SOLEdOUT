const addp = require("../../models/products/productModel").productModel;

function addProd(req, res) {
    let cnt = addp.count({}, (err, data) => {
        if (err) {
            console.log("err");
        } else {
            console.log(req.body);
            let prodData = addp({
                pid: data + 1000 + 1,
                productName: req.body.productName,
                price: req.body.price,
                brand: req.body.brand,
                productDesc: req.body.productDesc,
                productURL: req.body.productURL,
            });
            prodData.save((err, result) => {
                if (err) {
                    res.send("Error " + err);
                } else {
                    res.send("Pushed the card");
                }
            });
        }
    });
}

module.exports = {addProd}