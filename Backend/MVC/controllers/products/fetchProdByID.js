const productgen = require('../../models/products/productModel').productModel;
//! to check if the user is already existing in the database

async function fetchProdByID(req, res) {
    productgen.find({ pid: req.params.pid }, (err, docs) => {
        if (err) {
            res.send("Error")
        } else {
            // docs = JSON.stringify(docs)
            if (docs.length >= 1) {
                res.send("Exists")
                console.log("Exists")
            }
            else {
                res.send("DoNotExist")
                console.log("DoNotExist")
            }
        }
    })
}



module.exports = { fetchProdByID }