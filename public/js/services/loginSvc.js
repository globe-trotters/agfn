angular.module('myApp').service('loginService', function($http, $state) {


    this.loginUser = function(username, password) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: {
          username: username,
          password: password
        }
      }).then(function(res) {
        // console.log(res);
        if (res.status === 200) {
          console.log('successfully logged in');
          // $state.go('');
        } else {
          alert('Login Failed');
        }
      }, function(err) {
        alert('Login Failed');
        res.send(err);
      });
    };

    this.getCurrentUser = function() {
      return $http({
        method: 'GET',
        url: '/api/getCurrentUser'
      }).then(function(res) {
        return res;
      });
    };


    this.logout = function() {
      return $http({
        method: 'GET',
        url: '/api/logout'
      }).then(function(res) {
        return res;
      });
    };

  });
