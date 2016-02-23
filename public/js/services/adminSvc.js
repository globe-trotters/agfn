angular.module('myApp').service('adminService', function($http, $state) {


    this.submitNewCohort = function(newCohort) {
      return $http({
        method: 'POST',
        url: '/api/cohort',
        data: {
          title: newCohort.title,
          location: newCohort.location,
          startBootcamp: newCohort.startBootcamp,
          endBootcamp: newCohort.endBootcamp
        }
      }).then(function(res) {
        console.log('cohort posted');
      });
    };


    this.submitNewStudent = function(newStudent) {
      return $http({
        method: 'POST',
        url: '/api/student',
        data: {
          name: newStudent.name,
          home: newStudent.home,
          endLocation: newStudent.endLocation,
          job: newStudent.job
        }
      }).then(function(res) {
        console.log('student posted');
      });
    };



  });
