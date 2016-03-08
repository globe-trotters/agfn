angular.module('myApp').controller('employmentViewGraphCtrl', function($scope){
  //////TIME TO ANIMATE ///////
  var duration = 2000,
    transition = 200;

  /////CALLING DONUT FUNCTION ARGUMENTS///////
  drawDonutChart(
    '#hiring',
    $('#hiring').data('hiring'),
    470,
    470,
    ".35em"
  );
  ///////DECLARING FUNCTION ////////////
  function drawDonutChart(element, percent, width, height, text_y) {


    var dataset = {
        lower: calcPercent(0), ////////STARTING %///////
        upper: calcPercent(percent) ///ENDING %//////
      },
      radius = Math.min(width, height) / 2,
      pie = d3.layout.pie().sort(null), ///CHART LAYOUT
      format = d3.format(".0%"); ///DISPLAYS IN % FORMAT (NO DECIMALS FOR NOW)

    var arc = d3.svg.arc()
      .innerRadius(radius - 35) ///THICKNESS OF DONUT////////
      .outerRadius(radius);

    var svg = d3.select(element).append("svg") ///SET DIMENSIONS
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = svg.selectAll("path")
      .data(pie(dataset.lower)) //START AT 0%
      .enter().append("path")
      .attr("class", function(d, i) {
        return "color" + i;
      })
      .attr("d", arc)
      .each(function(d) {
        this._current = d;
      }); // STORES STARTING %

    var text = svg.append("text") //ADDS % IN MIDDLE OF CIRCLE
      .attr("text-anchor", "middle")
      .attr("dy", text_y);

    if (typeof(percent) === "string") {
      text.text(percent);
    } else {
      var progress = 0;
      var timeout = setTimeout(function() {
        clearTimeout(timeout);
        path = path.data(pie(dataset.upper)); // UPDATES TO % IN DATA
        path.transition().duration(duration).attrTween("d", function(a) {
          // Store the displayed angles in _current.
          // Then, interpolate from _current to the new angles.
          // During the transition, _current is updated in-place by d3.interpolate.
          var i = d3.interpolate(this._current, a);
          var i2 = d3.interpolate(progress, percent);
          this._current = i(0);
          return function(t) {
            text.text(format(i2(t) / 100));
            return arc(i(t));
          };
        }); // redraw the arcs
      }, 200);
    }

    function calcPercent(percent) {
      return [percent, 100 - percent];
    }
  }
});
