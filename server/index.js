'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');

var sequelize = require('./db');
sequelize.sync().then(startServer);

var app = express();

function startServer() {
  var server = require('http').createServer(app);
  require('./config/express')(app);
  require('./routes')(app);
  server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

exports = module.exports = app;
