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

  .controller("DoughnutCtrl", ["$scope", "$firebaseObject", "firebase", function ($scope, $firebaseObject) {
    $scope.labels = ["Spelling", "Word Choice", "Verb Tense", "Verb Form", "Subject Verb Agreement", "Fused Sentence", "Comma Splice", "Fragment", "Punctuation", "Passive Voice Construction"];

    var ref = firebase.database().ref('user1/spelling/count')

    var value = []
    ref.once("value", function (snapshot) {
        var data = snapshot.val();
        value.push(JSON.parse(JSON.stringify(snapshot.val())))
      });

    console.log(value)

    var obj = $firebaseObject(ref)

    var user = obj.$loaded().then(function (res) {
    })






    $scope.data = [2, 3, 2, 10, 6, 15, 5, 6, 7, 2];
  }]);