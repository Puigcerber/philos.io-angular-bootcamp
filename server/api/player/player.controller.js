'use strict';

var db = require('../../db');
var Player = db.import(__dirname + '/player.model.js');

exports.index = function(req, res) {
  Player.findAll().then(function(players) {
    res.json(players);
  });
};

exports.show = function(req, res) {
  Player.findById(req.params.id).then(function(player) {
    res.json(player);
  });
};

exports.create = function(req, res) {
  Player.create(req.body).then(function(player) {
    return res.status(201).json(player);
  });
};

exports.update = function(req, res) {
  Player.update(req.body, { where: { id: req.params.id }}).then(function(updates) {
    return res.send(updates);
  });
};

exports.destroy = function(req, res) {
  Player.destroy({ where: { id: req.params.id }}).then(function() {
    return res.status(204);
  });
};
