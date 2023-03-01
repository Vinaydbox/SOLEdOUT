const productgen = require('../../models/products/productModel').productModel;

async function fetchAllProducts(req, res) {
    await productgen.find({}, (err, docs) => {
        if (err) {
            res.send("something went wrong");
        }
        else {
            console.log("products milgaye");
            res.send(JSON.stringify(docs));
        }
    })
}

module.exports = { fetchAllProducts };