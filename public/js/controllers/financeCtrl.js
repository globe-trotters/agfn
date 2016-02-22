angular.module('myApp')
  .controller('financeCtrl', function($scope, financeService) {

    $scope.getFinance = function() {
      financeService.getFinance().then(function(res) {
        console.log(res);
        $scope.finance = res;
      });
    };

    $scope.addFinance = function(newFinance) {
      financeService.addFinance(newFinance).then(function(res) {
        console.log(res);
        $scope.getFinance();
      });
    };

    $scope.editFinance = function(editFinance) {
      console.log(editFinance);
      financeService.editFinance(editFinance).then(function(res) {
        console.log(res);
        $scope.getFinance();
      });
    };

    $scope.deleteFinance = function(id) {
      console.log(id);
      financeService.deleteFinance(id).then(function(res) {
        console.log(res);
        $scope.getFinance();
      });
    };

    $scope.getFinance();

  });
