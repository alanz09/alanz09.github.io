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
var svg = d3.select("#pittchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Allied",year:2016,rating:61,box_office:40098064},
      {movie:"The Big Short",year:2015,rating:88,box_office:70259870},
      {movie:"By the Sea",year:2015,rating:33,box_office:538460},
      {movie:"Fury",year:2014,rating:77,box_office:85817906},
      {movie:"The Counsellor",year:2013,rating:35,box_office:16973715},
      {movie:"12 Years a Slave",year:2013,rating:96,box_office:56671993},
      {movie:"World War Z",year:2013,rating:67,box_office:202359711},
      {movie:"Killing Them Softly",year:2012,rating:74,box_office:15026056},
      {movie:"Happy Feet 2",year:2011,rating:46,box_office:64006466},
      {movie:"Moneyball",year:2011,rating:94,box_office:75605492},
      {movie:"The Tree of Life",year:2011,rating:84,box_office:13303319},
      {movie:"Megamind",year:2010,rating:73,box_office:148415853},
      {movie:"Inglourious Basterds",year:2009,rating:89,box_office:120540719},
      {movie:"The Curious Case of Benjamin Button",year:2008,rating:72,box_office:127509326},
      {movie:"Burn After Reading",year:2008,rating:78,box_office:60355347},
      {movie:"The Assassination of Jesse James by the Coward Robert Ford",year:2007,rating:76,box_office:3909149},
      {movie:"Ocean's Thirteen",year:2007,rating:70,box_office:117154724},
      {movie:"Babel",year:2006,rating:69,box_office:34302837},
      {movie:"Mr. & Mrs. Smith",year:2005,rating:59,box_office:186336279},
      {movie:"Ocean's Twelve",year:2004,rating:56,box_office:125544280},
      {movie:"Troy",year:2004,rating:54,box_office:133378256},
      {movie:"Sinbad: Legend of the Seven Seas",year:2003,rating:46,box_office:26483452},
      {movie:"Confessions of a Dangerous Mind",year:2002,rating:79,box_office:16007718},
      {movie:"Full Frontal",year:2002,rating:38,box_office:2512846},
      {movie:"Ocean's Eleven",year:2001,rating:82,box_office:183417150},
      {movie:"Spy Game",year:2001,rating:66,box_office:62362560},
      {movie:"The Mexican",year:2001,rating:56,box_office:66845033},
      {movie:"Snatch",year:2000,rating:73,box_office:30328156},
      {movie:"Fight Club",year:1999,rating:79,box_office:37030102},
      {movie:"Being John Malkovich",year:1999,rating:93,box_office:22863596},
      {movie:"Meet Joe Black",year:1998,rating:51,box_office:44619100},
      {movie:"Seven Years in Tibet",year:1997,rating:61,box_office:37957682},
      {movie:"The Devil's Own",year:1997,rating:33,box_office:42868348},
      {movie:"Sleepers",year:1996,rating:74,box_office:53315285},
      {movie:"Twelve Monkeys",year:1995,rating:88,box_office:57141459},
      {movie:"Se7en",year:1995,rating:80,box_office:100125643},
      {movie:"Legends of the Fall",year:1994,rating:56,box_office:66638883},
      {movie:"Interview with the Vampire: The Vampire Chronicles",year:1994,rating:61,box_office:105264608},
      {movie:"The Favor",year:1994,rating:27,box_office:3134381},
      {movie:"True Romance",year:1993,rating:92,box_office:12281551},
      {movie:"Kalifornia",year:1993,rating:67,box_office:2395231},
      {movie:"A River Runs Through It",year:1992,rating:83,box_office:43440294},
      {movie:"Cool World",year:1992,rating:4,box_office:14110589},
      {movie:"Johnny Suede",year:1991,rating:36,box_office:90091},
      {movie:"Thelma & Louise",year:1991,rating:83,box_office:45360915}
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