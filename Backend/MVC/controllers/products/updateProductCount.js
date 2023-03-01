const productgen = require('../../models/products/productModel').productModel;

async function updateProductCount(req, res){
    await productgen.updateOne({pid:req.params.pid},
        {
            $inc:{"count":1}
        },
        (err,data)=>{
            if(err){
                res.send("Error updating product count",err)
                console.log("Error updating product count")
            }else{
                res.send("Successfully updated product count")
                console.log("Successfully updated product count")
            }
        }
    )
}

module.exports = {updateProductCount}