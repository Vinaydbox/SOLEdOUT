const cartgen = require('../../models/cart/cartModel').cartModel;
const usergen = require('../../models/users/userModel').userModel;

async function addToCart(req, res) {
    console.log(req.body)
    var obj = {
        productName: req.body.productName,
        price: req.body.price,
        productURL: req.body.productURL
    }
    console.log(req.body.loggedinUserEmail)
    await usergen.updateOne({email: req.body.loggedinUserEmail},{ $push: { userCart: obj } })
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
}

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