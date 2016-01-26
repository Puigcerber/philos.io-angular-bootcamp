'use strict';

describe('Component: redDevils', function () {

  beforeEach(module('webApp.redDevils'));

  var Players;
  var players = [
    {
      name: 'Thibaut Courtois'
    },
    {
      name: 'Eden Hazard'
    },
    {
      name: 'Kevin De Bruyne'
    }
  ];
  beforeEach(module(function($provide) {
    Players = jasmine.createSpyObj('Players', ['getAll']);
    Players.getAll.and.returnValue(angular.copy(players));
    $provide.value('Players', Players);
  }));

  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<red-devils></red-devils>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render the title', function() {
    expect(element.find('h1').text()).toBe('Belgian Red Devils Philos.io Bootcamp');
  });

  it('should render two list of players', function() {
    expect(element.find('player-list').length).toBe(2);
  });

  describe('Controller: redDevilsCtrl', function () {

    var controller;
    beforeEach(function(){
      controller = element.controller('redDevils');
    });

    it('should do something', function() {
      expect(!!controller).toBe(true);
    });

    it('should expose an array of players', function() {
      expect(controller.players).toBeDefined();
      expect(angular.isArray(controller.players)).toBe(true);
    });

    it('should get all the players on init', function() {
      expect(Players.getAll).toHaveBeenCalled();
      expect(Players.getAll.calls.count()).toBe(1);
      expect(controller.players.length).toBe(3);
    });

    it('should expose an array of selected players', function() {
      expect(controller.players).toBeDefined();
      expect(angular.isArray(controller.players)).toBe(true);
    });

    describe('Method: selectPlayer', function () {

      it('should expose a method to select a player', function() {
        expect(controller.selectPlayer).toBeDefined();
        expect(angular.isFunction(controller.selectPlayer)).toBe(true);
      });

      it('should select a player', function() {
        expect(controller.selectedPlayers.length).toBe(0);
        expect(controller.players.length).toBe(3);
        var player = controller.players[0];
        controller.selectPlayer(player);
        expect(controller.selectedPlayers.length).toBe(1);
        expect(controller.players.length).toBe(2);
        expect(controller.selectedPlayers[0]).toBe(player);
      });

    });

    describe('Method: unselectPlayer', function () {

      it('should expose a method to unselect a player', function() {
        expect(controller.unselectPlayer).toBeDefined();
        expect(angular.isFunction(controller.unselectPlayer)).toBe(true);
      });

      it('should unselect a player', function() {
        expect(controller.selectedPlayers.length).toBe(0);
        expect(controller.players.length).toBe(3);
        var player = controller.players[0];
        controller.selectPlayer(player);
        expect(controller.selectedPlayers.length).toBe(1);
        expect(controller.players.length).toBe(2);
        controller.unselectPlayer(player);
        expect(controller.selectedPlayers.length).toBe(0);
        expect(controller.players.length).toBe(3);
      });

    });

    it('should expose a search property', function() {
      expect(controller.search).toBeDefined();
      expect(angular.isString(controller.search)).toBe(true);
    });

  });

});
