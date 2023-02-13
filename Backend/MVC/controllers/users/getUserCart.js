const userModelCtrl = require('../../models/users/userModel')

//! to check if the user is already existing in the database

async function getUserCart(req, res) {
    userModelCtrl.userModel.find({ email: req.params.email }, (err, docs) => {
        if (err) {
            res.send("Error")
        } else {
            res.send(docs)
        }
    })
}

module.exports = { getUserCart }