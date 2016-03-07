'use strict';

module.exports = function(app) {
  app.use('/api/players', require('./api/player'));

  app.route('/*')
    .get(function(req, res) {
      res.sendFile('index.html', { root: app.get('appPath') });
    });
};
