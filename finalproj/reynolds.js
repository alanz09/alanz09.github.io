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
var svg = d3.select("#reynoldschart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Life",year:2017,rating:67,box_office:28813586},
        {movie:"Criminal",year:2016,rating:30,box_office:14708696},
        {movie:"Deadpool",year:2016,rating:84,box_office:363070709},
        {movie:"Self/less",year:2015,rating:19,box_office:12279691},
        {movie:"Woman in Gold",year:2015,rating:54,box_office:33307793},
        {movie:"Mississippi Grind",year:2015,rating:89,box_office:130541},
        {movie:"The Captive",year:2014,rating:29,box_office:1075178},
        {movie:"R.I.P.D.",year:2013,rating:13,box_office:33618855},
        {movie:"Turbo",year:2013,rating:67,box_office:83028128},
        {movie:"The Croods",year:2013,rating:70,box_office:187168425},
        {movie:"Safe House",year:2012,rating:53,box_office:126373434},
        {movie:"The Change-Up",year:2011,rating:25,box_office:37081475},
        {movie:"Green Lantern",year:2011,rating:26,box_office:116601172},
        {movie:"Buried",year:2010,rating:87,box_office:1044143},
        {movie:"Paper Man",year:2009,rating:32,box_office:13514},
        {movie:"The Proposal ",year:2009,rating:44,box_office:163958031},
        {movie:"X-Men Origins: Wolverine",year:2009,rating:38,box_office:179883157},
        {movie:"Adventureland",year:2009,rating:89,box_office:16044025},
        {movie:"Chaos Theory",year:2008,rating:30,box_office:240476},
        {movie:"Fireflies in the Garden",year:2011,rating:20,box_office:70600},
        {movie:"Definitely, Maybe",year:2008,rating:71,box_office:32241649},
        {movie:"The Nines",year:2007,rating:65,box_office:63165},
        {movie:"Smokin' Aces",year:2006,rating:29,box_office:35787686},
        {movie:"Just Friends",year:2005,rating:42,box_office:32619671},
        {movie:"Waiting…",year:2005,rating:31,box_office:16124543},
        {movie:"The Amityville Horror",year:2005,rating:23,box_office:65233369},
        {movie:"Blade: Trinity ",year:2004,rating:25,box_office:52411906},
        {movie:"Harold & Kumar Go to White Castle",year:2004,rating:74,box_office:18250550},
        {movie:"The In-Laws",year:2003,rating:34,box_office:20453431},
        {movie:"Van Wilder: Party Liaison",year:2002,rating:19,box_office:21305259},
        {movie:"Dick",year:1999,rating:70,box_office:6262878},
        {movie:"Coming Soon",year:1999,rating:29,box_office:5453},
        {movie:"Life During Wartime",year:1997,rating:56,box_office:281447}
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
    
    d3.select("#reynoldschart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 500)
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