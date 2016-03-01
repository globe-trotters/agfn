angular.module("myApp").controller("barsCtrl", function($scope, $rootScope, $element) {

  //***************************bars****************************
  $rootScope.cohortupdate = [];

  $rootScope.$watchCollection('cohortupdate', function() {
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

      $rootScope.cohortupdate.forEach(function(a) {
        $scope.data[0] = $scope.data[0] + Object.keys(a.students).length;
        for (var b in a.students) {
          stateArray.push(a.students[b].homeData.state);
          countryArray.push(a.students[b].homeData.country);

          if (a.students[b].job) {
            jobs++;
          }
          if (a.students[b].afterData.state === "Utah") {
            retentionCount++;
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
        return (d/100)*parentWidth + 'px';
      })
      .style('background-color', function(d,i){
        return d3.hsl(i/$scope.data.length*360,0.5,0.5);
      });
    };
});
