const userModelCtrl = require('../../models/users/userModel')

async function validate(req, res) {
    const data = await userModelCtrl.userModel.find({ email: req.body.email, password: req.body.password })
    try{
        console.log(data);
        res.send(data);
    }
    catch(err){
        res.send(err)
    }
}

module.exports = { validate }