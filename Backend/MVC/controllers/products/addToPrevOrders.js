const usergen = require('../../models/users/userModel').userModel;

async function addToPrevOrders(req, res) {
    // console.log(req.params.userCart);
    await usergen.findOneAndUpdate({ email: req.body.email }, {
        $push: {
            "prevOrders": req.body
        },
    }, { upsert: true });
    // console.log(req.body);
    // console.log(req.body)
    console.log("added to prev orders")
    res.send("added to prev orders")
}

module.exports = { addToPrevOrders }