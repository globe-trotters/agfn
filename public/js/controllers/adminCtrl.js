angular.module('myApp').controller('adminCtrl', function($scope, $state, loginService, adminService) {


$scope.show = 1;

  $scope.getCohorts = function() {
    adminService.getCohorts()
    .then(function (res) {
      $scope.cohorts = res;
    });
  };
$scope.getCohorts();

  $scope.logout = function() {
    loginService.logout()
      .then(function(res) {
        $state.go('login');
      });
  };

  $scope.submitNewCohort = function(newCohort) {
    console.log("controller", newCohort);
    adminService.submitNewCohort(newCohort)
      .then(function(res) {
        alert('new data submitted!');
        $scope.newCohort = null;
        $scope.getCohorts();
      });
  };

  $scope.submitNewStudent = function(newStudent) {
    adminService.submitNewStudent(newStudent)
      .then(function(res) {
        alert('new data submitted!');
        $scope.newStudent = null;
      });
  };


});
