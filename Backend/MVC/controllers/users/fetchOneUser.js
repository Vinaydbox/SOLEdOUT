const userModelCtrl = require('../../models/users/userModel')

//! to check if the user is already existing in the database

async function fetchOneUser(req, res) {
    userModelCtrl.userModel.find({ email: req.params.email }, (err, docs) => {
        if (err) {
            res.send("Error")
        } else {
            // docs = JSON.stringify(docs)
            if (docs.length >= 1) {
                res.send("Exists")
                console.log("Exists")
            }
            else {
                res.send("DoNotExist")
                console.log("DoNotExist")
            }
        }
    })
}

module.exports = { fetchOneUser }