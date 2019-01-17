const product = require('./product/productService.js');

module.exports = (app) => {
  app.configure(product);
};
