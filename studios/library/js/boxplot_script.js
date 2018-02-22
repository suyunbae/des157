var labels = true; // show the text labels beside individual boxplots?

var margin2= {top: 30, right: 50, bottom: 100, left: 50};
var width2 = 960 - margin2.left - margin2.right;
var height2 = 450 - margin2.top - margin2.bottom;

var min = Infinity;
var max = -Infinity;

var xAxisLabel = "State";
var yAxisLabel = "Rate";


//Grabing the data from the state_ratings.csv
function drawBoxplot() {
  d3.csv("state_ratings.csv", function(error, csv) {
      var headerNames = d3.keys(csv[0]);

      var data = []
      for (var i = 0; i < headerNames.length; i++) {
          data[i] = [];
          data[i][0] = headerNames[i];
          data[i][1] = []
      }

  	csv.forEach(function(x) {
          for (var i = 0; i < headerNames.length; i++) {
              var val = Math.floor(x[headerNames[i]]);
              if (val) {
                data[i][1].push(val);
                max = Math.max(max, val);
                min = Math.min(min, val);
              }
          }
  	});
  //creating box/whisker plot
  	var chart = d3.box()
  		.whiskers(iqr(1.5))
  		.height(height2)
  		.domain([min, max])
  		.showLabels(labels);

  	var svg = d3.select("#statesvg").append("svg")
  		.attr("width", width2 + margin2.left + margin2.right)
  		.attr("height", height2 + margin2.top + margin2.bottom)
  		.attr("class", "box")
  		.append("g")
  		.attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  	// the x-axis
  	var x = d3.scale.ordinal()
  		.domain( data.map(function(d) { return d[0]; } ) )
  		.rangeRoundBands([0 , width2], 0.7, 0.3);

  	var xAxis = d3.svg.axis()
  		.scale(x)
  		.orient("bottom");

  	// the y-axis
  	var y = d3.scale.linear()
  		.domain([min, max])
  		.range([height2 + margin2.top, 0 + margin2.top]);

  	var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  	// draw the boxplots
  	svg.selectAll(".box")
        .data(data)
  	  .enter().append("g")
  		.attr("transform", function(d) { return "translate(" +  x(d[0])  + "," + margin2.top + ")"; } )
        .call(chart.width(x.rangeBand()));

      // draw x axis
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height2  + margin2.top + 10) + ")")
        .call(xAxis)
        .append("text")             // text label for the x axis
          .attr("x", (width2 / 2) )
          .attr("y",  10 )
          .attr("dy", "1.2em")
          .style("text-anchor", "middle")
          .style("font-size", "16px")
          .text(xAxisLabel);

  	 // draw y axis
  	svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
  		.append("text") // and text1
  		  .attr("transform", "rotate(-90)")
  		  .attr("y", 6)
  		  .attr("dy", ".71em")
  		  .style("text-anchor", "end")
  		  .style("font-size", "16px")
  		  .text(yAxisLabel);
  });
}
