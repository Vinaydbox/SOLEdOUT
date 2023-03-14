const userModelCtrl = require('../../models/users/userModel')

//! to check if the user is already existing in the database

function fetchOneUser(req, res) {
    const data = userModelCtrl.userModel.find({ email: req.params.email })
    try{
        if (data.length >= 1) {
            res.send("Exists")
            console.log("Exists")
        }
        else {
            res.send("DoNotExist")
            console.log("DoNotExist")
        }
    }
    catch(err){
        res.send(err);
    }
}



module.exports = { fetchOneUser }