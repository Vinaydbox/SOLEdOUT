const express = require('express');
const routes = express.Router()

const  addProducts = require('../controllers/products/addprod');
const getusers=require('../controllers/products/fetchall');
routes.get('/getproducts',getusers.fetchAllProducts);
routes.post('/addProduct',addProducts.addProd);

module.exports = routes;