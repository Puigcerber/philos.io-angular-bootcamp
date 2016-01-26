'use strict';

describe('Component: playerList', function () {

  beforeEach(module('webApp.playerList'));

  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<player-list players="players" search="search" is-squad="isSquad" on-player-click="onClick(player)"></player-list>');
    element = $compile(element)(scope);
    scope.players = [
      {
        name: 'Thibaut Courtois'
      },
      {
        name: 'Eden Hazard'
      }
    ];
    scope.isSquad = true;
    scope.onClick = jasmine.createSpy('onClick');
    scope.search = '';
    scope.$apply();
  }));

  it('should render a list of players', function() {
    var list = element.find('ul');
    expect(list.length).toBe(1);
    var items = list.find('li');
    expect(items.length).toBe(2);
  });

  it('should render a button for each player', function() {
    var items = element.find('button');
    expect(items.length).toBe(2);
  });

  describe('Controller: playerListCtrl', function () {

    var controller;
    beforeEach(function () {
      controller = element.controller('playerList');
    });

    it('should do something', function () {
      expect(!!controller).toBe(true);
    });

    it('should expose a method for when the player button is clicked', function() {
      expect(controller.onPlayerClick).toBeDefined();
      expect(angular.isFunction(controller.onPlayerClick)).toBe(true);
    });

    it('should call the scoped onClick method when clicked', function() {
      var player = {
        name: 'Kevin De Bruyne'
      };
      controller.onPlayerClick({player: player });
      expect(scope.onClick).toHaveBeenCalled();
      expect(scope.onClick).toHaveBeenCalledWith(player);
    });

    it('should filter the list when a search query is passed', function() {
      scope.search = 'Courtois';
      scope.$apply();
      var players = element.find('ul').find('li');
      expect(players.length).toBe(1);
    });

  });

});