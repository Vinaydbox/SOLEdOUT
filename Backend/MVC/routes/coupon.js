const express = require('express');
const routes = express.Router()

const addCoupons = require('../controllers/coupons/addCoupon')
const fetchCoupon = require('../controllers/coupons/fetchCoupon')
const tempCoupon = require('../controllers/coupons/tempCoupon')
routes.post('/addCoupon', addCoupons.addCoupon)
routes.post('/tempCoupon/',tempCoupon.tempCoupon)
routes.get('/fetchCoupon/:couponCode', fetchCoupon.fetchCoupon)

module.exports = routes;