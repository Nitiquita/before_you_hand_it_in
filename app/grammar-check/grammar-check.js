'use strict';

angular.module('grammarCheck', ['ui.router', 'firebase'])

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('/grammar-check', {
      url: '/grammar-check',
      templateUrl: '/grammar-check/grammar-check.html',
      controller: 'GrammarCheckCtrl'
    });
  }])

  .controller('GrammarCheckCtrl', ['$scope', "$firebaseObject", "firebase", function ($scope, $firebaseObject) {
    $scope.errors = [];
    const words = [];

    $scope.submit1 = function () {
      console.log($scope.errors)
      if ($scope.count) {
        $scope.errors.push($scope.count);
      }
    }

    $scope.submit2 = function () {
      if ($scope.text) {
        words.push($scope.text);
        
        
        function updateErrors(words) {
          // A post entry.
          var postData = {
            words: words
          }

          // Get a key for a new Post.
          var newPostKey = firebase.database().ref().child('user1/spelling/').push().key;
          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates['user1/spelling/' + newPostKey] = postData;

          return firebase.database().ref().update(updates);
        }
        
        updateErrors(words)
        console.log(words)
      }
    }
    $scope.text = null
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     console.log(user)
    //     var ref = firebase.database().ref();
    //     var obj = $firebaseObject(ref)
    //     // to take an action after the data loads, use the $loaded() promise
    //     obj.$loaded().then(function () {
    //       console.log("loaded record:", obj);
    //       // To iterate the key/value pairs of the object, use angular.forEach()
    //       angular.forEach(obj.users, function (value) {
    //         console.log(value);
    //       });
    //     });
    //     // For three-way data bindings, bind it to the scope instead
    //     obj.$bindTo($scope, "data");
    //   } else {
    //     // No user is signed in.
    //   }

    // });

  }]);