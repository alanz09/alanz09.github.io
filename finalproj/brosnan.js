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
var svg = d3.select("#brosnanchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"No Escape",year:2015,rating:45,box_office:27288872},
      {movie:"The November Man",year:2014,rating:34,box_office:25018119},
      {movie:"A Long Way Down",year:2014,rating:22,box_office:13347},
      {movie:"The Love Punch",year:2013,rating:27,box_office:266588},
      {movie:"Love Is All You Need",year:2012,rating:74,box_office:1631709},
      {movie:"I Don't Know How She Does It",year:2011,rating:17,box_office:9662284},
      {movie:"Salvation Boulevard",year:2011,rating:21,box_office:28468},
      {movie:"Remember Me",year:2010,rating:27,box_office:19068240},
      {movie:"The Ghost Writer",year:2010,rating:83,box_office:15541549},
      {movie:"Percy Jackson & the Olympians: The Lightning Thief ",year:2010,rating:49,box_office:88768303},
      {movie:"The Greatest",year:2009,rating:53,box_office:114766},
      {movie:"Mamma Mia! ",year:2008,rating:54,box_office:144130063},
      {movie:"Married Life",year:2007,rating:55,box_office:1507990},
      {movie:"Seraphim Falls",year:2006,rating:54,box_office:418296},
      {movie:"The Matador",year:2005,rating:74,box_office:12594698},
      {movie:"After the Sunset",year:2004,rating:18,box_office:28331233},
      {movie:"Laws of Attraction",year:2004,rating:17,box_office:17871255},
      {movie:"Die Another Day",year:2002,rating:58,box_office:160942139},
      {movie:"Evelyn",year:2002,rating:64,box_office:1487645},
      {movie:"The Tailor of Panama",year:2001,rating:77,box_office:13729742},
      {movie:"The World Is Not Enough",year:1999,rating:51,box_office:126943684},
      {movie:"Grey Owl",year:1999,rating:18,box_office:632617},
      {movie:"The Thomas Crown Affair",year:1999,rating:70,box_office:69305181},
      {movie:"The Magic Sword: Quest for Camelot",year:1998,rating:36,box_office:22510798},
      {movie:"Tomorrow Never Dies",year:1997,rating:57,box_office:125304276},
      {movie:"Dante's Peak",year:1997,rating:27,box_office:67127760},
      {movie:"Mars Attacks!",year:1996,rating:52,box_office:37771017},
      {movie:"The Mirror Has Two Faces",year:1996,rating:53,box_office:41083864},
      {movie:"GoldenEye",year:1995,rating:78,box_office:106429941},
      {movie:"Love Affair",year:1994,rating:31,box_office:18272894},
      {movie:"Mrs. Doubtfire",year:1993,rating:71,box_office:219195243},
      {movie:"The Lawnmower Man",year:1992,rating:38,box_office:32100816},
      {movie:"Mister Johnson",year:1990,rating:82,box_office:1464242},
      {movie:"The Deceivers",year:1988,rating:20,box_office:346297},
      {movie:"The Fourth Protocol",year:1987,rating:71,box_office:12423831},
      {movie:"Nomads",year:1986,rating:13,box_office:2278264},
      {movie:"The Mirror Crack'd",year:1980,rating:67,box_office:11000000}
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