'use strict';

var Sequelize = require('sequelize');
var config = require('./config/environment');

module.exports = new Sequelize(config.db.name, config.db.username, config.db.password, config.db.options);

