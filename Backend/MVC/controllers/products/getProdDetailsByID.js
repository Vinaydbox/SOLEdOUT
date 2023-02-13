const productgen = require('../../models/products/productModel').productModel;
//! to check if the user is already existing in the database

async function getProdDetailsByID(req, res) {
    productgen.findOne({ pid: req.params.pid }, (err, docs) => {
        if (err) {
            res.send("Error")
        } else {
            // docs = JSON.stringify(docs)
            console.log(docs);
            res.send(docs)
        }
    })
}

module.exports = { getProdDetailsByID }