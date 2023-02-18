const user = require('../../models/users/userModel').userModel;

async function updateUser(req, res) {
    console.log(req.body);
    user.updateOne({
        email: req.body.email
    },
        {
            $set: {
                username: req.body.username,
                mobileNumber: req.body.mobileNumber,
                address: req.body.address
            },
        },
        { upsert: true },
        (err, data) => {
            if (err) {
                res.send("failed" )
                console.error(err)
            }
            else {
                res.send("success" )
                console.log("updated successfully")
            }
        }
    )
}

module.exports = { updateUser }