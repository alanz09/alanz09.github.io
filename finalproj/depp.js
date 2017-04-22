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
var svg = d3.select("#deppchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Fantastic Beasts and Where to Find Them",year:2016,rating:73,box_office:234037575},
      {movie:"Alice Through the Looking Glass",year:2016,rating:30,box_office:77041381},
      {movie:"Black Mass",year:2015,rating:74,box_office:62575678},
      {movie:"Mortdecai",year:2015,rating:12,box_office:7696134},
      {movie:"Into the Woods",year:2014,rating:71,box_office:128002372},
      {movie:"Tusk",year:2014,rating:41,box_office:1826705},
      {movie:"Transcendence",year:2014,rating:20,box_office:23022309},
      {movie:"For No Good Reason",year:2014,rating:63,box_office:67421},
      {movie:"Lucky Them",year:2013,rating:76,box_office:48421},
      {movie:"The Lone Ranger",year:2013,rating:31,box_office:89302115},
      {movie:"Dark Shadows",year:2012,rating:37,box_office:79727149},
      {movie:"The Rum Diary",year:2011,rating:50,box_office:13109815},
      {movie:"Pirates of the Caribbean: On Stranger Tides",year:2011,rating:32,box_office:241071802},
      {movie:"Rango",year:2011,rating:87,box_office:123477607},
      {movie:"The Tourist",year:2010,rating:20,box_office:67631157},
      {movie:"Alice in Wonderland",year:2010,rating:52,box_office:334191110},
      {movie:"Public Enemies",year:2009,rating:68,box_office:97104620},
      {movie:"The Imaginarium of Doctor Parnassus",year:2009,rating:64,box_office:7689607},
      {movie:"Sweeney Todd: The Demon Barber of Fleet Street",year:2007,rating:86,box_office:52898073},
      {movie:"Pirates of the Caribbean: At World's End",year:2007,rating:45,box_office:309420425},
      {movie:"Pirates of the Caribbean: Dead Man's Chest",year:2006,rating:54,box_office:423315812},
      {movie:"Corpse Bride",year:2005,rating:83,box_office:53359111},
      {movie:"Charlie and the Chocolate Factory",year:2005,rating:83,box_office:206459076},
      {movie:"The Libertine",year:2004,rating:33,box_office:4835065},
      {movie:"Finding Neverland",year:2004,rating:83,box_office:51680613},
      {movie:"Secret Window",year:2004,rating:46,box_office:48022900},
      {movie:"Once Upon a Time in Mexico",year:2003,rating:68,box_office:56359780},
      {movie:"Pirates of the Caribbean: The Curse of the Black Pearl",year:2003,rating:79,box_office:305413918},
      {movie:"From Hell",year:2001,rating:57,box_office:31602566},
      {movie:"Blow",year:2001,rating:55,box_office:52990775},
      {movie:"Chocolat",year:2000,rating:63,box_office:71509363},
      {movie:"Before Night Falls",year:2000,rating:73,box_office:4242892},
      {movie:"The Man Who Cried",year:2000,rating:35,box_office:747092},
      {movie:"Sleepy Hollow",year:1999,rating:67,box_office:101071502},
      {movie:"The Astronaut's Wife",year:1999,rating:16,box_office:10672566},
      {movie:"The Ninth Gate",year:1999,rating:41,box_office:18661336},
      {movie:"Fear and Loathing in Las Vegas",year:1998,rating:49,box_office:10680275},
      {movie:"Donnie Brasco",year:1997,rating:87,box_office:41909762},
      {movie:"Nick of Time",year:1995,rating:31,box_office:8175346},
      {movie:"Dead Man",year:1995,rating:71,box_office:1037847},
      {movie:"Don Juan DeMarco",year:1994,rating:74,box_office:22150451},
      {movie:"Ed Wood",year:1994,rating:92,box_office:5887457},
      {movie:"What's Eating Gilbert Grape",year:1993,rating:89,box_office:10032765},
      {movie:"Benny & Joon",year:1993,rating:75,box_office:23261580},
      {movie:"Arizona Dream",year:1993,rating:87,box_office:112547},
      {movie:"Freddy's Dead: The Final Nightmare",year:1991,rating:20,box_office:34872033},
      {movie:"Edward Scissorhands",year:1990,rating:89,box_office:56362352},
      {movie:"Cry-Baby",year:1990,rating:73,box_office:8266343},
      {movie:"Platoon",year:1986,rating:88,box_office:138530565},
      {movie:"Private Resort",year:1985,rating:20,box_office:331816},
      {movie:"A Nightmare on Elm Street",year:1984,rating:94,box_office:25504513}
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