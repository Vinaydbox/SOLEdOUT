const express = require('express');
const routes = express.Router()

const  addProducts = require('../controllers/products/addprod');
const getusers=require('../controllers/products/fetchall');
const fetchOneProduct=require('../controllers/products/fetchOneProduct');
const addToCart = require('../controllers/products/addToCart');
const fetchProdByID = require('../controllers/products/fetchProdByID');
routes.get('/getproducts',getusers.fetchAllProducts);
routes.post('/addProduct',addProducts.addProd);
routes.get('/fetchOneProduct/:brand',fetchOneProduct.fetchOneProduct)
routes.post('/addToCart/', addToCart.addToCart);
routes.get('/fetchProdByID/:pid',fetchProdByID.fetchProdByID)

module.exports = routes;