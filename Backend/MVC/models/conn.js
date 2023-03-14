const mongoose = require('mongoose')
const url = "mongodb+srv://vinay:12345@cluster0.dwee6wh.mongodb.net/SOLEdOUT?retryWrites=true&w=majority"

mongoose.connect(url)
mongoose.Promise = global.Promise

const db = mongoose.connection;
//! To throw error
db.on('error', console.error.bind(console, 'DB Error:'));

module.exports = { db, mongoose }