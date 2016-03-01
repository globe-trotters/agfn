angular.module('myApp').controller('piggyBankCtrl', function($scope) {
   
    showGraph1();

    function showGraph1() {

        var margin = {
            top: 0,
            right: 100,
            bottom: 100,
            left: 50
        },
            width = 610 - margin.left - margin.right,
            height = 350 - margin.top - margin.bottom;

        var padding = 10,
            radius = d3.scale.sqrt().range([0,12])

        var svg = d3.select("#bank1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
        svg.append("defs").append("pattern")
            .attr("id", "image")
            .attr("x", "0%")
            .attr("y", "0%")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", "0 0 100 100")
            .append("image")
            .attr("x", "0%")
            .attr("y", "0%")
            .attr("height", "100")
            .attr("width", "100")
            .attr("xlink:href", "http://lincolnpennies.net/wp-content/uploads/2009/08/lincoln_penny_obverse1.jpg")
        svg = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var nodes = [];

        var circle = svg.selectAll("circle")
        .data(nodes)
        .enter().append("circle")

        var force = d3.layout.force()
        .nodes(nodes)
        .size([width, height])
        .gravity(.1)
        .charge(-20)
        .friction(.9)
        .linkDistance(10)
        .linkStrength(1)
        .on("tick", tick)
        .start();

        var interval = setInterval(function() {

            if (nodes.length >= 1) {
                nodes[nodes.length - 1].useForce = true;
            }
            if (nodes.length === 10) {
                window.clearInterval(interval)
            }

            nodes.push({radius: 10,
                        x:width / 2 + Math.random(),
                        y:0,
                        useForce: true})
            updateCoins();
        }, 500)

        function tick(e) {
            circle
                .each(collide(.5))
            circle = svg.selectAll("circle")
                .data(nodes)
                .attr("cx", function(d) {
                return d.x;
            })
                .attr("cy", function(d) {
                return d.y;
            })
        }

        function updateCoins() {

            circle = svg.selectAll("circle")
                .data(nodes)
                .enter().append("circle")
                .classed("penny", true)
                .style("fill", "url(#image)")
                .attr("r", function (d) {return d.radius;})
                .attr("cx", width / 2)
                .attr("cy", 0)

            force
                .nodes(nodes)
                .on("tick", tick)
                .start();

            circle = svg.selectAll("circle")
                .data(nodes)
                .call(force.drag)  
        }

        function collide(alpha) {
            var quadtree = d3.geom.quadtree(nodes);
            return function (d) {
                var r = d.radius + radius.domain()[1] + padding,
                    nx1 = d.x - r,
                    nx2 = d.x + r,
                    ny1 = d.y - r,
                    ny2 = d.y + r;
                quadtree.visit(function (quad, x1, y1, x2, y2) {
                    if (quad.point && (quad.point !== d)) {
                        var x = d.x - quad.point.x,
                            y = d.y - quad.point.y,
                            l = Math.sqrt(x * x + y * y),
                            r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
                        if (l < r) {
                            l = (l - r) / l * alpha;
                            d.x -= x *= l;
                            d.y -= y *= l;
                            quad.point.x += x;
                            quad.point.y += y;
                        }
                    }
                    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                });
            };
        }
    }

    showGraph2();

    function showGraph2() {

        var margin = {
            top: 0,
            right: 100,
            bottom: 100,
            left: 50
        },
            width = 610 - margin.left - margin.right,
            height = 350 - margin.top - margin.bottom;

        var padding = 10,
            radius = d3.scale.sqrt().range([0,12])

        var svg = d3.select("#bank2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
        svg.append("defs").append("pattern")
            .attr("id", "image")
            .attr("x", "0%")
            .attr("y", "0%")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", "0 0 100 100")
            .append("image")
            .attr("x", "0%")
            .attr("y", "0%")
            .attr("height", "100")
            .attr("width", "100")
            .attr("xlink:href", "http://lincolnpennies.net/wp-content/uploads/2009/08/lincoln_penny_obverse1.jpg")
        svg = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var nodes = [];

        var circle = svg.selectAll("circle")
        .data(nodes)
        .enter().append("circle")

        var force = d3.layout.force()
        .nodes(nodes)
        .size([width, height])
        .gravity(.1)
        .charge(-20)
        .friction(.9)
        .linkDistance(10)
        .linkStrength(1)
        .on("tick", tick)
        .start();

        var interval = setInterval(function() {

            if (nodes.length >= 1) {
                nodes[nodes.length - 1].useForce = true;
            }
            if (nodes.length === 50) {
                window.clearInterval(interval)
            }

            nodes.push({radius: 10,
                        x:width / 2 + Math.random(),
                        y:0,
                        useForce: true})
            updateCoins();
        }, 500)

        function tick(e) {
            circle
                .each(collide(.5))
            circle = svg.selectAll("circle")
                .data(nodes)
                .attr("cx", function(d) {
                return d.x;
            })
                .attr("cy", function(d) {
                return d.y;
            })
        }

        function updateCoins() {

            circle = svg.selectAll("circle")
                .data(nodes)
                .enter().append("circle")
                .classed("penny", true)
                .style("fill", "url(#image)")
                .attr("r", function (d) {return d.radius;})
                .attr("cx", width / 2)
                .attr("cy", 0)

            force
                .nodes(nodes)
                .on("tick", tick)
                .start();

            circle = svg.selectAll("circle")
                .data(nodes)
                .call(force.drag)  
        }

        function collide(alpha) {
            var quadtree = d3.geom.quadtree(nodes);
            return function (d) {
                var r = d.radius + radius.domain()[1] + padding,
                    nx1 = d.x - r,
                    nx2 = d.x + r,
                    ny1 = d.y - r,
                    ny2 = d.y + r;
                quadtree.visit(function (quad, x1, y1, x2, y2) {
                    if (quad.point && (quad.point !== d)) {
                        var x = d.x - quad.point.x,
                            y = d.y - quad.point.y,
                            l = Math.sqrt(x * x + y * y),
                            r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
                        if (l < r) {
                            l = (l - r) / l * alpha;
                            d.x -= x *= l;
                            d.y -= y *= l;
                            quad.point.x += x;
                            quad.point.y += y;
                        }
                    }
                    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                });
            };
        }
    }   
})