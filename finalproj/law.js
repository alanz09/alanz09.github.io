// Set the dimensions of the canvas / graph
var margin = {top: 45, right: 40, bottom: 50, left: 70},
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
var svg = d3.select("#lawchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Genius",year:2016,rating:51,box_office:1361045},
      {movie:"Spy",year:2015,rating:94,box_office:110825712},
      {movie:"Black Sea",year:2014,rating:80,box_office:1171559},
      {movie:"The Grand Budapest Hotel",year:2014,rating:92,box_office:59301324},
      {movie:"Dom Hemingway",year:2013,rating:58,box_office:523511},
      {movie:"Side Effects",year:2013,rating:83,box_office:32172757},
      {movie:"Rise of the Guardians",year:2012,rating:73,box_office:103412758},
      {movie:"Anna Karenina",year:2012,rating:63,box_office:12816367},
      {movie:"Sherlock Holmes: A Game of Shadows",year:2011,rating:60,box_office:186848418},
      {movie:"Hugo",year:2011,rating:94,box_office:73864507},
      {movie:"360",year:2011,rating:20,box_office:100343},
      {movie:"Contagion",year:2011,rating:84,box_office:75658097},
      {movie:"Repo Men",year:2010,rating:22,box_office:13794835},
      {movie:"Sherlock Holmes ",year:2009,rating:70,box_office:209028679},
      {movie:"The Imaginarium of Doctor Parnassus",year:2009,rating:64,box_office:7689607},
      {movie:"Sleuth",year:2007,rating:36,box_office:342895},
      {movie:"My Blueberry Nights",year:2007,rating:47,box_office:867275},
      {movie:"The Holiday",year:2006,rating:47,box_office:63224849},
      {movie:"Breaking and Entering",year:2006,rating:34,box_office:930469},
      {movie:"All the King's Men",year:2006,rating:11,box_office:7221458},
      {movie:"A Series of Unfortunate Events",year:2004,rating:72,box_office:118634549},
      {movie:"The Aviator",year:2004,rating:87,box_office:102610330},
      {movie:"Closer",year:2004,rating:68,box_office:33987757},
      {movie:"Alfie",year:2004,rating:49,box_office:13399812},
      {movie:"Sky Captain and the World of Tomorrow",year:2004,rating:72,box_office:37762677},
      {movie:"I Heart Huckabees",year:2004,rating:62,box_office:12785432},
      {movie:"Cold Mountain",year:2003,rating:71,box_office:95636509},
      {movie:"Road to Perdition",year:2002,rating:81,box_office:104454762},
      {movie:"A.I. Artificial Intelligence",year:2001,rating:73,box_office:78616689},
      {movie:"Enemy at the Gates",year:2001,rating:54,box_office:51401758},
      {movie:"Love, Honor and Obey",year:2000,rating:27,box_office:1400},
      {movie:"The Talented Mr. Ripley",year:1999,rating:83,box_office:81298265},
      {movie:"eXistenZ",year:1999,rating:71,box_office:2856712},
      {movie:"Music from Another Room",year:1998,rating:33,box_office:118475},
      {movie:"Midnight in the Garden of Good and Evil",year:1997,rating:48,box_office:25105255},
      {movie:"Gattaca",year:1997,rating:82,box_office:12532777},
      {movie:"Wilde",year:1997,rating:71,box_office:2158775},
      {movie:"Bent",year:1997,rating:67,box_office:496059},
      {movie:"I Love You, I Love You Not",year:1996,rating:40,box_office:20677}
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

    d3.select("#lawchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 325)
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