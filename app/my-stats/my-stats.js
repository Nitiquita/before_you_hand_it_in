'use strict';

angular.module('myStats', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/my-stats', {
    url: '/my-stats',
    templateUrl: '/my-stats/my-stats.html',
    controller: 'MyStatsCtrl'
  });
}])

.controller('MyStatsCtrl', [function() {

}]);