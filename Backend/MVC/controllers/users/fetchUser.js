const userModelCtrl = require('../../models/users/userModel')

//! to check if the user is already existing in the database

function fetchUser(req, res) {
    const data = userModelCtrl.userModel.find({ email: req.params.email });
    try{
        res.send(data);
    }
    catch(err){
        res.send(err);
    }
}



module.exports = { fetchUser }