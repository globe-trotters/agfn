angular.module('myApp').service('adminService', function($http, $state) {


    this.submitNewData = function(newCohort) {
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


  });
