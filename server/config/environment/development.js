'use strict';

// Development specific configuration
module.exports = {
  // SQLite connection options
  db: {
    options: {
      dialect: 'sqlite',
      storage: 'db/dev.sqlite',
      define: {
        timestamps: false
      }
    }
  }
};
