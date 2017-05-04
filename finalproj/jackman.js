// Set the dimensions of the canvas / graph
var margin = {top: 40, right: 40, bottom: 50, left: 70},
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
var svg = d3.select("#jackmanchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Logan",year:2017,rating:92,box_office:222264407},
        {movie:"Eddie the Eagle",year:2016,rating:80,box_office:15789389},
        {movie:"Pan",year:2015,rating:27,box_office:35088320},
        {movie:"Chappie",year:2015,rating:32,box_office:31569268},
        {movie:"Me and Earl and the Dying Girl",year:2015,rating:82,box_office:6758416},
        {movie:"X-Men: Days of Future Past",year:2014,rating:91,box_office:233921534},
        {movie:"Prisoners",year:2013,rating:81,box_office:61002302},
        {movie:"The Wolverine",year:2013,rating:69,box_office:132556852},
        {movie:"Movie 43",year:2013,rating:4,box_office:8840453},
        {movie:"Les Miserables",year:2012,rating:69,box_office:148809770},
        {movie:"Rise of the Guardians",year:2012,rating:73,box_office:103412758},
        {movie:"Real Steel",year:2011,rating:59,box_office:85468508},
        {movie:"Butter",year:2011,rating:33,box_office:105018},
        {movie:"Snow Flower and the Secret Fan",year:2011,rating:21,box_office:1348205},
        {movie:"X-Men: First Class",year:2011,rating:86,box_office:146408305},
        {movie:"X-Men Origins: Wolverine",year:2009,rating:38,box_office:179883157},
        {movie:"Australia",year:2008,rating:55,box_office:49554002},
        {movie:"Deception",year:2008,rating:14,box_office:4598506},
        {movie:"Happy Feet",year:2006,rating:75,box_office:198000317},
        {movie:"Flushed Away",year:2006,rating:72,box_office:64665672},
        {movie:"The Prestige",year:2006,rating:76,box_office:53089891},
        {movie:"The Fountain",year:2006,rating:51,box_office:10144010},
        {movie:"Scoop",year:2006,rating:40,box_office:10525717},
        {movie:"X-Men: The Last Stand",year:2006,rating:58,box_office:234362462},
        {movie:"Van Helsing",year:2004,rating:23,box_office:120177084},
        {movie:"X-Men 2",year:2003,rating:86,box_office:214949694},
        {movie:"Kate & Leopold",year:2001,rating:50,box_office:47121859},
        {movie:"Swordfish",year:2001,rating:26,box_office:69772969},
        {movie:"Someone Like You…",year:2001,rating:43,box_office:27343067},
        {movie:"X-Men",year:2000,rating:81,box_office:157299717}
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

    d3.select("#jackmanchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 376)
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