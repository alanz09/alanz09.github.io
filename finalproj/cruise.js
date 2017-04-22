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
var svg = d3.select("#cruisechart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Jack Reacher: Never Go Back",year:2016,rating:37,box_office:58697076},
        {movie:"Mission: Impossible - Rogue Nation",year:2015,rating:93,box_office:195042377},
        {movie:"Edge of Tomorrow",year:2014,rating:91,box_office:100206256},
        {movie:"Oblivion",year:2013,rating:53,box_office:89107235},
        {movie:"Jack Reacher",year:2012,rating:62,box_office:80070736},
        {movie:"Rock of Ages",year:2012,rating:41,box_office:38518613},
        {movie:"Mission: Impossible - Ghost Protocol",year:2011,rating:94,box_office:209397903},
        {movie:"Knight and Day",year:2010,rating:52,box_office:76423035},
        {movie:"Valkyrie",year:2008,rating:62,box_office:83077833},
        {movie:"Tropic Thunder",year:2008,rating:82,box_office:110515313},
        {movie:"Lions for Lambs",year:2007,rating:27,box_office:15002854},
        {movie:"Mission: Impossible III",year:2006,rating:70,box_office:134029801},
        {movie:"War of the Worlds",year:2005,rating:74,box_office:234280354},
        {movie:"Collateral",year:2004,rating:86,box_office:101005703},
        {movie:"The Last Samurai",year:2003,rating:66,box_office:111127263},
        {movie:"Austin Powers in Goldmember",year:2002,rating:54,box_office:213307889},
        {movie:"Minority Report",year:2002,rating:90,box_office:132072926},
        {movie:"Vanilla Sky",year:2001,rating:42,box_office:100618344},
        {movie:"Mission: Impossible II",year:2000,rating:57,box_office:215409889},
        {movie:"Magnolia",year:1999,rating:84,box_office:22455976},
        {movie:"Eyes Wide Shut",year:1999,rating:74,box_office:55691208},
        {movie:"Jerry Maguire",year:1996,rating:82,box_office:153952592},
        {movie:"Mission: Impossible",year:1996,rating:63,box_office:180981856},
        {movie:"Interview with the Vampire: The Vampire Chronicles",year:1994,rating:61,box_office:105264608},
        {movie:"The Firm",year:1993,rating:75,box_office:158348367},
        {movie:"A Few Good Men",year:1992,rating:81,box_office:141340178},
        {movie:"Far and Away",year:1992,rating:50,box_office:58883840},
        {movie:"Days of Thunder",year:1990,rating:39,box_office:82670733},
        {movie:"Born on the Fourth of July",year:1989,rating:90,box_office:70001698},
        {movie:"Rain Man",year:1988,rating:90,box_office:172825435},
        {movie:"Cocktail",year:1988,rating:5,box_office:78222753},
        {movie:"The Color of Money",year:1986,rating:89,box_office:52293982},
        {movie:"Top Gun",year:1986,rating:55,box_office:179800601},
        {movie:"Legend",year:1985,rating:48,box_office:15502112},
        {movie:"All the Right Moves",year:1983,rating:53,box_office:17233166},
        {movie:"Risky Business",year:1983,rating:96,box_office:63541777},
        {movie:"Losin' It",year:1983,rating:22,box_office:1246141},
        {movie:"The Outsiders",year:1983,rating:65,box_office:25697647},
        {movie:"Taps",year:1981,rating:75,box_office:35856053},
        {movie:"Endless Love",year:1981,rating:25,box_office:31184024}
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