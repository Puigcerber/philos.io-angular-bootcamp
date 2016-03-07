'use strict';

describe('Service: Players', function () {

  beforeEach(module('webApp.players'));

  var Players;
  beforeEach(inject(function(_Players_){
    Players = _Players_;
  }));

  it('should do something', function() {
    expect(!!Players).toBe(true);
  });

  describe('Method: getAll', function () {

    it('should expose a method to get all the players', function() {
      expect(Players.getAll).toBeDefined();
      expect(angular.isFunction(Players.getAll)).toBe(true);
    });

    it('should retrieve an array of players', function() {
      var players = Players.getAll();
      expect(angular.isArray(players)).toBe(true);
      expect(players.length).toBe(46);
    });

  });

});
