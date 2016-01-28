'use strict';

var RedDevilsPage = function() {
  this.h1El = element(by.tagName('h1'));
  this.h2El = element(by.tagName('h2'));
  this.h3El = element(by.tagName('h3'));

  this.competitionEl = element(by.binding('$ctrl.competition'));

  // NOTE: by.repeater() here return a list from all repeaters.
  this.playerEls = element.all(by.repeater('player in $ctrl.players'));

  // So we need to get specific.
  var cols = element.all(by.css('.col-md-6'));
  this.selectedPlayers = cols.first().all(by.repeater('player in $ctrl.players'));
  this.availablePlayers = cols.last().all(by.repeater('player in $ctrl.players'));

  this.selectPlayerAt = function(index) {
    this.availablePlayers.get(index).element(by.tagName('button')).click();
  };

  this.unselectPlayerAt = function(index) {
    this.selectedPlayers.get(index).element(by.tagName('button')).click();
  };

  var searchInput = element(by.model('$ctrl.search'));
  this.search = function (name) {
    searchInput.sendKeys(name);
  };
  this.clearSearch = function() {
    searchInput.clear();
  };

};

module.exports = new RedDevilsPage();
