const productgen = require('../../models/products/productModel').productModel;

async function decrementProductCount(req, res) {
    // console.log(req.body)
    let det = await productgen.updateOne({ pid: req.body.pid }, {
        $inc: {
            "count": -parseInt(req.body.count)
        }
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