'use strict';

angular.module('webApp.redDevils', [
  'webApp.players',
  'webApp.playerList'
]).directive('redDevils', redDevils);

function redDevils(Players) {
  return {
    controller: redDevilsCtrl,
    controllerAs: '$ctrl',
    restrict: 'E',
    template: [
      '<div class="page-header">',
      '<h1>Belgian Red Devils <small>Philos.io Bootcamp</small></h1>',
      '</div>',
      '<div class="row">',
      '<div class="col-md-6">',
      '<h2>UEFA Euro 2016</h2>',
      '<player-list players="$ctrl.selectedPlayers" is-squad="true" on-player-click="$ctrl.unselectPlayer(player)"></player-list>',
      '</div>',
      '<div class="col-md-6">',
      '<h3>Available Players</h3>',
      '<input type="search" class="form-control" ng-model="$ctrl.search" placeholder="Search" />',
      '<player-list players="$ctrl.players" search="$ctrl.search" is-squad="false" on-player-click="$ctrl.selectPlayer(player)"></player-list>',
      '</div>',
      '</div>'
    ].join('')
  };

  function redDevilsCtrl() {
    /*jshint validthis: true */
    var vm = this;
    vm.players = [];
    vm.selectedPlayers = [];
    vm.search = '';
    vm.selectPlayer = selectPlayer;
    vm.unselectPlayer = unselectPlayer;

    function activate() {
      vm.players = Players.getAll();
      return vm.players;
    }

    function selectPlayer(player) {
      vm.selectedPlayers.push(player);
      var index = vm.players.indexOf(player);
      if(index > -1) {
        vm.players.splice(index, 1);
      }
    }

    function unselectPlayer(player) {
      vm.players.push(player);
      var index = vm.selectedPlayers.indexOf(player);
      if(index > -1) {
        vm.selectedPlayers.splice(index, 1);
      }
    }

    activate();
  }
}

