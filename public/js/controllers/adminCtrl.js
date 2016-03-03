angular.module('myApp').controller('adminCtrl', function($scope, $state, loginService, adminService) {


$scope.show = 1;

  $scope.getCohorts = function() {
    adminService.getCohorts()
    .then(function (res) {
      // console.log(res);
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
    // console.log("Controller Adding New Cohort", newCohort);
    adminService.submitNewCohort(newCohort, $scope.students)
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


$scope.editCohortData = function(editCohort, id) {
  adminService.editCohortData(editCohort, id)
  .then(function(res){
    alert('Cohort Updated!');
    $scope.editCohort = null;
  });
};
$scope.students = [];
$scope.totalChange = function(num){
  if(num < 1){
    return;
  }
  while($scope.students.length < num) {
    $scope.students.push({});
  }
  while($scope.students.length > num) {
    $scope.students.splice($scope.students.length - 1, 1);
  }
};

});
