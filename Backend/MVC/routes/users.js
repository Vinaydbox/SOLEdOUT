const express = require('express');
const routes = express.Router()

const validateUser = require('../controllers/users/validate')
const addUser = require('../controllers/users/addUser')
const fetchAllUsers = require('../controllers/users/fetchAllUsers')
const fetchOneUser = require('../controllers/users/fetchOneUser')
const getUserCart = require('../controllers/users/getUserCart')
const fetchUser = require('../controllers/users/fetchUser')
const updateUser = require('../controllers/users/updateUser')
const updateRecomms = require('../controllers/users/userrecomms')


routes.post('/userRecommendations',updateRecomms.userRecommendations);
routes.post('/validate', validateUser.validate)
routes.post('/addUser', addUser.addUser)
routes.get('/fetchAllUsers', fetchAllUsers.fetchAllUsers)
routes.get('/fetchOneUser/:email', fetchOneUser.fetchOneUser);
routes.get('/getUserCart/:email', getUserCart.getUserCart)
routes.get('/fetchUser/:email', fetchUser.fetchUser)
routes.post('/updateUser/:email', updateUser.updateUser)

module.exports = routes;