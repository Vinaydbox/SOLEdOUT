const productgen = require('../../models/products/productModel').productModel;

async function fetchOneProduct(req, res) {
    try {
        const data = await productgen.find({ brand: req.params.brand });
        // console.log(data);
        res.send(data);
    }
    catch (err) {
        res.send(err);
    }
}

module.exports = { fetchOneProduct }