angular.module('myApp')
  .controller('financeCtrl', function($scope, financeService) {

    $scope.getFinance = function() {
      financeService.getFinance().then(function(res) {
        $scope.finances = res;
      });
    };

    $scope.addFinance = function(newFinance) {
      financeService.addFinance(newFinance).then(function(res) {
        $scope.getFinance();
      });
    };

    $scope.editFinance = function(editFinance) {
      financeService.editFinance(editFinance).then(function(res) {
        $scope.getFinance();
      });
    };

    $scope.deleteFinance = function(id) {
      financeService.deleteFinance(id).then(function(res) {
        $scope.getFinance();
      });
    };

    $scope.getFinance();

  }); 
