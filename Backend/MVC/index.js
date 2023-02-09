const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const routes = require('./routes/users');
const prodroute=require('./routes/productfetch');
app.use(bodyParser.json());
app.use(cors());

app.use('/',prodroute);
app.use('/', routes);
app.post('/login', (req, res) => {
    // console.log(req.body)
    res.send("hello")
})


app.listen(3003, () => {
    console.log('server is running on port localhost:3003')
})