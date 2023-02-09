const userModelCtrl = require('../../models/users/userModel')

async function validate(req, res) {

    userModelCtrl.userModel.find({ email: req.body.email, password: req.body.password }, (err, docs) => {
        if (err) {
            res.send("Error")
        } else {
            console.log(docs);
            res.send(JSON.stringify(docs));
        }
    })
}

module.exports = { validate }