const cartgen = require('../../models/cart/cartModel').cartModel;
const usergen = require('../../models/users/userModel').userModel;


async function addToCart(req, res) {
	// console.log("this is backend");
	// console.log(req.body.loggedinUserEmail);
	console.log(req.body.loggedinUserEmail);
	const doc = await usergen.find({email: req.body.loggedinUserEmail});
	try{
		let found = false;
		doc = data;
		for (let t = 0; t < doc[0].userCart.length; t++) {
			if (doc[0].userCart[t].productName === req.body.productName) {
				doc[0].userCart[t].count++;
				found = true;
			}
		}
		console.log(found);
		if (found == true) {
			usergen.updateOne({ email: req.body.loggedinUserEmail }, { $set: { userCart: doc[0].userCart } }, { upsert: true }, (err, docs) => {
				if (err) {
					console.log(err);
				}
				else {
					console.log(docs);
				}
			});
		}
		if (found != true) {
			console.log("coming");
			let obj = {
				productName: req.body.productName,
				price: req.body.price,
				productURL: req.body.productURL,
				count: 1,
				brand: req.body.brand,
				pid: req.body.pid,
			}
			// console.log(obj);
			usergen.updateOne({ email: req.body.loggedinUserEmail }, { $push: { userCart: obj } }, { upsert: true }, (err, docs) => {
				if (err) {
					console.log(err);
				}
				else {
					console.log(docs);
				}
			})
		}
		console.log("here");
		res.send("addedToCart");
	}
	catch(err){
		res.send(err);
	}
	
}



module.exports = { addToCart }

