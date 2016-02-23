angular.module("myApp").controller("housingGraphCtrl", function($scope, financeSvc) {
    
    var margin = {top: 20, right: 55, bottom: 30, left: 40},
        width  = 1000 - margin.left - margin.right,
        height = 500  - margin.top  - margin.bottom;
    var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);
    var y = d3.scale.linear()
    .rangeRound([height, 0]);
    var color = d3.scale.ordinal()
    .range(["#001c9c","#101b4d","#475003","#9c8305","#d3c47c"]);
    var svg = d3.select("body").append("svg")
    .attr("width",  width  + margin.left + margin.right)
    .attr("height", height + margin.top  + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
  d3.csv("graphData.csv", function(err, data) {
      var labelVar = 'place';
      var varNames = d3.keys(data[0])
        .filter(function(key) {
            return key !== labelVar;
        });
      
      color.domain(varNames);
      
      data.forEach(function(d) {
          var y0 = 0;
          d.mapping = varNames.map(function(name) {
              return {
                  name: name,
                  label: d[labelVar],
                  y0: y0,
                  y1: y0 += +d[name]
              };
          });
          d.total = d.mapping[d.mapping.length -1].y1;
      });
      
      console.log("data: ", data);
      
      x.domain(data.map(function(d) {
          return d.quarter;
      }))
      y.domain([0, d3.max(data, function(d) {
          return d.total;
      })]);
      
      var selection = svg.selectAll(".series")
        .data(data)
      .enter().append("g")
        .attr("class", "series")
        .attr("transform", function(d) {
            return "translate(" + x(d.quarter) + ",0";
        });
      
      selection.selectAll("rect")
        .data(function(d) {
          return d.mapping
      })
      .enter().append("rect")
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
          return y(d.y1);
      })
      .attr("height", function(d) {
          return y(d.y0) - y(d.y1);
      })
      .style("fill", function(d) {
          return color(d.name);
      })
      .style("stroke", "grey");
  })

})