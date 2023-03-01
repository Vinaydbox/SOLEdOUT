const addp = require("../../models/products/productModel").productModel;
const multer = require('multer');
// const aws = require("aws-sdk")
const path = require("path")
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
const { S3Client } = require('@aws-sdk/client-s3');


// var storage = multer.diskStorage({
//     destination: (req, file, cb) => { 
//         cb(null, '../../uploads')
//     }, 
//     filename: (req, file, cb) => { 
//         cb(null, file.originalname);},
//     })
// var upload = multer({ storage: storage }).single('productURL');




dotenv.config();

let s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    sslEnabled: false,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
});
// console.log("keys")
// console.log(process.env.AWS_ACCESS_KEY_ID);
// console.log(process.env.AWS_SECRET_ACCESS_KEY);

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        ACL: "public-read",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + path.parse(file.originalname).name + path.extname(file.originalname))
        }
    })
})

let uploadurl = upload.single("productURL");



function addProd(req, res) {
    uploadurl(req, res, (err) => {
        console.log("in upload");
        try {
            // console.log(req.body);
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
                        productURL: req.file.location,
                        count: req.body.count
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
        catch (err) {
            res.send("err");
        }
    })
}

module.exports = { addProd }