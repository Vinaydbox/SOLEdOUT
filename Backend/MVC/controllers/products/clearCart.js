const usergen = require('../../models/users/userModel').userModel;

async function clearCart(req, res) {
    let data = await usergen.findOneAndUpdate({ email: req.body.email }, {
        $set: {
            "userCart":[]
        }
    })
    console.log("cleared cart")
    res.send("cleared the cart")
}

module.exports = { clearCart }