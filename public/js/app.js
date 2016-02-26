angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
  ///////USER VIEWS///////
    .state('map', {
      url: '/map',
      templateUrl: './js/views/mapView.html'
        // controller: 'mapCtrl',
    })
    .state('finance', {
      url: '/finance',
      templateUrl: './js/views/financeView.html',
      controller: 'financeCtrl'

    })
    .state('login', {
      url: '/login',
      templateUrl: './js/views/loginView.html',
      controller: 'loginCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: './js/views/adminView.html',
      controller: 'adminCtrl',

      // resolve: {
      //   user: function($state, loginService) {
      //     return loginService.getCurrentUser()
      //       .then(function(res) {
      //         if (res.status != 200) {
      //           console.log('brack');
      //           alert('Unauthorized');
      //           $state.go('login');
      //
      //         } else {
      //           return res.data;
      //         }
      //       }, function(err) {
      //         console.log('brack');
      //         alert('Unauthorized');
      //         $state.go('login');
      //
      //       });
      //   }
      // }
    })
    .state('adminEdit', {
      url: '/edit',
      templateUrl: './js/views/adminEdit.html',
      controller: 'adminCtrl',

      // resolve: {
      //   user: function($state, loginService) {
      //     return loginService.getCurrentUser()
      //       .then(function(res) {
      //         if (res.status != 200) {
      //           console.log('brack');
      //           alert('Unauthorized');
      //           $state.go('login');
      //
      //         } else {
      //           return res.data;
      //         }
      //       }, function(err) {
      //         console.log('brack');
      //         alert('Unauthorized');
      //         $state.go('login');
      //
      //       });
      //   }
      // }
    });
  $urlRouterProvider.otherwise('/map');

})

.directive('cohortSearch', function() {
  return {
    templateUrl: './js/directives/location/cohortLocation.html',
    restrict: 'E',
    scope: {
      cohortData: '='
    },
    controller: 'cohortSearchCtrl'
  };
})


.directive('homeSearch', function() {
  return {
    templateUrl: './js/directives/location/homeLocation.html',
    restrict: 'E',
    scope: {
      homeData: '='
    },
    controller: 'homeSearchCtrl'
  };
})

.directive('afterSearch', function() {
  return {
    templateUrl: './js/directives/location/afterLocation.html',
    restrict: 'E',
    scope: {
      afterData: '='
    },
    controller: 'afterSearchCtrl'
  };
})

.directive('housingGraph', function() {
    return {
        templateUrl: './js/directives/finance/housingGraphTmpl.html',
        restrict: 'E',
        scope: {
            afterData: '='
        },
        controller: 'housingGraphCtrl'
    };
})
.directive('employmentGraph', function() {
    return {
        templateUrl: './js/directives/finance/employmentGraphTmpl.html',
        restrict: 'E',
        scope: {
            afterData: '='
        },
        controller: 'employmentGraphCtrl'
    };
});
