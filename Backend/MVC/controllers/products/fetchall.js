const productgen = require('../../models/products/productModel').productModel;

async function fetchAllProducts(req, res) {
    // productgen.find({}, (err, docs) => {
    //     if (err) {
    //         res.send("something went wrong");
    //     }
    //     else {
    //         console.log("products milgaye");
    //         res.send(JSON.stringify(docs));
    //     }
    // })
    try {
        const data = await productgen.find({});
        res.send(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

module.exports = { fetchAllProducts };