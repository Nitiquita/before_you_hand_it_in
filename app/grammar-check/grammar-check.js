'use strict';

angular.module('myApp.grammarCheck', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grammar-check', {
    templateUrl: 'grammar-check/grammar-check.html',
    controller: 'GrammarCheckCtrl'
  });
}])

.controller('GrammarCheckCtrl', [function() {

}]);