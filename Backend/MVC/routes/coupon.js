const express = require('express');
const routes = express.Router()

const addCoupons = require('../controllers/coupons/addCoupon')
const fetchCoupon = require('../controllers/coupons/fetchCoupon')
routes.post('/addCoupon', addCoupons.addCoupon)
routes.get('/fetchCoupon/:couponCode', fetchCoupon.fetchCoupon)

module.exports = routes;