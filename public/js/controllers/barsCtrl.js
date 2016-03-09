angular.module("myApp").controller("barsCtrl", function($scope, $rootScope, $element, adminService) {

  //***************************bars****************************
  $rootScope.cohortupdate = [];
  $scope.totalStudents = 0;

    adminService.getCohorts()
    .then(function(response){
      $rootScope.cohortData = response;
      $rootScope.cohortData.forEach(function(a) {
        $scope.totalStudents = $scope.totalStudents + Object.keys(a.students).length;
      });
    });
    $rootScope.duringupdate = [];
    $rootScope.afterupdate = [];

    $rootScope.$watchCollection('duringupdate', function() {
      makebars();
    },true);

    $rootScope.$watchCollection('afterupdate', function() {
      makebars();
    },true);

    $scope.data = [0, 0, 0, 0, 0];

    var text = ["Total Students", "States", "Countries", "Out of State Retention", "Total Jobs"];

    d3.select('.bars')
    .selectAll('div')
    .data($scope.data)
    .enter()
    .append('div')
    .text(text)
    .style('width', function(d,i){
      return 0;
    });

    var makebars = function() {

      $scope.data = [0, 0, 0, 0, 0];
      xRange = d3.scale.ordinal()
        .rangeRoundBands(['width'], 0.1)
        .domain($scope.data.map(function(d) {
             return d.y;
         }));

      var stateArray = [];
      var countryArray = [];
      var retentionCount = 0;
      var jobs = 0;

      $rootScope.duringupdate.forEach(function(a) {
        $scope.data[0] = $scope.data[0] + Object.keys(a.students).length;
        for (var b = 0; b < a.students.length; b++) {
          stateArray.push(a.students[b].homeData.state);
          countryArray.push(a.students[b].homeData.country);
        }
      });

      $rootScope.afterupdate.forEach(function(c) {
        for (var d = 0; d < c.students.length; d++) {
          if (c.students[d].job) {
            jobs++;
          }
          if (c.students[d].afterData) {
            if (c.cohortData.state === "Utah") {
              if (c.students[d].afterData.state === "Utah") {
                retentionCount++;
              }
            }
            if (c.cohortData.state === "Texas") {
              if (c.students[d].afterData.state === "Texas") {
                retentionCount++;
              }
            }

          }
        }
      });

      if ($scope.data[0] !== 0) {
        $scope.data[4] = (jobs/($scope.data[0])*100).toFixed(0);
        $scope.data[3] = (retentionCount/($scope.data[0])*100).toFixed(0);
      }

      for (var k = 0; k < stateArray.length; k++) {
        for (var l = k + 1; l < stateArray.length; l++) {
          if (stateArray[l] === stateArray[k]) {
            stateArray.splice(l, 1);
            l--;
          }
        }
      }
      $scope.data[1] = stateArray.length;

      for (var m = 0; m < countryArray.length; m++) {
        for (var n = m + 1; n < countryArray.length; n++) {
          if (countryArray[n] === countryArray[m]) {
            countryArray.splice(n, 1);
            n--;
          }
        }
      }
      $scope.data[2]= countryArray.length;

      var parentWidth = $element[0].clientWidth;

      d3.select('.bars')
      .selectAll('div')
      .data($scope.data)
      //.attr('x', xRange(1))
      .transition(Math.random()*100)
      .duration(4000)
      .style('width', function(d,i){
        if (d === $scope.data[0]) {
          return (d/$scope.totalStudents)*parentWidth + 'px';
        }
        if (d === $scope.data[1]) {
          return (d/100)*parentWidth + 'px';
        }
        if (d === $scope.data[2]) {
          return (d/100)*parentWidth + 'px';
        }
        return (d/100)*parentWidth + 'px';
      })
      // .style('background-color', function(d,i){
      //   return d3.hsl(i/$scope.data.length*360,0.5,0.5);
      // })
      ;
    };

});
