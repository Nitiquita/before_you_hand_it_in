'use strict';

// angular.module('myStats', ['ui.router'])

//   .config(['$stateProvider', function ($stateProvider) {
//     $stateProvider.state('/my-stats', {
//       url: '/my-stats',
//       templateUrl: '/my-stats/my-stats.html',
//       controller: 'MyStatsCtrl'
//     });
//   }])

//   .controller('MyStatsCtrl', ['$scope', '$firebaseObject', 'firebase' function($scope, $firebaseObject) {

//     var ref = firebase.database().ref();

//     var obj = $firebaseObject(ref);

//     obj.$loaded().then(function () {

//     })

//     obj.$bindTo($scope, "data")

//   }]);

angular.module("myStats", ["ui.router", "chart.js"])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('/my-stats', {
      url: '/my-stats',
      templateUrl: '/my-stats/my-stats.html',
      controller: 'DoughnutCtrl'
    });
  }])

  .controller("DoughnutCtrl", function ($scope) {
    $scope.labels = ["Spelling", "Word Choice", "Verb Tense", "Verb Form", "Subject Verb Agreement", "Fused Sentence", "Comma Splice", "Fragment", "Punctuation", "Passive Voice Construction"];
    $scope.data = [4, 3, 2, 5, 6, 7, 5, 6, 7, 14];
  });