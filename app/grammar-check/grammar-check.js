'use strict';

angular.module('grammarCheck', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/grammar-check', {
    url: '/grammar-check',
    templateUrl: '/grammar-check/grammar-check.html',
    controller: 'GrammarCheckCtrl'
  });
}])

.controller('GrammarCheckCtrl', [function() {

}]);