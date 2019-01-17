const dbConnection = require('../config');
const product = require('./product');
// Creating all Tables then export the connection after creation to be use in app.js
module.exports = {
  dbConnection,
  product,
};