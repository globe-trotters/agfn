angular.module('myApp').service('adminService', function($http, $state) {


  this.submitNewCohort = function(newCohort) {
    return $http({
      method: 'POST',
      url: '/api/cohort',
      data: {
        title: newCohort.title + " - " + newCohort.cohortData.locationString,
        location: newCohort.cohortData,
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
        home: newStudent.homeData,
        after: newStudent.afterData,
        job: newStudent.job
      }
    }).then(function(res) {
      console.log('student posted');
    });
  };

  this.getCohorts = function() {
    return $http({
      method: 'GET',
      url: '/api/cohort'
    }).then(function (res) {
      return res.data;
    });
  };



});
