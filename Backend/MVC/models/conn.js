const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/SOLEdOUT"

mongoose.connect(url)
mongoose.Promise = global.Promise

const db = mongoose.connection;
//! To throw error
db.on('error', console.error.bind(console, 'DB Error:'));

module.exports = { db, mongoose }