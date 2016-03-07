'use strict';

describe('Page: Red Devils', function () {
  var page;

  beforeEach(function(){
    browser.get('/index.html');
    page = require('./red-devils.po');
  });

  afterEach(function () {
    browser.manage().logs().get('browser').then(function (browserLog) {
      expect(browserLog.length).toEqual(0);
      if (browserLog.length) {
        console.error('Log: ' + JSON.stringify(browserLog));
      }
    });
  });

  it('should display the headers', function() {
    expect(page.h1El.getText()).toBe('Belgian Red Devils Philos.io Bootcamp');
    expect(page.h2El.getText()).toBe('UEFA Euro 2016');
    expect(page.h3El.getText()).toBe('Available Players');
  });

  it('should select element by binding', function() {
    expect(page.competitionEl.getText()).toBe('UEFA Euro 2016');
  });

  it('should select elements by repeater', function() {
    expect(page.playerEls.count()).toBe(28);
    // NOTE: getText() includes sub-elements.
    expect(page.playerEls.first().getText()).toMatch(/Thibaut Courtois/);
  });

  it('should filter the list of available players', function() {
    expect(page.selectedPlayers.count()).toBe(0);
    expect(page.availablePlayers.count()).toBe(28);

    page.search('Thibaut');
    expect(page.availablePlayers.count()).toBe(1);

    page.clearSearch();
    page.search('Thomas');
    expect(page.availablePlayers.count()).toBe(2);
  });

  it('should select the player when button is clicked', function() {
    page.selectPlayerAt(0);

    expect(page.selectedPlayers.count()).toBe(1);
    expect(page.availablePlayers.count()).toBe(27);

    expect(page.selectedPlayers.first().getText()).toMatch(/Thibaut Courtois/);
    expect(page.availablePlayers.first().getText()).toMatch(/Simon Mignolet/);
  });

  it('should unselect a selected player when button is clicked', function() {
    page.selectPlayerAt(0);

    expect(page.selectedPlayers.count()).toBe(1);
    expect(page.availablePlayers.count()).toBe(27);

    page.unselectPlayerAt(0);

    expect(page.selectedPlayers.count()).toBe(0);
    expect(page.availablePlayers.count()).toBe(28);

    expect(page.availablePlayers.first().getText()).toMatch(/Simon Mignolet/);
    expect(page.availablePlayers.last().getText()).toMatch(/Thibaut Courtois/);
  });

  it('should select all the players when their button is clicked', function() {
    page.availablePlayers.each(function(playerEl) {
      playerEl.element(by.tagName('button')).click();
    });
    expect(page.selectedPlayers.count()).toBe(28);
    expect(page.availablePlayers.count()).toBe(0);
  });

});
