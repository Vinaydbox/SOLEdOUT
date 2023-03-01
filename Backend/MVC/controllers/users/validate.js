const userModelCtrl = require('../../models/users/userModel')

function validate(req, res) {

    const data = userModelCtrl.userModel.find({ email: req.body.email, password: req.body.password })
    try{
        res.send(data);
    }
    catch(err){
        res.send(err)
    }
}

module.exports = { validate }