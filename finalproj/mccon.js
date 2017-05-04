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
var svg = d3.select("#mcconchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Gold",year:2016,rating:42,box_office:7227038},
        {movie:"Sing",year:2016,rating:73,box_office:270247365},
        {movie:"Kubo and the Two Strings",year:2016,rating:97,box_office:48023088},
        {movie:"Free State of Jones",year:2016,rating:47,box_office:20810036},
        {movie:"The Sea of Trees",year:2015,rating:12,box_office:20444},
        {movie:"Interstellar",year:2014,rating:71,box_office:188020017},
        {movie:"The Wolf of Wall Street",year:2013,rating:77,box_office:116900694},
        {movie:"Dallas Buyers Club",year:2013,rating:94,box_office:27298285},
        {movie:"Magic Mike",year:2012,rating:81,box_office:113721571},
        {movie:"Mud",year:2012,rating:98,box_office:21590086},
        {movie:"The Paperboy",year:2012,rating:43,box_office:693286},
        {movie:"Killer Joe",year:2011,rating:78,box_office:1987762},
        {movie:"Bernie",year:2011,rating:89,box_office:9206470},
        {movie:"The Lincoln Lawyer",year:2011,rating:83,box_office:58009200},
        {movie:"Ghosts of Girlfriends Past",year:2009,rating:27,box_office:55250026},
        {movie:"Surfer, Dude",year:2008,rating:0,box_office:52132},
        {movie:"Tropic Thunder",year:2008,rating:82,box_office:110515313},
        {movie:"Fool's Gold",year:2008,rating:11,box_office:70231041},
        {movie:"We Are Marshall",year:2006,rating:49,box_office:43545364},
        {movie:"Failure to Launch",year:2006,rating:24,box_office:88715192},
        {movie:"Two for the Money",year:2005,rating:22,box_office:22991379},
        {movie:"Sahara",year:2005,rating:39,box_office:68671925},
        {movie:"Paparazzi",year:2004,rating:18,box_office:15714234},
        {movie:"How to Lose a Guy in 10 Days",year:2003,rating:42,box_office:105813373},
        {movie:"Reign of Fire",year:2002,rating:40,box_office:43061982},
        {movie:"Frailty",year:2001,rating:73,box_office:13110448},
        {movie:"Thirteen Conversations About One Thing",year:2001,rating:83,box_office:3288164},
        {movie:"The Wedding Planner",year:2001,rating:16,box_office:60400856},
        {movie:"U-571",year:2000,rating:68,box_office:77122415},
        {movie:"Edtv",year:1999,rating:63,box_office:22431897},
        {movie:"The Newton Boys",year:1998,rating:62,box_office:10452012},
        {movie:"Amistad",year:1997,rating:76,box_office:44229441},
        {movie:"Contact",year:1997,rating:62,box_office:100920329},
        {movie:"Larger Than Life",year:1996,rating:11,box_office:8315693},
        {movie:"A Time to Kill",year:1996,rating:67,box_office:108766007},
        {movie:"Lone Star",year:1996,rating:93,box_office:12408986},
        {movie:"Boys on the Side",year:1995,rating:73,box_office:23440188},
        {movie:"Texas Chainsaw Massacre: The Next Generation",year:1994,rating:16,box_office:185898},
        {movie:"Angels in the Outfield",year:1994,rating:35,box_office:50236831},
        {movie:"Dazed and Confused",year:1993,rating:94,box_office:7993039}
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

    d3.select("#mcconchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 410)
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