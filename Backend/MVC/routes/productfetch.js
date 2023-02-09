const express = require('express');
const routes = express.Router()

const  addProducts = require('../controllers/products/addprod');
const getusers=require('../controllers/products/fetchall');
const fetchOneProduct=require('../controllers/products/fetchOneProduct');
routes.get('/getproducts',getusers.fetchAllProducts);
routes.post('/addProduct',addProducts.addProd);
routes.get('/fetchOneProduct/:brand',fetchOneProduct.fetchOneProduct)

module.exports = routes;