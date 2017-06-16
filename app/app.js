'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'home',
  'grammarCheck',
  'myStats'
]).
  config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $locationProvider.hashPrefix('!');

    $stateProvider
      .state('home', {
            url:'/home',
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        })
      .state('grammar-check', {
            url:'/grammar-check',
            templateUrl: 'grammar-check/grammar-check.html',
            controller: 'GrammarCheckController'
        })
      .state('my-stats', {
            url:'/my-stats',
            templateUrl: 'my-stats/my-stats.html',
            controller: 'MyStatsController'
        })
      // .service('data', function ())
  }]);
