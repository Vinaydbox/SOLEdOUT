const cartgen = require('../../models/cart/cartModel').cartModel;
const usergen = require('../../models/users/userModel').userModel;


async function addToCart(req, res) {
	console.log("this is backend");
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
}
// let productData = cartgen({
//     productName: req.body.productName,
//     price: req.body.price,
//     productURL: req.body.productURL
// })
// productData.save((err, result) => {
//     if (err) {
//         res.send("Error " + err)
//     }
//     else {
//         res.send(result)
//     }
// })


module.exports = { addToCart }

/*
!Add item to cart
router.post("/cart", async (req, res) => {
  const { productId, quantity, name, price } = req.body;

  //TODO: the logged in user id
  const userId = "5de7ffa74fff640a0491bc4f"; 

  try {
	let cart = await Cart.findOne({ userId });

	if (cart) {
	  //cart exists for user
	  let itemIndex = cart.products.findIndex(p => p.productId == productId);

	  if (itemIndex > -1) {
		//product exists in the cart, update the quantity
		let productItem = cart.products[itemIndex];
		productItem.quantity = quantity;
		cart.products[itemIndex] = productItem;
	  } else {
		//product does not exists in cart, add new item
		cart.products.push({ productId, quantity, name, price });
	  }
	  cart = await cart.save();
	  return res.status(201).send(cart);
	} else {
	  //no cart for user, create new cart
	  const newCart = await Cart.create({
		userId,
		products: [{ productId, quantity, name, price }]
	  });

	  return res.status(201).send(newCart);
	}
  } catch (err) {
	console.log(err);
	res.status(500).send("Something went wrong");
  }
});

*/