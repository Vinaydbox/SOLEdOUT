const productgen = require('../../models/products/productModel').productModel;

async function decrementProductCount(req, res){
    console.log(req.body)
    await productgen.updateOne({pid:req.params.pid},
        {
            $inc:{"count":-parseInt(req.body.count)}
        },
        (err,data)=>{
            if(err){
                res.send("Error decrementing product count",err)
                console.log("Error decrementing product count")
            }else{
                res.send("Successfully decremented product count")
                console.log("Successfully decremented product count")
            }
        }
    )
}

module.exports = {decrementProductCount}