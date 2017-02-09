// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 40, bottom: 50, left: 70},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%Y").parse;

// Set the ranges
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis()
	.scale(x)
    .orient("bottom")
    .ticks(10)
    .tickFormat(d3.format("d"));

var yAxis = d3.svg.axis()
	.scale(y)
    .orient("left")
    .innerTickSize(-width)
    .tickPadding(12);

// Define the line
var valueline = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.avg_feb); })
    .interpolate('cardinal');

var valueline2 = d3.svg.line()
	.x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.avg_mar); })
    .interpolate('cardinal');
    
// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
data = [{year:"1895",avg_feb:17,avg_mar:31.3},
		{year:"1896",avg_feb:26.6,avg_mar:27.8},
		{year:"1897",avg_feb:27.9,avg_mar:36.9},
		{year:"1898",avg_feb:26.7,avg_mar:42},
		{year:"1899",avg_feb:20,avg_mar:34},
		{year:"1900",avg_feb:24.1,avg_mar:29.3},
		{year:"1901",avg_feb:18.9,avg_mar:35.1},
		{year:"1902",avg_feb:21,avg_mar:38.8},
		{year:"1903",avg_feb:28,avg_mar:44.5},
		{year:"1904",avg_feb:19.2,avg_mar:34},
		{year:"1905",avg_feb:18.1,avg_mar:36.9},
		{year:"1906",avg_feb:25.3,avg_mar:29.1},
		{year:"1907",avg_feb:20.1,avg_mar:39.5},
		{year:"1908",avg_feb:22.1,avg_mar:38.4},
		{year:"1909",avg_feb:32.9,avg_mar:33.1},
		{year:"1910",avg_feb:23.8,avg_mar:42.6},
		{year:"1911",avg_feb:28.5,avg_mar:32.8},
		{year:"1912",avg_feb:21.1,avg_mar:31.5},
		{year:"1913",avg_feb:25,avg_mar:40},
		{year:"1914",avg_feb:18.7,avg_mar:31.7},
		{year:"1915",avg_feb:30.6,avg_mar:30.3},
		{year:"1916",avg_feb:22.8,avg_mar:28.2},
		{year:"1917",avg_feb:23,avg_mar:35.4},
		{year:"1918",avg_feb:25.7,avg_mar:39.3},
		{year:"1919",avg_feb:29.6,avg_mar:38.6},
		{year:"1920",avg_feb:23,avg_mar:36.7},
		{year:"1921",avg_feb:30,avg_mar:45.4},
		{year:"1922",avg_feb:30.1,avg_mar:37.1},
		{year:"1923",avg_feb:22.1,avg_mar:34.3},
		{year:"1924",avg_feb:23.9,avg_mar:33.5},
		{year:"1925",avg_feb:32.8,avg_mar:38.1},
		{year:"1926",avg_feb:25.8,avg_mar:30.2},
		{year:"1927",avg_feb:32,avg_mar:39.2},
		{year:"1928",avg_feb:27.3,avg_mar:34},
		{year:"1929",avg_feb:24.7,avg_mar:41},
		{year:"1930",avg_feb:32.2,avg_mar:35.1},
		{year:"1931",avg_feb:29,avg_mar:33.7},
		{year:"1932",avg_feb:32.6,avg_mar:30.8},
		{year:"1933",avg_feb:28.4,avg_mar:33.8},
		{year:"1934",avg_feb:15.2,avg_mar:32.1},
		{year:"1935",avg_feb:25.8,avg_mar:40},
		{year:"1936",avg_feb:18.3,avg_mar:39.4},
		{year:"1937",avg_feb:28.5,avg_mar:31.4},
		{year:"1938",avg_feb:31.4,avg_mar:40.1},
		{year:"1939",avg_feb:30.2,avg_mar:35.6},
		{year:"1940",avg_feb:26.3,avg_mar:29.5},
		{year:"1941",avg_feb:23.6,avg_mar:28.9},
		{year:"1942",avg_feb:23.2,avg_mar:37.8},
		{year:"1943",avg_feb:27.6,avg_mar:34.7},
		{year:"1944",avg_feb:27.5,avg_mar:32.7},
		{year:"1945",avg_feb:27.1,avg_mar:46.2},
		{year:"1946",avg_feb:27.4,avg_mar:45.3},
		{year:"1947",avg_feb:21.7,avg_mar:30.3},
		{year:"1948",avg_feb:25.6,avg_mar:38.3},
		{year:"1949",avg_feb:32.9,avg_mar:36.8},
		{year:"1950",avg_feb:27.4,avg_mar:30.8},
		{year:"1951",avg_feb:28.9,avg_mar:36.1},
		{year:"1952",avg_feb:30.6,avg_mar:34.6},
		{year:"1953",avg_feb:31.8,avg_mar:37.9},
		{year:"1954",avg_feb:33.6,avg_mar:35},
		{year:"1955",avg_feb:27.3,avg_mar:37.2},
		{year:"1956",avg_feb:29.8,avg_mar:32.9},
		{year:"1957",avg_feb:31.4,avg_mar:36.1},
		{year:"1958",avg_feb:20.4,avg_mar:33.7},
		{year:"1959",avg_feb:27,avg_mar:34.1},
		{year:"1960",avg_feb:28.6,avg_mar:24.5},
		{year:"1961",avg_feb:28.9,avg_mar:37.1},
		{year:"1962",avg_feb:25.4,avg_mar:34.2},
		{year:"1963",avg_feb:18.4,avg_mar:37.5},
		{year:"1964",avg_feb:23.6,avg_mar:36.9},
		{year:"1965",avg_feb:26.2,avg_mar:32.1},
		{year:"1966",avg_feb:26.5,avg_mar:37.5},
		{year:"1967",avg_feb:22.6,avg_mar:34.4},
		{year:"1968",avg_feb:22.3,avg_mar:38.4},
		{year:"1969",avg_feb:26.7,avg_mar:32.7},
		{year:"1970",avg_feb:25.3,avg_mar:31.6},
		{year:"1971",avg_feb:27.5,avg_mar:32.5},
		{year:"1972",avg_feb:23.2,avg_mar:33.1},
		{year:"1973",avg_feb:25.5,avg_mar:42.9},
		{year:"1974",avg_feb:26.2,avg_mar:36.9},
		{year:"1975",avg_feb:28.8,avg_mar:33.7},
		{year:"1976",avg_feb:33.5,avg_mar:40.8},
		{year:"1977",avg_feb:26.1,avg_mar:41.2},
		{year:"1978",avg_feb:17.2,avg_mar:31.9},
		{year:"1979",avg_feb:16.4,avg_mar:39.4},
		{year:"1980",avg_feb:23,avg_mar:33.3},
		{year:"1981",avg_feb:30.7,avg_mar:34.1},
		{year:"1982",avg_feb:26.9,avg_mar:34.9},
		{year:"1983",avg_feb:29.8,avg_mar:38.7},
		{year:"1984",avg_feb:33.8,avg_mar:29.5},
		{year:"1985",avg_feb:27.1,avg_mar:38.3},
		{year:"1986",avg_feb:26.7,avg_mar:38},
		{year:"1987",avg_feb:26.8,avg_mar:39},
		{year:"1988",avg_feb:26.8,avg_mar:37.2},
		{year:"1989",avg_feb:27.1,avg_mar:36.7},
		{year:"1990",avg_feb:33.9,avg_mar:40.2},
		{year:"1991",avg_feb:32.4,avg_mar:39.5},
		{year:"1992",avg_feb:30.9,avg_mar:34.5},
		{year:"1993",avg_feb:23.5,avg_mar:32.8},
		{year:"1994",avg_feb:24.1,avg_mar:33.8},
		{year:"1995",avg_feb:23.9,avg_mar:39.7},
		{year:"1996",avg_feb:27,avg_mar:31.8},
		{year:"1997",avg_feb:33,avg_mar:37.6},
		{year:"1998",avg_feb:35.8,avg_mar:39.7},
		{year:"1999",avg_feb:31.7,avg_mar:34.2},
		{year:"2000",avg_feb:31.6,avg_mar:42.6},
		{year:"2001",avg_feb:31.5,avg_mar:33.3},
		{year:"2002",avg_feb:33.9,avg_mar:38.2},
		{year:"2003",avg_feb:23.8,avg_mar:37.2},
		{year:"2004",avg_feb:27,avg_mar:39.5},
		{year:"2005",avg_feb:30.1,avg_mar:32.3},
		{year:"2006",avg_feb:29.8,avg_mar:37},
		{year:"2007",avg_feb:20.1,avg_mar:37.4},
		{year:"2008",avg_feb:27.7,avg_mar:35.6},
		{year:"2009",avg_feb:29.6,avg_mar:38.2},
		{year:"2010",avg_feb:25.8,avg_mar:42},
		{year:"2011",avg_feb:28.6,avg_mar:36.3},
		{year:"2012",avg_feb:34.3,avg_mar:47.7},
		{year:"2013",avg_feb:27.4,avg_mar:33.9},
		{year:"2014",avg_feb:22.8,avg_mar:30.3},
		{year:"2015",avg_feb:16.1,avg_mar:31.6},
		{year:"2016",avg_feb:30.8,avg_mar:43.4}
		];

