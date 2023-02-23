const productgen = require('../../models/products/productModel').productModel;

async function searchSneakers(req, res) {
    let toBeSearched = req.body.query;
    let resultant;
    try{
        if (toBeSearched.length > 0) {
            resultant = await productgen.find({ productName: { $regex: new RegExp('.*' + toBeSearched + '.*', 'i') } }).exec()
            resultant = resultant.slice(0, 10);
        }
        res.send({ result: resultant });
    }
    catch(err){
        res.send("Error");
    }
    // console.log(resultant)

}

module.exports = { searchSneakers }