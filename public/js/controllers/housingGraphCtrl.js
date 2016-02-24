angular.module('myApp').controller('housingGraphCtrl', function($scope) {

showChart();

function showChart() {

    var barData = [{
        'x': 'DevMountain',
        'y': 300,
        'z': 900
    }, {
        'x': 'Utah',
        'y': 1200,
        'z': 900
    },  {
        'x': 'New York',
        'y': 1850,
        'z': 1000
    }, {
        'x': 'San Francisco',
        'y': 2500,
        'z': 1200
    }];

    //Chart Parameters
    var chart = d3.select('#chart'),
        margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 80
        },
        width = 1000 - margins.left - margins.right,
        height = 500 - margins.top - margins.bottom,
        xRange = d3.scale.ordinal().rangeRoundBands([margins.left, width - margins.right], 0.1).domain(barData.map(function (d) {
            return d.x;
        })),

        yRange = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([0,3000]),

        xAxis = d3.svg.axis()
            .scale(xRange)
            .tickSize(5)
            .tickSubdivide(true),

        yAxis = d3.svg.axis()
            .scale(yRange)
            .tickSize(5)
            .orient("left")
            .tickSubdivide(true);

    //Set x-axis
    chart.append('svg:g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
        .call(xAxis)
        .attr('fill', '#ffffff')
        .append("text")
        .attr("x", width / 2)
        .attr("y", height - 400)
        .style("text-anchor", "middle")
        .text("Location")
        .attr('fill', '#ffffff')
        .style("font-size","34px")
        .style("font-family","Josefin Slab");

    //Set y-axis
    chart.append('svg:g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + (margins.left) + ',0)')
        .call(yAxis)
        .attr('fill', '#ffffff')
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -77)
        .attr("x",0 - (height / 2))
        .attr("dy", ".71em")
        .style("text-anchor", "middle")
        .text("Cost in $")
        .attr('fill', '#ffffff')
        .style("font-size","34px")
        .style("font-family","Josefin Slab");

    //Show Housing Bars
    chart.selectAll('rect')
        .data(barData)
        .enter()
        .append('rect')
        .attr('height', 0)
        .transition().duration(2000)
        .attr('x', function(d) {
        return xRange(d.x)+xRange.rangeBand()/2;
    })
        .attr('y', function(d) {
        return yRange(d.y);
    })
        .attr('width', xRange.rangeBand()/2)
        .attr('height', function (d) {
        return ((height - margins.bottom) - yRange(d.y));
    })
        .attr('fill', '#C1CED4')

    //Show Expenses Bars
    chart.selectAll('rect2')
        .data(barData)
        .enter()
        .append('rect')
        .attr('height', 0)
        .transition().duration(2000)
        .attr('x', function(d) {
        return xRange(d.x);
    })
        .attr('y', function(d) {
        return yRange(d.z);
    })
        .attr('width', xRange.rangeBand()/2)
        .attr('height', function (d) {
        return ((height - margins.bottom) - yRange(d.z));
    })
        .attr('fill', '#05A8E6');

    //Legend
    var colors = ['#05A8E6', '#C1CED4'];
    var legendData= ['Expenses', 'Housing'];

    var legend = chart.append("g")
    .attr("class", "legend")
    .attr("height", 100)
    .attr("width", 100)
    .attr('transform', 'translate(-20,30)');

    var legendRect = legend.selectAll('rect').data(colors);

    legendRect.enter()
        .append("rect")
        .attr("x", width - 65)
        .attr("width", 10)
        .attr("height", 10);

    legendRect
        .attr("y", function(d, i) {
        return i * 20;
    })
        .style("fill", function(d) {
        return d;
    });

    var legendText = legend.selectAll('text').data(legendData);

    legendText.enter()
        .append("text")
        .attr("x", width - 45)
        .attr('fill', '#ffffff');

    legendText
        .attr("y", function(d, i) {
        return i * 20 + 9;
    })
        .text(function(d) {
        return d;
    }); 
}
})