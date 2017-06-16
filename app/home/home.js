'use strict';

angular.module('home', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/home', {
    url: '/home',
    templateUrl: '/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]);