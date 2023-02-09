const productgen = require('../../models/products/productModel').productModel;

async function fetchOneProduct(req, res){
    productgen.find({brand:req.params.brand},(err,docs)=>{
        if(err){
            res.send("Error")
        }
        else{
            // console.log(docs[0].brand);
            console.log(docs[0].brand)
            res.send(docs)
        }
    })
}



module.exports ={fetchOneProduct}