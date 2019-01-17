

const dbConnection = require('../config');

const product = (async () => {
  const exists = await dbConnection.schema.hasTable('items'); // Check If Table not exists
  if (!exists) {
    await dbConnection.schema.createTable('items', (table) => { // Create the Table
      // Creating the Table Columns
      table.increments('id');
      table.string('name');
      table.text('company');
      table.text('country');
      
    });
  }
})();

module.exports = product;
