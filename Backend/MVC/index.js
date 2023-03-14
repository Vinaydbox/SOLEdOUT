const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const dotenv=require("dotenv");
const routes = require('./routes/users');
const prodroute=require('./routes/productfetch');
const couponRoutes=require('./routes/coupon');

dotenv.config();
app.use(bodyParser.json());
app.use(cors());
// app.use()

app.use('/',prodroute);
app.use('/', routes);
app.use('/',couponRoutes)
app.post('/login', (req, res) => {
    // console.log(req.body)
    res.send("hello")
})
//! search
// app.use(express.urlencoded({ extended: true}));
var port=3003;
app.listen(port, () => {
    console.log('server is running on port localhost:',port)
})