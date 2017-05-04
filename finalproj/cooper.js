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
var svg = d3.select("#cooperchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"War Dogs",year:2016,rating:60,box_office:43034523},
      {movie:"10 Cloverfield Lane",year:2016,rating:90,box_office:72082998},
      {movie:"Joy",year:2015,rating:60,box_office:56451232},
      {movie:"Burnt",year:2015,rating:30,box_office:13651946},
      {movie:"Aloha",year:2015,rating:19,box_office:21067116},
      {movie:"American Sniper",year:2014,rating:72,box_office:350126372},
      {movie:"Serena",year:2014,rating:17,box_office:176391},
      {movie:"Guardians of the Galaxy",year:2014,rating:91,box_office:333176600},
      {movie:"American Hustle",year:2013,rating:93,box_office:150117807},
      {movie:"The Hangover Part III",year:2013,rating:20,box_office:112200072},
      {movie:"Silver Linings Playbook",year:2012,rating:92,box_office:132092958},
      {movie:"The Place Beyond the Pines",year:2012,rating:80,box_office:21403519},
      {movie:"Hit and Run",year:2012,rating:50,box_office:13749300},
      {movie:"The Words ",year:2012,rating:24,box_office:11494838},
      {movie:"The Hangover Part II",year:2011,rating:33,box_office:254464305},
      {movie:"Limitless",year:2011,rating:70,box_office:79249455},
      {movie:"The A-Team",year:2010,rating:47,box_office:77222099},
      {movie:"Valentine's Day",year:2010,rating:18,box_office:110485654},
      {movie:"All About Steve",year:2009,rating:7,box_office:33862903},
      {movie:"Case 39",year:2009,rating:22,box_office:13261851},
      {movie:"The Hangover",year:2009,rating:79,box_office:277322503},
      {movie:"He's Just Not That Into You",year:2009,rating:40,box_office:93953653},
      {movie:"Yes Man",year:2008,rating:46,box_office:97690976},
      {movie:"New York, I Love You",year:2008,rating:36,box_office:1588015},
      {movie:"The Midnight Meat Train",year:2008,rating:72,box_office:83361},
      {movie:"The Rocker",year:2008,rating:40,box_office:6409528},
      {movie:"The Comebacks",year:2007,rating:9,box_office:13349927},
      {movie:"Failure to Launch",year:2006,rating:24,box_office:88715192},
      {movie:"Wedding Crashers",year:2005,rating:75,box_office:209255921},
      {movie:"Changing Lanes",year:2002,rating:77,box_office:66818548},
      {movie:"Wet Hot American Summer",year:2001,rating:32,box_office:295206}
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

    d3.select("#cooperchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 508)
    .attr("y",-1.5);

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