const productgen = require('../../models/products/productModel').productModel;

async function decrementProductCount(req, res) {
    // console.log(req.body)
    const det = await productgen.updateOne({ pid: req.params.pid },
        {
            $inc: { "count": -parseInt(req.body.count) }
        })
    res.send("decremented product count")
    // try{
    //     res.send(det);
    // }
    // catch(err){
    //     res.send(err);
    // }
}

module.exports = { decrementProductCount }