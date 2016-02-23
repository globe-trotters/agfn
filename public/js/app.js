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
  $urlRouterProvider.otherwise('/map');

});

// .directive('navDir', function() {
//     return {
//       templateUrl: './dirs/navDir.html',
//       restrict: 'E', //directive can only be used as a full element
//       //restrict: 'A' restricts attributes
//       //can also use both 'EA'
//     };
//   });
