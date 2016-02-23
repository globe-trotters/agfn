angular.module('myApp').controller('adminCtrl', function ($scope, $state, loginService, adminService) {

      $scope.logout = function() {
        loginService.logout()
        .then( function(res){
          $state.go('login');
        });
      };

      $scope.submitNewCohort = function(newCohort) {
        adminService.submitNewCohort(newCohort)
        .then( function(res){
          alert('new data submitted!');
          $scope.newCohort = null;
        });
      };

      $scope.submitNewStudent = function(newStudent) {
        adminService.submitNewStudent(newStudent)
        .then( function(res){
          alert('new data submitted!');
          $scope.newStudent = null;
        });
      };


});
