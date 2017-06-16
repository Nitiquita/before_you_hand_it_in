'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.grammarCheck',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/grammar-check', {
    templateUrl: 'grammar-check/grammar-check.html'
  })
  .otherwise({redirectTo: '/grammar-check'});
}]);
