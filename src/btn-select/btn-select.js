'use strict';

angular.module('webApp.btnSelect', [])
  .directive('btnSelect', btnSelect);

function btnSelect() {
  return {
    bindToController: {
      isSelect: '='
    },
    controller: function() {},
    controllerAs: '$ctrl',
    replace: true,
    restrict: 'E',
    scope: {},
    template: [
      '<button type="button" class="btn btn-xs pull-right" ng-class="{\'btn-success\': $ctrl.isSelect, \'btn-danger\': !$ctrl.isSelect}">',
      '<span class="glyphicon" ng-class="{\'glyphicon-plus\': $ctrl.isSelect, \'glyphicon-minus\': !$ctrl.isSelect}" aria-hidden="true"></span>',
      ' {{ $ctrl.isSelect ? \'Select\' : \'Unselect\' }}</button>'
    ].join('')
  };
}
