const cartgen = require('../../models/cart/cartModel').cartModel;
const usergen = require('../../models/users/userModel').userModel;


async function addToCart(req, res) {
	// console.log("this is backend");
	let doc;
	let obj;
	// console.log(req.body.loggedinUserEmail);
	usergen.find({ email: req.body.loggedinUserEmail }, (err, data) => {
		if (err) {
			console.log("err");
		} else {
			let found = false;
			doc = data;
			for (let t = 0; t < doc[0].userCart.length; t++) {
				if (doc[0].userCart[t].productName === req.body.productName) {
					doc[0].userCart[t].count++;
					found = true;
				}
			}
			usergen.updateOne({ email: req.body.loggedinUserEmail }, { $set: { userCart: doc[0].userCart}}, (err, data) => {
			});

			if (found != true) {
				obj = {
					productName: req.body.productName,
					price: req.body.price,
					productURL: req.body.productURL,
					count: 1,
					brand:req.body.brand,
					pid:req.body.pid,
				}
				console.log(obj);
				usergen.updateOne({ email: req.body.loggedinUserEmail }, { $push: { userCart: obj } }, (err, data) => {
				})
			}

		}
	});
	res.send("addedToCart");
}



module.exports = { addToCart }

