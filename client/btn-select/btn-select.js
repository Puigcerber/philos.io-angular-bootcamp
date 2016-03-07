'use strict';

angular.module('webApp.btnSelect', [])
  .component('btnSelect', {
    bindings: {
      isSelect: '='
    },
    template: [
      '<button type="button" class="btn btn-xs pull-right" ng-class="{\'btn-success\': $ctrl.isSelect, \'btn-danger\': !$ctrl.isSelect}">',
      '<span class="glyphicon" ng-class="{\'glyphicon-plus\': $ctrl.isSelect, \'glyphicon-minus\': !$ctrl.isSelect}" aria-hidden="true"></span>',
      ' {{ $ctrl.isSelect ? \'Select\' : \'Unselect\' }}</button>'
    ].join('')
  });
