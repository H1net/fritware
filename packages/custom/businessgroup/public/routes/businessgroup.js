'use strict';

angular.module('mean.businessgroup').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('businessgroup example page', {
      url: '/businessgroup/example',
      templateUrl: 'businessgroup/views/index.html'
    });
  }
]);
