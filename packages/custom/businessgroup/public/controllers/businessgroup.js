'use strict';

/* jshint -W098 */
angular.module('mean.businessgroup').controller('BusinessgroupController', ['$scope', 'Global', 'Businessgroup',
  function($scope, Global, Businessgroup) {
    $scope.global = Global;
    $scope.package = {
      name: 'businessgroup'
    };
  }
]);
