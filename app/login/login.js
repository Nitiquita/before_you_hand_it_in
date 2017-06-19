'use strict'

angular.module('login', ['ui.router'])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('/login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
  }])

  .controller('LoginCtrl', ['$scope', "firebase", function ($scope) {
    $scope.login = function () {
      const email = $scope.email;
      const password = $scope.password;
      console.log(email)
      $scope.email =''
      $scope.password = ''
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log('code',errorCode, 'message', errorMessage)
      })
    }
  }])