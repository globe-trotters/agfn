angular.module('myApp').controller('adminCtrl', function ($scope, $state, loginService) {

      $scope.logout = function() {
        loginService.logout()
        .then( function(res){
          $state.go('login');
        });
      };



});
