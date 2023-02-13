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

    userData.save((err, result) => {
        if (err) {
            res.send("Error " + err)
        }
        else {
            res.send(result)
        }
    })

}

module.exports = { addUser }