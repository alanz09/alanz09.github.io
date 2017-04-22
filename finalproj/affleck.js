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
var svg = d3.select("#affleckchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Live by Night",year:2016,rating:34,box_office:10378555},
        {movie:"The Accountant",year:2016,rating:52,box_office:86260045},
        {movie:"Batman v Superman: Dawn of Justice",year:2016,rating:27,box_office:330360194},
        {movie:"Gone Girl",year:2014,rating:88,box_office:167767189},
        {movie:"Runner Runner",year:2013,rating:8,box_office:19316646},
        {movie:"To the Wonder",year:2012,rating:46,box_office:587615},
        {movie:"Argo",year:2012,rating:96,box_office:136025503},
        {movie:"The Town",year:2010,rating:94,box_office:92186262},
        {movie:"The Company Men",year:2010,rating:67,box_office:4441272},
        {movie:"Extract",year:2009,rating:63,box_office:10823158},
        {movie:"State of Play",year:2009,rating:84,box_office:37017955},
        {movie:"He's Just Not That Into You",year:2009,rating:40,box_office:93953653},
        {movie:"Smokin' Aces",year:2006,rating:29,box_office:35787686},
        {movie:"Hollywoodland",year:2006,rating:68,box_office:14426251},
        {movie:"Clerks II",year:2006,rating:63,box_office:24148068},
        {movie:"Surviving Christmas",year:2004,rating:7,box_office:11663156},
        {movie:"Jersey Girl",year:2004,rating:41,box_office:25268157},
        {movie:"Paycheck",year:2003,rating:27,box_office:53790451},
        {movie:"Gigli",year:2003,rating:6,box_office:6087542},
        {movie:"Daredevil",year:2003,rating:44,box_office:102543518},
        {movie:"The Sum of All Fears",year:2002,rating:59,box_office:118907036},
        {movie:"Changing Lanes",year:2002,rating:77,box_office:66818548},
        {movie:"Jay and Silent Bob Strike Back",year:2001,rating:53,box_office:30085147},
        {movie:"Pearl Harbor",year:2001,rating:25,box_office:198542554},
        {movie:"Bounce",year:2000,rating:52,box_office:36805288},
        {movie:"Reindeer Games",year:2000,rating:25,box_office:23368995},
        {movie:"Boiler Room",year:2000,rating:67,box_office:16970581},
        {movie:"Dogma",year:1999,rating:67,box_office:30652890},
        {movie:"Forces of Nature",year:1999,rating:45,box_office:52888180},
        {movie:"200 Cigarettes",year:1999,rating:28,box_office:6852450},
        {movie:"Shakespeare in Love",year:1998,rating:92,box_office:100317794},
        {movie:"Armageddon",year:1998,rating:39,box_office:201578182},
        {movie:"Phantoms",year:1998,rating:13,box_office:5624282},
        {movie:"Good Will Hunting",year:1997,rating:97,box_office:138433435},
        {movie:"Chasing Amy",year:1997,rating:88,box_office:12021272},
        {movie:"Going All the Way",year:1997,rating:71,box_office:113069},
        {movie:"Mallrats",year:1995,rating:55,box_office:2122561},
        {movie:"Dazed and Confused",year:1993,rating:94,box_office:7993039},
        {movie:"School Ties",year:1992,rating:68,box_office:14715067},
        {movie:"Buffy the Vampire Slayer",year:1992,rating:35,box_office:16624456}
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