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
var svg = d3.select("#clooneychart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Money Monster",year:2016,rating:57,box_office:41012075},
      {movie:"Hail, Caesar!",year:2016,rating:86,box_office:30498085},
      {movie:"Tomorrowland",year:2015,rating:49,box_office:93436322},
      {movie:"The Monuments Men ",year:2014,rating:30,box_office:78031620},
      {movie:"Gravity ",year:2013,rating:96,box_office:274092705},
      {movie:"The Descendants",year:2011,rating:89,box_office:82584160},
      {movie:"The Ides of March",year:2011,rating:84,box_office:40962534},
      {movie:"The American",year:2010,rating:66,box_office:35606376},
      {movie:"Fantastic Mr. Fox",year:2009,rating:92,box_office:21002919},
      {movie:"The Men Who Stare at Goats",year:2009,rating:52,box_office:32428195},
      {movie:"Up in the Air",year:2009,rating:91,box_office:83823381},
      {movie:"Burn After Reading",year:2008,rating:78,box_office:60355347},
      {movie:"Leatherheads",year:2008,rating:53,box_office:31373938},
      {movie:"Michael Clayton",year:2007,rating:90,box_office:49033882},
      {movie:"Ocean's Thirteen",year:2007,rating:70,box_office:117154724},
      {movie:"The Good German",year:2006,rating:32,box_office:1308696},
      {movie:"Syriana",year:2005,rating:72,box_office:50824620},
      {movie:"Good Night, and Good Luck.",year:2005,rating:93,box_office:31558003},
      {movie:"Ocean's Twelve",year:2004,rating:56,box_office:125544280},
      {movie:"Intolerable Cruelty",year:2003,rating:75,box_office:35327628},
      {movie:"Spy Kids 3-D: Game Over",year:2003,rating:45,box_office:111761982},
      {movie:"Confessions of a Dangerous Mind",year:2002,rating:79,box_office:16007718},
      {movie:"Solaris",year:2002,rating:66,box_office:14973382},
      {movie:"Welcome to Collinwood",year:2002,rating:54,box_office:336620},
      {movie:"Ocean's Eleven",year:2001,rating:82,box_office:183417150},
      {movie:"Spy Kids",year:2001,rating:93,box_office:112719001},
      {movie:"The Perfect Storm",year:2000,rating:47,box_office:182618434},
      {movie:"O Brother, Where Art Thou?",year:2000,rating:77,box_office:45512588},
      {movie:"Three Kings",year:1999,rating:94,box_office:60652036},
      {movie:"South Park: Bigger, Longer & Uncut",year:1999,rating:81,box_office:52037603},
      {movie:"The Thin Red Line",year:1998,rating:78,box_office:36400491},
      {movie:"Out of Sight",year:1998,rating:93,box_office:37562568},
      {movie:"The Peacemaker",year:1997,rating:41,box_office:41263140},
      {movie:"Batman & Robin",year:1997,rating:11,box_office:107325195},
      {movie:"One Fine Day",year:1996,rating:47,box_office:46151454},
      {movie:"From Dusk Till Dawn",year:1996,rating:64,box_office:25836616}
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

    d3.select("#clooneychart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 395)
    .attr("y",10);

    d3.select("#clooneychart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 85)
    .attr("y",10);

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