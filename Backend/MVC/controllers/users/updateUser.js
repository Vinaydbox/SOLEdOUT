const user = require('../../models/users/userModel').userModel;
const multer = require('multer');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
})
var upload = multer({ storage: storage }).single('profileImage');


async function updateUser(req, res) {
    console.log(req.body);
    upload(req, res, (err) => {
        if (err) {
            console.log("error", err);
        }
        else {
            user.updateOne({
                email: req.body.email
            },
                {
                    $set: {
                        username: req.body.username,
                        mobileNumber: req.body.mobileNumber,
                        address: req.body.address,
                        profileImage: req.file.path
                    },
                },
                { upsert: true },
                (err, data) => {
                    if (err) {
                        res.send("failed")
                        console.error(err)
                    }
                    else {
                        res.send("success")
                        console.log("updated successfully")
                    }
                }
            )
        }
    })

    // user.updateOne({
    //     email: req.body.email
    // },
    //     {
    //         $set: {
    //             username: req.body.username,
    //             mobileNumber: req.body.mobileNumber,
    //             address: req.body.address
    //         },
    //     },
    //     { upsert: true },
    //     (err, data) => {
    //         if (err) {
    //             res.send("failed" )
    //             console.error(err)
    //         }
    //         else {
    //             res.send("success" )
    //             console.log("updated successfully")
    //         }
    //     }
    // )
}

module.exports = { updateUser }