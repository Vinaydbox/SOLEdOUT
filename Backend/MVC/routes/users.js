const express = require('express');
const routes = express.Router()

const validateUser = require('../controllers/users/validate')
const addUser = require('../controllers/users/addUser')
const fetchAllUsers = require('../controllers/users/fetchAllUsers')
routes.post('/validate', validateUser.validate)
routes.post('/addUser', addUser.addUser)
routes.get('/fetchAllUsers', fetchAllUsers.fetchAllUsers)

// const addUser = require('../controllers/users/addUser')
// const fetchAllUsers = require('../controllers/users/fetchAllUsers')
const fetchOneUser = require('../controllers/users/fetchOneUser')
// routes.post('/addUser', addUser.addUser);
// routes.get('/fetchAllUsers', fetchAllUsers.fetchAllUsers);
routes.get('/fetchOneUser/:email', fetchOneUser.fetchOneUser);


module.exports = routes;