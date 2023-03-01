const productgen = require('../../models/products/productModel').productModel;
//! to check if the user is already existing in the database

async function getProdDetailsByID(req, res) {
    const data =productgen.findOne({ pid: req.params.pid });
    try{
        res.send(data);
    }
    catch(err){
        res.send(err);
    }
}

module.exports = { getProdDetailsByID }