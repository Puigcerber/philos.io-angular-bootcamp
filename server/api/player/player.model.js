'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('player', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    countryId: DataTypes.STRING
  });
  return Player;
};
