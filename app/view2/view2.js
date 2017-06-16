'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);