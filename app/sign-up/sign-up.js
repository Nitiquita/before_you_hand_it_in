'use strict'

angular.module('signUp', ['ui.router'])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('/signup', {
      url: '/sign-up',
      templateUrl: '/sign-up/sign-up.html',
      controller: 'SignUpCtrl'
    })
  }])

  .controller('SignUpCtrl', ['$scope', 'firebase', function ($scope) {
    $scope.submit = function () {
      const email = $scope.email
      const password = $scope.password
      
      console.log(email, password)
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage)
      });

    }




  }])