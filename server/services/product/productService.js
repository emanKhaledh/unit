const featherService = require('feathers-knex');
const hooks = require('./productHooks');
const dbConnection = require('../../database/config');



module.exports = async (app) => {

  const options = {
    name: 'product',
    Model: dbConnection,
    paginate: {
      default: 5,
      max: 50,
    },
  };
 
  app.use('/insert', featherService(options));

  app.service('insert').hooks(hooks);
};
