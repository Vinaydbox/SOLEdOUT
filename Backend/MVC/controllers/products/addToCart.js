const cartgen = require('../../models/cart/cartModel').cartModel;
const usergen = require('../../models/users/userModel').userModel;


async function addToCart(req, res) {
	// console.log("this is backend");
	// console.log(req.body.loggedinUserEmail);
	console.log(req.body.loggedinUserEmail);
	const doc = await usergen.find({email: req.body.loggedinUserEmail});
	try{
		let found = false;
		console.log("finding here");
		for (let t = 0; t < doc[0].userCart.length; t++) {
			if (doc[0].userCart[t].productName === req.body.productName) {
				doc[0].userCart[t].count++;
				found = true;
			}
		}
		console.log(found);
		if (found == true) {
			await usergen.updateOne({ email: req.body.loggedinUserEmail }, { $set: { userCart: doc[0].userCart } }, { upsert: true });
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
			await usergen.updateOne({ email: req.body.loggedinUserEmail }, { $push: { userCart: obj } }, { upsert: true });
		}
		console.log("here");
		res.send("addedToCart");
	}
	catch(err){
		console.log(err);
		res.send(err);
	}
	
}



module.exports = { addToCart }

