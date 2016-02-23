angular.module('myApp').controller('adminCtrl', function ($scope, $state, loginService, adminService) {

      $scope.logout = function() {
        loginService.logout()
        .then( function(res){
          $state.go('login');
        });
      };

      $scope.submitNewData = function(newCohort) {
        adminService.submitNewData(newCohort)
        .then( function(res){
          alert('new data submitted!');
          $scope.newCohort = null;
        });
      };


});
