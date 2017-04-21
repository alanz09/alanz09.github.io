// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 40, bottom: 50, left: 70},
    width = 800 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%Y").parse;

// Set the ranges
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
  var r = d3.scale.sqrt()
      .domain([0, 200000000])
      .range([0, 20]);

// Define the axes
var xAxis = d3.svg.axis()
  .scale(x)
    .orient("bottom")
    .ticks(10)
    .tickFormat(d3.format("d"));
var yAxis = d3.svg.axis()
  .scale(y)
    .orient("left")
    .ticks(5)
    .innerTickSize(-width)
    .tickPadding(12);

// Define the line
var valueline = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.rating); })
    .interpolate('cardinal');
    
// Adds the svg canvas
var svg = d3.select("#tatumchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"The LEGO Batman Movie",year:2017,rating:90,box_office:173939726},
      {movie:"Hail, Caesar!",year:2016,rating:86,box_office:30498085},
      {movie:"The Hateful Eight",year:2015,rating:75,box_office:54117416},
      {movie:"Magic Mike XXL",year:2015,rating:63,box_office:66013057},
      {movie:"Jupiter Ascending",year:2015,rating:26,box_office:47387723},
      {movie:"The Book of Life",year:2014,rating:82,box_office:50151543},
      {movie:"22 Jump Street",year:2014,rating:84,box_office:191719337},
      {movie:"Foxcatcher",year:2014,rating:88,box_office:12096300},
      {movie:"The Lego Movie",year:2014,rating:96,box_office:257760692},
      {movie:"White House Down",year:2013,rating:50,box_office:73103784},
      {movie:"This Is the End",year:2013,rating:83,box_office:101470202},
      {movie:"G.I. Joe: Retaliation",year:2013,rating:29,box_office:122523060},
      {movie:"Side Effects",year:2013,rating:83,box_office:32172757},
      {movie:"Don Jon",year:2013,rating:81,box_office:24477704},
      {movie:"Magic Mike",year:2012,rating:81,box_office:113721571},
      {movie:"21 Jump Street",year:2012,rating:85,box_office:138447667},
      {movie:"The Vow",year:2012,rating:29,box_office:125014030},
      {movie:"Haywire",year:2011,rating:80,box_office:18942396},
      {movie:"10 Years",year:2011,rating:60,box_office:203373},
      {movie:"The Eagle",year:2011,rating:39,box_office:19490041},
      {movie:"The Son of No One",year:2011,rating:16,box_office:30680},
      {movie:"The Dilemma",year:2011,rating:24,box_office:48475290},
      {movie:"Dear John",year:2010,rating:29,box_office:80014842},
      {movie:"G.I. Joe: The Rise of Cobra",year:2009,rating:35,box_office:150201498},
      {movie:"Public Enemies",year:2009,rating:68,box_office:97104620},
      {movie:"Fighting",year:2009,rating:39,box_office:23091010},
      {movie:"Stop-Loss",year:2008,rating:64,box_office:10915744},
      {movie:"Step Up 2: The Streets",year:2008,rating:27,box_office:58017783},
      {movie:"Battle in Seattle",year:2007,rating:55,box_office:224169},
      {movie:"Step Up",year:2006,rating:19,box_office:65328121},
      {movie:"She's the Man",year:2006,rating:43,box_office:33741133},
      {movie:"A Guide to Recognizing Your Saints",year:2006,rating:76,box_office:517809},
      {movie:"Supercross",year:2005,rating:5,box_office:3102550},
      {movie:"Coach Carter",year:2005,rating:65,box_office:67264877}
      ];

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.year; }));
    y.domain([0, d3.max(data, function(d) { return Math.max(d.rating); })]);

    // Add valueline path -- line 
    /*svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));*/

  // Define the div for the tooltip
  var div = d3.select("body").append("div") // TOOLTIP STUFF 
      .attr("class", "tooltip")       
      .style("opacity", 0);

  // Add dots
    svg.selectAll("dot") // For Feb
        .data(data)
    .enter().append("circle")
        /* .attr("r", 4) */
        .attr("stroke", "steelblue")
        .attr("fill", "steelblue")
        .attr("opacity", 0.7)
        .attr("cx", function(d) { return x(d.year); })
        .attr("cy", function(d) { return y(d.rating); })
        .attr("r", function(d){ return r(d.box_office); })
      /*  .attr("r", function(d) { return d["box_office"] == 0 ? 0 : d["box_office"]}) */
        .on("mousemove", function(d) { // TOOLTIP STUFF 
          div.transition()
            .duration(200)
            .style("opacity", .9);
          div.html("<strong>Year: </strong>" + d.year + "<br>" + 
              "<strong>Movie: </strong>" + d.movie + "<br>" +
              "<strong>Rating: </strong>" + d.rating + "%")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
          d3.select(this)
           /* .attr("r", 6) */
            .style("fill", "yellow");
          })
        .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            /* .attr("r", 4) */
            .style("fill", "steelblue");
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
      .attr("x", -20)
      .attr("dy", ".61em")
      .style("text-anchor", "end")
      .style("font-size", "11px")
      .text("Rotten Tomatoes Rating (%)");
    svg.append("g") // Year on X axis
      .attr("class", "x axis")
      .append("text")
      .attr("transform", "translate(0," + height + ")")
      .attr("y", 40)
      .attr("x", 370)
      .style("text-anchor", "end")
      .style("font-size", "11px")
      .text("Year");

    svg.append("text") // "March" to end of line
    .attr("transform", "translate(" + (width+3) + "," + y(data[0].open) + ")")
    .attr("dy", "3.3em")
    .attr("dx", "77.5em")
    .attr("text-anchor", "end")
    .style("fill", "green")
    .text("March");

  // Dynamic text?
  /* var vertical = d3.select("body")
        .append("div")
        .attr("class", "remove")
        .style("position", "absolute")
        .style("z-index", "19")
        .style("width", "1px")
        .style("height", "480px")
        .style("top", "30px")
        .style("left", "0px")
        .style("background", "#000000");
  d3.select("body")
      .on("mousemove", function(){  
         mousex = d3.mouse(this);
         mousex = mousex[0] + 5;
         vertical.style("left", mousex + "px" )})
      .on("mouseover", function(){  
         mousex = d3.mouse(this);
         mousex = mousex[0] + 5;
         vertical.style("left", mousex + "px")}); 
        http://bl.ocks.org/WillTurman/4631136*/
      
//});