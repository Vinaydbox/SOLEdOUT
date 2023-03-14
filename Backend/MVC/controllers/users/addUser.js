const userModelCtrl = require('../../models/users/userModel')

//! to add user to the database

async function addUser(req, res) {
    console.log(req.body);
    
    let userData = userModelCtrl.userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        userCategory: req.body.userCategory
    })

    const pushed = await userData.save();
    try{
        res.send(pushed);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }

}

module.exports = { addUser }