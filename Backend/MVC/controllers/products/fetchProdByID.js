// const { isTemplateLiteralTypeNode } = require('typescript');

const productgen = require('../../models/products/productModel').productModel;
//! to check if the user is already existing in the database

async function fetchProdByID(req, res) {
    const docs= await productgen.find({ pid: req.params.pid });
    try{
        if (docs.length >= 1) {
            res.send("Exists")
            console.log("Exists")
        }
        else {
            res.send("DoNotExist")
            console.log("DoNotExist")
        }
    }
    catch(err){
        console.log(err);
    }
}



module.exports = { fetchProdByID }