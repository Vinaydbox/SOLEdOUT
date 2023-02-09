const  addp= require('../../models/products/productModel').productModel;

async function addProd(req, res){
    console.log(req.body);
    let prodData= addp({
        pid: req.body.pid,
        productName: req.body.productName,
        price:req.body.price,
        brand: req.body.brand,
        productDesc : req.body.productDesc,
        productURL: req.body.productURL
    })
    prodData.save((err, result) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send("Pushed the card");
        }
    })
}

module.exports = {addProd}