const addp = require("../../models/products/productModel").productModel;
const multer = require('multer');


var storage = multer.diskStorage({
    destination: (req, file, cb) => { 
        cb(null, '../../uploads')
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.originalname);},
    })
var upload = multer({ storage: storage }).single('productURL');



function addProd(req, res) {
    console.log("Add prod called");
    upload(req,res,(err)=>{
        if(err){
            res.send("err");
        }
        else{
            let cnt = addp.count({}, (err, data) => {
                if (err) {
                    console.log("err");
                }
                else {
                    console.log(req.body);
                    let prodData = addp({
                        pid: data + 1000 + 1,
                        productName: req.body.pname,
                        price: req.body.price,
                        brand: req.body.brand,
                        productDesc: req.body.productDesc,
                        productURL: req.file.path,
                        count : req.body.count
                    })
                    console.log("chalraha hai");
                    prodData.save((err, result) => {
                        if (err) {
                            res.send("Error " + err)
                        }
                        else {
                            res.send("Pushed the card");
                        }
                    })
                }
            })
        }
    })
    
}

module.exports = { addProd }