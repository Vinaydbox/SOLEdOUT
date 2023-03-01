const userModelCtrl = require('../../models/users/userModel')

//! to check if the user is already existing in the database

async function getPrevOrders(req, res) {
    const data = await userModelCtrl.userModel.find({ email: req.params.email })
    try{
        res.send(data[0].prevOrders);
    }
    catch(err){
        res.send(err);
    }
}

module.exports = { getPrevOrders }