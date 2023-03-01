const productgen = require('../../models/products/productModel').productModel;

async function fetchOneProduct(req, res){
    const data = productgen.find({brand:req.params.brand});
    try{
        res.send(data);
    }
    catch(err){
        res.send(err);
    }
}

module.exports ={fetchOneProduct}