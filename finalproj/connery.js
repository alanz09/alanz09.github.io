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
var svg = d3.select("#connerychart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"The League of Extraordinary Gentlemen",year:2003,rating:17,box_office:66465204},
      {movie:"Finding Forrester",year:2000,rating:74,box_office:51804714},
      {movie:"Entrapment",year:1999,rating:38,box_office:87704396},
      {movie:"Playing by Heart",year:1998,rating:60,box_office:3970078},
      {movie:"The Avengers",year:1998,rating:5,box_office:23384939},
      {movie:"The Rock",year:1996,rating:66,box_office:134069511},
      {movie:"DragonHeart",year:1996,rating:50,box_office:51367375},
      {movie:"First Knight",year:1995,rating:47,box_office:37600435},
      {movie:"Just Cause",year:1995,rating:25,box_office:36853222},
      {movie:"A Good Man in Africa",year:1994,rating:11,box_office:2308390},
      {movie:"Rising Sun",year:1993,rating:35,box_office:63179523},
      {movie:"Medicine Man",year:1992,rating:20,box_office:45500797},
      {movie:"Robin Hood: Prince of Thieves",year:1991,rating:50,box_office:165493908},
      {movie:"Highlander II: The Quickening",year:1991,rating:0,box_office:15556340},
      {movie:"The Russia House",year:1990,rating:75,box_office:22997992},
      {movie:"The Hunt for Red October",year:1990,rating:86,box_office:122012643},
      {movie:"Family Business",year:1989,rating:38,box_office:12195695},
      {movie:"Indiana Jones and the Last Crusade",year:1989,rating:88,box_office:197171806},
      {movie:"The Presidio",year:1988,rating:53,box_office:20324096},
      {movie:"The Untouchables",year:1987,rating:80,box_office:76270454},
      {movie:"The Name of the Rose",year:1986,rating:74,box_office:7153487},
      {movie:"Highlander",year:1986,rating:70,box_office:5900000},
      {movie:"Never Say Never Again",year:1983,rating:63,box_office:55432841},
      {movie:"Five Days One Summer",year:1982,rating:17,box_office:199078},
      {movie:"Wrong Is Right",year:1982,rating:38,box_office:3583513},
      {movie:"Time Bandits",year:1981,rating:91,box_office:42365581},
      {movie:"Outland",year:1981,rating:58,box_office:17374595},
      {movie:"Cuba",year:1979,rating:50,box_office:5610280},
      {movie:"Meteor",year:1979,rating:5,box_office:8400000},
      {movie:"The Great Train Robbery",year:1979,rating:78,box_office:13027857},
      {movie:"A Bridge Too Far",year:1977,rating:73,box_office:50750000},
      {movie:"Murder on the Orient Express",year:1974,rating:95,box_office:27634716},
      {movie:"Diamonds Are Forever",year:1971,rating:67,box_office:43819547},
      {movie:"You Only Live Twice",year:1967,rating:72,box_office:43084787},
      {movie:"Thunderball",year:1965,rating:86,box_office:63595658},
      {movie:"Goldfinger",year:1964,rating:95,box_office:51081062},
      {movie:"From Russia with Love",year:1963,rating:96,box_office:24796765},
      {movie:"Dr. No",year:1962,rating:96,box_office:16067035}
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