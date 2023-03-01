const productgen = require('../../models/products/productModel').productModel;

async function updateProductCount(req, res){
    const resu = await productgen.updateOne({pid:req.params.pid},
        {
            $inc:{"count":1}
        },
    )
    try{
        res.send(resu);
    }
    catch(err){
        res.send(err);
    }
}

module.exports = {updateProductCount}