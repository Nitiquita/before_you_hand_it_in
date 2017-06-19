'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'firebase',
  'ui.router',
  'home',
  'signUp',
  'login',
  'grammarCheck',
  'myStats',
])

  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $locationProvider.hashPrefix('!');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      })
      .state('signup', {
        url: '/sign-up',
        templateUrl: '/sign-up/sign-up.html',
        controller: 'SignUpCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      })
      .state('grammar-check', {
        url: '/grammar-check',
        templateUrl: 'grammar-check/grammar-check.html',
        controller: 'GrammarCheckController'
      })
      .state('my-stats', {
        url: '/my-stats',
        templateUrl: 'my-stats/my-stats.html',
        controller: 'MyStatsController'
      })
    // .service('data', function ())
  }])
  .controller('AppCtrl', ["$scope", "$firebaseObject", "firebase",
    function ($scope, $firebaseObject) {
      var ref = firebase.database().ref();

      var obj = $firebaseObject(ref);

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log('user', user)
        } else {
          // No user is signed in.
        }
      });

      // to take an action after the data loads, use the $loaded() promise
      obj.$loaded().then(function () {
        console.log("loaded record:", obj);

        // To iterate the key/value pairs of the object, use angular.forEach()
        angular.forEach(obj, function (value, key) {
          console.log(key, value);
        });
      });

      // For three-way data bindings, bind it to the scope instead
      obj.$bindTo($scope, "data");


    }
  ])
