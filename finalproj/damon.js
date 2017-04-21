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
var svg = d3.select("#damonchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"The Great Wall",year:2016,rating:35,box_office:45157105},
        {movie:"Jason Bourne",year:2016,rating:56,box_office:162434410},
        {movie:"The Martian",year:2015,rating:92,box_office:228433663},
        {movie:"Interstellar",year:2014,rating:71,box_office:188020017},
        {movie:"The Monuments Men",year:2014,rating:30,box_office:78031620},
        {movie:"The Zero Theorem",year:2013,rating:51,box_office:257706},
        {movie:"Elysium",year:2013,rating:67,box_office:93050117},
        {movie:"Promised Land",year:2012,rating:51,box_office:7597898},
        {movie:"We Bought a Zoo",year:2011,rating:66,box_office:75624550},
        {movie:"Happy Feet 2",year:2011,rating:46,box_office:64006466},
        {movie:"Margaret",year:2011,rating:74,box_office:46495},
        {movie:"Contagion",year:2011,rating:84,box_office:75658097},
        {movie:"The Adjustment Bureau",year:2011,rating:72,box_office:62495645},
        {movie:"True Grit",year:2010,rating:96,box_office:171243005},
        {movie:"Hereafter",year:2010,rating:46,box_office:32746941},
        {movie:"Green Zone",year:2010,rating:53,box_office:35053660},
        {movie:"Invictus",year:2009,rating:76,box_office:37491364},
        {movie:"The Informant!",year:2009,rating:79,box_office:33316821},
        {movie:"Ponyo",year:2008,rating:92,box_office:15090399},
        {movie:"The Bourne Ultimatum",year:2007,rating:93,box_office:227471070},
        {movie:"Ocean's Thirteen",year:2007,rating:70,box_office:117154724},
        {movie:"The Good Shepherd",year:2006,rating:54,box_office:59952835},
        {movie:"The Departed",year:2006,rating:91,box_office:132384315},
        {movie:"Syriana",year:2005,rating:72,box_office:50824620},
        {movie:"The Brothers Grimm",year:2005,rating:38,box_office:37916267},
        {movie:"Ocean's Twelve",year:2004,rating:56,box_office:125544280},
        {movie:"The Bourne Supremacy",year:2004,rating:81,box_office:176241941},
        {movie:"Jersey Girl",year:2004,rating:41,box_office:25268157},
        {movie:"EuroTrip",year:2004,rating:46,box_office:17771387},
        {movie:"Stuck on You",year:2003,rating:61,box_office:33832741},
        {movie:"Confessions of a Dangerous Mind",year:2002,rating:79,box_office:16007718},
        {movie:"The Bourne Identity",year:2002,rating:83,box_office:121661683},
        {movie:"Spirit: Stallion of the Cimarron",year:2002,rating:69,box_office:73280117},
        {movie:"Gerry",year:2002,rating:61,box_office:254683},
        {movie:"The Majestic",year:2001,rating:42,box_office:27807266},
        {movie:"Ocean's Eleven",year:2001,rating:82,box_office:183417150},
        {movie:"Jay and Silent Bob Strike Back",year:2001,rating:53,box_office:30085147},
        {movie:"All the Pretty Horses",year:2000,rating:32,box_office:15540353},
        {movie:"Finding Forrester",year:2000,rating:74,box_office:51804714},
        {movie:"The Legend of Bagger Vance",year:2000,rating:43,box_office:30919168},
        {movie:"Titan A.E. ",year:2000,rating:51,box_office:22753426},
        {movie:"The Talented Mr. Ripley",year:1999,rating:83,box_office:81298265},
        {movie:"Dogma",year:1999,rating:67,box_office:30652890},
        {movie:"Rounders",year:1998,rating:65,box_office:22912409},
        {movie:"Saving Private Ryan",year:1998,rating:92,box_office:216540909},
        {movie:"Good Will Hunting",year:1997,rating:97,box_office:138433435},
        {movie:"The Rainmaker",year:1997,rating:82,box_office:45916769},
        {movie:"Chasing Amy",year:1997,rating:88,box_office:12021272},
        {movie:"Courage Under Fire",year:1996,rating:85,box_office:59031057},
        {movie:"Geronimo: An American Legend",year:1993,rating:53,box_office:18635620},
        {movie:"School Ties",year:1992,rating:68,box_office:14715067},
        {movie:"Mystic Pizza",year:1988,rating:77,box_office:12793213}
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