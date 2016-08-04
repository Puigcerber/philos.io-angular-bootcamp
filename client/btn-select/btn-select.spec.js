'use strict';

describe('Component: btnSelect', function () {

  beforeEach(module('webApp.btnSelect'));

  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<btn-select is-select="isSelect"></btn-select>');
    element = $compile(element)(scope);
    scope.$apply(function() {
      scope.isSelect = true;
    });
  }));

  describe('Property: isSelect', function () {

    it('should render the select button when set to true', function() {
      expect(element.text().trim()).toBe('Select');
      expect(element.find('button').hasClass('btn-success')).toBe(true);
      var icon = element.find('span');
      expect(icon.hasClass('glyphicon-plus')).toBe(true);
    });

    it('should render the unselect button when set to false', function() {
      scope.$apply(function() {
        scope.isSelect = false;
      });
      expect(element.text().trim()).toBe('Unselect');
      expect(element.find('button').hasClass('btn-danger')).toBe(true);
      var icon = element.find('span');
      expect(icon.hasClass('glyphicon-minus')).toBe(true);
    });

  });

});
