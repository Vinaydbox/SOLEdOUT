const userModelCtrl = require('../../models/users/userModel')

async function addUser(req, res){
    console.log(req.body);
    let userData = userModelCtrl.userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    userData.save((err, result) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send("User registration successful...")
        }
    })
}

module.exports = {addUser}