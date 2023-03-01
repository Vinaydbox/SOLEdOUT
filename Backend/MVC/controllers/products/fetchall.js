const productgen = require('../../models/products/productModel').productModel;

async function fetchAllProducts(req, res) {
    try {
        const data = await productgen.find({});
        res.send(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

module.exports = { fetchAllProducts };