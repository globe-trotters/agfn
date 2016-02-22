angular.module('myApp').controller('loginCtrl', function ($scope, $state, loginService) {


      $scope.loginUser = function(username, password) {
        loginService.loginUser(username, password)
        .then(function(res){
          $state.go('admin');
          //clears input fields
          $scope.username = null;
          $scope.password = null;
          alert('logged in successfully');
        });
      };

      $scope.logout = function() {
        loginService.logout()
        .then( function(res){
          $state.go('login');
        });
      };



});
