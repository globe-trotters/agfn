angular.module("myApp").controller("earthCtrl", function($scope, $window, $interval, $rootScope ) {

//VARIABLES
//create variables
  var linkcamp = [], //coordinates for from to camp
      linkjob  = [], //coordinates for camp to job
      arcLines = [], //coordinates for arc ashadows
      scale    = 380, //scale of earth
      width    = 1800, //earth svg width
      height   = 1000; //earth svg height

  //view of earth
  var proj = d3.geo.orthographic()
      .translate([width / 3.5, height / 2])//position of earth on page
      .clipAngle(90)//determines projection of map on globe
      .scale(scale) //scale of globe
      .rotate([104,-40]);//size of projection

  //view of sky
  var sky = d3.geo.orthographic()
      .translate([width / 3.5, height / 2])//position of sky on page
      .clipAngle(90) //equal projectio as earth
      .scale(scale*1.2) //scale of sky, slightly bigger than earth
      .rotate([104,-40]);//size of projection

  //creates path generator based on selected projection type, in our case, orthographic
  var path = d3.geo.path()
      .projection(proj);

//**********************change to greatArc
  //function for projection of arc lines
  var swoosh = d3.svg.line()
      .x(function(d) {
        return d[0];
      })
      .y(function(d) {
        return d[1];
      })
      .interpolate("cardinal")//type of lines, may be straight, ,linear, with a peek, or just rounded like we have
      .tension(-0.05);//curvature of arc lines -1 to 1

  //earth svg definition
  var svg = d3.select(".earth")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .on("mousedown", mousedown);

//INITIALIZE FUNCTIONS

    //establish mouse move variables
  d3.select(window)
      .on("mousemove", mousemove)
      .on("mouseup", mouseup);

  //call in json of world svg and coordinates
  queue()
      .defer(d3.json, "json/world-110m.json")
      .defer(d3.json, "json/usa.json")
      .await(ready);

//REUSABLE FUNCTIONS

//function to append
  function ready(error, world, usa) {
    //FUNCTION VARIABLES

    //ocean fill and sun lighting
    var ocean_fill = svg.append("defs")
        .append("radialGradient")
        .attr("id", "ocean_fill")
        .attr("cx", "75%")//light position x direction
        .attr("cy", "25%");//light position y direction
        ocean_fill.append("stop")
        .attr("offset", "5%")
        .attr("stop-color", "lightblue");//light color
        ocean_fill.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#1b85b8");//background color

    //globe fill and sun lighting
    var globe_highlight = svg.append("defs")
        .append("radialGradient")
        .attr("id", "globe_highlight")
        .attr("cx", "75%")//light position x direction
        .attr("cy", "25%");//light position y direction
        globe_highlight.append("stop")
        .attr("offset", "5%")
        .attr("stop-color", "lightblue")//light color
        .attr("stop-opacity","0.6");
        globe_highlight.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#000")//background-color
        .attr("stop-opacity","0.2");

    //globe shading
    var globe_shading = svg.append("defs")
          .append("radialGradient")
          .attr("id", "globe_shading")
          .attr("cx", "55%")
          .attr("cy", "45%");
        globe_shading.append("stop")
          .attr("offset","30%")
          .attr("stop-color", "lightblue")
          .attr("stop-opacity","0");
        globe_shading.append("stop")
          .attr("offset","100%").attr("stop-color", "#000")
          .attr("stop-opacity","0.6");

//actually append svgs

  //of ocean
    svg.append("circle")
      .attr("cx", width / 3.5)
      .attr("cy", height / 2)
      .attr("r", proj.scale())
      .attr("class", "noclicks")
      .style("fill", "url(#ocean_fill)");

  //of land
    svg.append("path")
      .datum(topojson.feature(world, world.objects.countries))
      .attr("class", "land noclicks")
      .attr("d", path);

  //of usa
    svg.append("path")
      .datum(topojson.feature(usa, usa.objects.states))
      .attr("class", "land noclicks")
      .attr("d", path);

  //of globe highlight
    svg.append("circle")
      .attr("cx", width / 3.5)
      .attr("cy", height / 2)
      .attr("r", proj.scale())
      .attr("class","noclicks")
      .style("fill", "url(#globe_highlight)");

  //of globe shading
    svg.append("circle")
      .attr("cx", width / 3.5)
      .attr("cy", height / 2)
      .attr("r", proj.scale())
      .attr("class","noclicks")
      .style("fill", "url(#globe_shading)");

  //ROOTSCOPE MONITORING

    $rootScope.duringupdate = [];
    $rootScope.afterupdate = [];

    $rootScope.$watchCollection('duringupdate', function() {
      $rootScope.makearc();
    },true);

    $rootScope.$watchCollection('afterupdate', function() {
      $rootScope.makearc();
    },true);

    //FUNCTIONS
    $rootScope.makearc = function () {

      linkcamp = [];
      linkjob = [];

      //resets flyin arcs
      svg.selectAll(".flyin")
          .data(linkcamp)
          .exit()
          .remove();

      //resets flyout arcs
      svg.selectAll(".flyout")
          .data(linkjob)
          .exit()
          .remove();

      //resets arc shadows
      // svg.append("g")
      //     .attr("class","arc")
      //     .selectAll("path")
      //     .data(arcLines)
      //     .exit()
      //     .remove();

      //populates arc coordinate array

      $rootScope.duringupdate.forEach(function(a) {
        for (var b = 0; b < a.students.length; b++) {
          if (a.students[b].homeData) {
            linkcamp.push({
              "source": [a.students[b].homeData.lng, a.students[b].homeData.lat],
              "target": [a.cohortData.lng, a.cohortData.lat]
            });
          }
        }
      });

      $rootScope.afterupdate.forEach(function(a) {
        for (var b = 0; b < a.students.length; b++) {
          if (a.students[b].afterData) {
            linkjob.push({
              "source": [a.cohortData.lng, a.cohortData.lat],
              "target": [a.students[b].afterData.lng, a.students[b].afterData.lat]
            });
          }
        }
      });


      //create flyin arcs
      if (linkcamp) {
        svg.append("g")
          .attr("class","flyin")
          .style("stroke-linecap", "round")
          .selectAll("path")
          .data(linkcamp)
          .enter()
          .append("path")
          .attr("class","flyer")
          .attr("d", function(d) {
            return swoosh(flying_arc(d));
          });
      }

      //create flyout arcs
      if (linkjob){
        svg.append("g")
          .attr("class","flyout")
          .style("stroke-linecap", "round")
          .selectAll("path")
          .data(linkjob)
          .enter()
          .append("path")
          .attr("class","flyer")
          .attr("d", function(d) {
            return swoosh(flying_arc(d));
          });
      }

    // append arc shadows
      // svg.append("g")
      //     .attr("class","arcs")
      //     .selectAll("path")
      //     .data(arcLines)
      //     .enter()
      //     .append("path")
      //     .attr("class","arc")
      //     .attr("class","arcs")
      //     .attr("d",path);


      refresh();
    };
  }

  //sets values for creating arc, start point, mid point, and end point
  function flying_arc(pts) {
    var source = pts.source,
        target = pts.target;
    var mid = location_along_arc(source, target, 0.5);
    var result = [ proj(source),
                   sky(mid),
                   proj(target)
                 ];
    return result;
  }

  //interpolates line for arclines
  function location_along_arc(start, end, loc) {
    var interpolator = d3.geo.interpolate(start,end);
    return interpolator(loc);
  }



  var refresh = function () {
    svg.selectAll(".land")
    .attr("d", path);



    svg.selectAll(".noclicks")
    .attr("r", proj.scale());

    // svg.selectAll(".arc")
    // .attr("d", path)
    //   .attr("opacity", function(d) {
    //       return fade_at_edge(d);
    //   });

    svg.selectAll(".flyer")
      .attr("d", function(d) {
        return swoosh(flying_arc(d));
      })
      .attr("opacity", function(d) {
        return fade_at_edge(d);
      });
  };

  //fades atrc lines as they sink behind earth
  function fade_at_edge(d) {
    var centerPos = proj.invert([width/4,height/4]),
        arc = d3.geo.greatArc(),
        start, end;
    if (d.source) {
      start = d.source;
      end = d.target;
    }
    else {
      start = d.geometry.coordinates[0];
      end = d.geometry.coordinates[1];
    }

    var start_dist = 1.9 - arc.distance({source: start, target: centerPos}),
        end_dist = 1.75 - arc.distance({source: end, target: centerPos});

    var fade = d3.scale.linear()
    .domain([-0.1,0])
    .range([0,0.1]);

    var dist = start_dist < end_dist ? start_dist : end_dist;

    return fade(dist);
  }

  //create variables for mousemove
  var m0, o0;

  //on click rotate function
  function mousedown (){
    m0 = [d3.event.pageX, d3.event.pageY];
    o0 = proj.rotate();
    d3.event.preventDefault();
  }

  //function used to update rotational position based on click and drag position
  function mousemove () {
    if (m0) {
      var m1 = [d3.event.pageX, d3.event.pageY];
      o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
      o1[1] = o1[1] > 30  ? 30  :
              o1[1] < -50 ? -50 :
              o1[1];
      proj.rotate(o1);
      sky.rotate(o1);
      refresh();
    }
  }

  //ends click and drag of earth
  function mouseup () {
    if (m0) {
      mousemove();
      m0 = null;
    }
  }

  //zoomin function
  $scope.zoomin = function () {
    if (scale > 1500) {
      return;
    }
    scale = scale + 50;
    proj.scale(scale);
    sky.scale(scale*1.2);
    refresh();
  };

  //zoomout function
  $scope.zoomout = function () {
    if (scale < 101) {
      return;
    }
    scale = scale - 50;
    proj.scale(scale);
    sky.scale(scale*1.2);
    refresh();
  };

});
