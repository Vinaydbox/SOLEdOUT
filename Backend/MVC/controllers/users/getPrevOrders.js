const userModelCtrl = require('../../models/users/userModel')

//! to check if the user is already existing in the database

async function getPrevOrders(req, res) {
    userModelCtrl.userModel.find({ email: req.params.email }, (err, docs) => {
        if (err) {
            res.send("Error")
        } else {
            // console.log("osthundi");
            // console.log(docs[0].userCart);
            // console.log(docs[0].userCart)
            res.send(docs[0].prevOrders)
        }
    })
}

module.exports = { getPrevOrders }