//d3.csv("data.csv", function(error, data) {
// data.forEach(function(d) {
// 	console.log(d, 'is d')
//     d.year = parseDate(d.year);
//     d.avg_feb = +d.avg_feb;
//     d.avg_mar = +d.avg_mar;
// });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.year; }));
    y.domain([0, d3.max(data, function(d) { return Math.max(d.avg_feb, d.avg_mar); })]);

    // Add valueline path
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

   	// Add valueline path 2
    svg.append("path")
        .attr("class", "line")
        .style("stroke", "green")
        .attr("d", valueline2(data));

	// Define the div for the tooltip
	var div = d3.select("body").append("div") // TOOLTIP STUFF 
	    .attr("class", "tooltip")				
	    .style("opacity", 0);

	// Add dots
    svg.selectAll("dot") // For Feb
        .data(data)
    .enter().append("circle")
        .attr("r", 2.4)
        .attr("stroke", "steelblue")
        .attr("fill", "steelblue")
        .attr("cx", function(d) { return x(d.year); })
        .attr("cy", function(d) { return y(d.avg_feb); })
        .on("mousemove", function(d) { // TOOLTIP STUFF 
        	div.transition()
        		.duration(200)
        		.style("opacity", .9);
        	div.html("<strong>Feb " + d.year + ": </strong>" + d.avg_feb + " ºF")
        		.style("left", (d3.event.pageX) + "px")
        		.style("top", (d3.event.pageY - 28) + "px");
        	d3.select(this)
        		.attr("r", 6)
        		.style("fill", "steelblue");
        	})
       	.on("mouseout", function(d) {
       		div.transition()
       			.duration(600)
       			.style("opacity", 0);
       		d3.select(this)
       			.attr("r", 2.4)
       			.style("fill", "steelblue");
       		});

    svg.selectAll("dot") // For March
        .data(data)
    .enter().append("circle")
        .attr("r", 2.3)
        .attr("stroke", "green")
        .attr("fill", "green")
        .attr("cx", function(d) { return x(d.year); })
        .attr("cy", function(d) { return y(d.avg_mar); })
        .on("mousemove", function(d) { // TOOLTIP STUFF 
        	div.transition()
        		.duration(200)
        		.style("opacity", .9);
        	div.html("<strong>March " + d.year + ": </strong>" + d.avg_mar + " ºF")
        		.style("left", (d3.event.pageX) + "px")
        		.style("top", (d3.event.pageY - 28) + "px");
        	d3.select(this)
        		.attr("r", 6)
        		.style("fill", "green");
        	})
       	.on("mouseout", function(d) {
       		div.transition()
       			.duration(600)
       			.style("opacity", 0);
       		d3.select(this)
       			.attr("r", 2.4)
       			.style("fill", "green");
       		});

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    // Styling text 
    svg.append("g") // Temperature on Y axis
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -50)
      .attr("x", -170)
      .attr("dy", ".61em")
      .style("text-anchor", "end")
      .text("Temp (ºF)");

    svg.append("g") // Year on X axis
      .attr("class", "x axis")
      .append("text")
      .attr("transform", "translate(0," + height + ")")
      .attr("y", 47)
      .attr("x", 483)
      .style("text-anchor", "end")
      .text("Year");

   	svg.append("text") // "March" to end of line
		.attr("transform", "translate(" + (width+3) + "," + y(data[0].open) + ")")
		.attr("dy", "3.3em")
		.attr("dx", "77.5em")
		.attr("text-anchor", "end")
		.style("fill", "green")
		.text("March");

	svg.append("text") // "Feb" to end of line
		.attr("transform", "translate(" + (width+3) + "," + y(data[0].close) + ")")
		.attr("dy", "12.3em")
		.attr("dx", "74.6em")
		.attr("text-anchor", "start")
		.style("fill", "steelblue")
		.text("Feb");
