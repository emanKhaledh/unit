const errors = require('@feathersjs/errors');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      (context) => {
        context.data.createdAt = Date.now(); // set the Created Date of Item
        const { name, company, country } = context.data;
        if (!name.trim() || !company.trim() || !country.trim()) { 
          throw new errors.BadRequest(); 
        }
        return context;
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
