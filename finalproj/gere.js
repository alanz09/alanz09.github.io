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
var svg = d3.select("#gerechart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"The Second Best Exotic Marigold Hotel",year:2015,rating:63,box_office:33078266},
        {movie:"Time Out of Mind",year:2014,rating:79,box_office:166775},
        {movie:"Movie 43",year:2013,rating:4,box_office:8840453},
        {movie:"Arbitrage",year:2012,rating:87,box_office:7919574},
        {movie:"The Double",year:2011,rating:20,box_office:137921},
        {movie:"Amelia",year:2009,rating:20,box_office:14245415},
        {movie:"Brooklyn's Finest",year:2009,rating:43,box_office:27163593},
        {movie:"Nights in Rodanthe",year:2008,rating:30,box_office:41850659},
        {movie:"I'm Not There.",year:2007,rating:76,box_office:4017609},
        {movie:"The Hunting Party",year:2007,rating:53,box_office:969869},
        {movie:"The Hoax",year:2006,rating:85,box_office:7164995},
        {movie:"Bee Season",year:2005,rating:43,box_office:1180560},
        {movie:"Shall We Dance",year:2004,rating:46,box_office:57890460},
        {movie:"Chicago",year:2002,rating:86,box_office:170687518},
        {movie:"Unfaithful",year:2002,rating:49,box_office:52775765},
        {movie:"The Mothman Prophecies",year:2002,rating:52,box_office:35746370},
        {movie:"Dr. T & the Women",year:2000,rating:57,box_office:13113041},
        {movie:"Autumn in New York",year:2000,rating:20,box_office:37761915},
        {movie:"Runaway Bride",year:1999,rating:46,box_office:152257509},
        {movie:"The Jackal",year:1997,rating:15,box_office:54930280},
        {movie:"Red Corner",year:1997,rating:32,box_office:22459274},
        {movie:"Primal Fear",year:1996,rating:74,box_office:56116183},
        {movie:"First Knight",year:1995,rating:47,box_office:37600435},
        {movie:"Intersection",year:1994,rating:7,box_office:21355893},
        {movie:"Mr. Jones",year:1993,rating:46,box_office:8345845},
        {movie:"Sommersby",year:1993,rating:63,box_office:50081992},
        {movie:"Final Analysis",year:1992,rating:54,box_office:28590665},
        {movie:"Rhapsody in August",year:1991,rating:57,box_office:516431},
        {movie:"Pretty Woman",year:1990,rating:61,box_office:178406268},
        {movie:"Internal Affairs",year:1990,rating:88,box_office:27734391},
        {movie:"No Mercy",year:1986,rating:21,box_office:12303904},
        {movie:"Power",year:1986,rating:55,box_office:3800000},
        {movie:"King David",year:1985,rating:8,box_office:5111099},
        {movie:"The Cotton Club",year:1984,rating:75,box_office:25928721},
        {movie:"Breathless",year:1983,rating:67,box_office:19910002},
        {movie:"An Officer and a Gentleman",year:1982,rating:81,box_office:129795554},
        {movie:"American Gigolo",year:1980,rating:67,box_office:22743674},
        {movie:"Yanks",year:1979,rating:71,box_office:3931010},
        {movie:"Days of Heaven",year:1978,rating:94,box_office:3446749},
        {movie:"Looking for Mr. Goodbar",year:1977,rating:76,box_office:22512655}
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