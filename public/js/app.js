angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
  ///////USER VIEWS///////
    .state('home', {
      url: '/home',
      templateUrl: './js/views/landingTmpl.html'
    })
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
    .state('employment', {
      url: '/employment',
      templateUrl: 'js/views/employmentView.html',
      controller: 'employmentViewCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: './js/views/adminView.html',
      controller: 'adminCtrl',

      resolve: {
        user: function($state, loginService) {
          return loginService.getCurrentUser()
            .then(function(res) {
              if (res.status != 200) {
                console.log('brack');
                alert('Unauthorized');
                $state.go('login');

              } else {
                return res.data;
              }
            }, function(err) {
              console.log('brack');
              alert('Unauthorized');
              $state.go('login');

            });
        }
      }
    })
    .state('adminEdit', {
      url: '/edit',
      templateUrl: './js/views/adminEdit.html',
      controller: 'adminCtrl',

      resolve: {
        user: function($state, loginService) {
          return loginService.getCurrentUser()
            .then(function(res) {
              if (res.status != 200) {
                console.log('brack');
                alert('Unauthorized');
                $state.go('login');

              } else {
                return res.data;
              }
            }, function(err) {
              console.log('brack');
              alert('Unauthorized');
              $state.go('login');

            });
        }
      }
    });
  $urlRouterProvider.otherwise('/home');
})

.directive('navBar', function() {
  return {
    templateUrl: './js/directives/nav/navBarTmpl.html',
    restrict: 'E',
    controller: 'navCtrl'
  };
})
.directive('footerDir', function() {
  return {
    templateUrl: './js/directives/nav/footerTmpl.html',
    restrict: 'E',
    controller: 'mainCtrl'
  };
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
})
    .directive('expensesGraph', function() {
    return {
        templateUrl: './js/directives/finance/totalExpensesGraphTmpl.html',
        restrict: 'E',
        scope: {
        },
        controller: 'totalExpensesGraphCtrl'
    };
})
.directive('piggyBank', function() {
    return {
        templateUrl: './js/directives/finance/piggyBankTmpl.html',
        restrict: 'E',
        scope: {
        },
        controller: 'piggyBankCtrl'
    };
})
.directive('body', function() {
 return {
   restrict: 'E',
   scope: {
     zoomin: '=',
     zoomout: '='
   },
   controller: 'mainCtrl'
 };
})
.directive('earth', function() {
 return {
   restrict: 'E',
   scope: {
     zoomin: '=',
     zoomout: '=',
     cohortupdate:'='
   },
   controller: 'earthCtrl'
 };
})
.directive('bars', function() {
 return {
  restrict: 'E',
  scope: {
    data:'=',
    cohortupdate:'=',
  },
  controller: 'barsCtrl'
 };
})
.directive('scrollbar', function() {
 return {
   restrict: 'E',
   scope: {
     cohortupdate: '=',
     arcit: '&',
     viewdate: '=',
     play: '='
   },
   controller: 'scrollbarCtrl'
 };
})
.directive('employmentViewGraph', function() {
    return {
        templateUrl: './js/directives/finance/employmentViewGraphTmpl.html',
        restrict: 'E',
        scope: {
            afterData: '='
        },
        controller: 'employmentViewGraphCtrl'
    };
});
