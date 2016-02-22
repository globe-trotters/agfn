angular.module('myApp')
  .service('financeService', function($http) {

    this.getFinance = function() {
      return $http({
        method: 'GET',
        url: '/api/finance'
      }).then(function(res) {
        return res.data;
      });
    };

    this.addFinance = function(newFinance) {
      return $http({
        method: 'POST',
        url: '/api/finance',
        data: {}
      });
    };

    this.deleteFinance = function(id) {
      return $http({
        method: 'DELETE',
        url: '/api/finance/' + id
      });
    };

    this.editFinance = function(editFinance) {
      return $http({
        method: 'PUT',
        url: '/api/finance/' + id,
        data: {}
      });
    };

  });
