const usergen = require('../../models/users/userModel').userModel;

async function deleteProdFromCart(req, res) {
    let data = await usergen.updateOne({ email: req.body.userEmail }, {
        "$pull": {
            "userCart": {
                "pid": req.body.pid,
            }
        }
    })
    res.send("Deleted Prod from Cart")
}

module.exports = { deleteProdFromCart }