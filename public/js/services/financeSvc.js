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
        data: {
          title: newFinance.title,
          tuition: newFinance.tuition,
          housing: newFinance.housing,
          expenses: newFinance.expenses,
          totalCost: newFinance.totalCost,
          salary: newFinance.salary
        }
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
        data: {
          title: editFinance.title,
          tuition: editFinance.tuition,
          housing: editFinance.housing,
          expenses: editFinance.expenses,
          totalCost: editFinance.totalCost,
          salary: editFinance.salary
        }

      });
    };
 
  });
