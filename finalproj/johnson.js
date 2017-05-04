// Set the dimensions of the canvas / graph
var margin = {top: 50, right: 40, bottom: 50, left: 70},
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
var svg = d3.select("#johnsonchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Moana",year:2016,rating:95,box_office:248731193},
        {movie:"Central Intelligence",year:2016,rating:69,box_office:127440871},
        {movie:"Jem and the Holograms",year:2015,rating:18,box_office:2184640},
        {movie:"San Andreas",year:2015,rating:48,box_office:155190832},
        {movie:"Furious 7 ",year:2015,rating:79,box_office:353007020},
        {movie:"Hercules",year:2014,rating:60,box_office:72688614},
        {movie:"Fast & Furious 6",year:2013,rating:69,box_office:238679850},
        {movie:"Pain & Gain",year:2013,rating:49,box_office:49875291},
        {movie:"G.I. Joe: Retaliation",year:2013,rating:29,box_office:122523060},
        {movie:"Snitch",year:2013,rating:56,box_office:42930462},
        {movie:"Journey 2: The Mysterious Island",year:2012,rating:43,box_office:103860290},
        {movie:"Fast Five",year:2011,rating:77,box_office:209837675},
        {movie:"Faster",year:2010,rating:43,box_office:23240020},
        {movie:"The Other Guys",year:2010,rating:78,box_office:119219978},
        {movie:"Tooth Fairy",year:2010,rating:18,box_office:60022256},
        {movie:"Planet 51",year:2009,rating:21,box_office:42194060},
        {movie:"Race to Witch Mountain",year:2009,rating:43,box_office:67172594},
        {movie:"Get Smart",year:2008,rating:51,box_office:130319208},
        {movie:"The Game Plan",year:2007,rating:29,box_office:90648202},
        {movie:"Gridiron Gang",year:2006,rating:42,box_office:38432823},
        {movie:"Southland Tales",year:2006,rating:36,box_office:275380},
        {movie:"Doom",year:2005,rating:19,box_office:28212337},
        {movie:"Be Cool",year:2005,rating:30,box_office:56046979},
        {movie:"Walking Tall",year:2004,rating:26,box_office:46437717},
        {movie:"The Rundown",year:2003,rating:70,box_office:47726342},
        {movie:"The Scorpion King",year:2002,rating:41,box_office:91047077},
        {movie:"The Mummy Returns",year:2001,rating:47,box_office:202019785}
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

    d3.select("#johnsonchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 730)
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