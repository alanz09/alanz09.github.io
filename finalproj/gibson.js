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
var svg = d3.select("#gibsonchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"The Expendables 3",year:2014,rating:32,box_office:39322544},
          {movie:"Machete Kills",year:2013,rating:28,box_office:8008161},
          {movie:"Get the Gringo",year:2012,rating:81,box_office:5793167},
          {movie:"The Beaver",year:2011,rating:61,box_office:970816},
          {movie:"Edge of Darkness",year:2010,rating:56,box_office:43313890},
          {movie:"Paparazzi",year:2004,rating:18,box_office:15714234},
          {movie:"The Singing Detective",year:2003,rating:39,box_office:337174},
          {movie:"Signs",year:2002,rating:74,box_office:227966634},
          {movie:"We Were Soldiers",year:2002,rating:63,box_office:78122718},
          {movie:"What Woman Want",year:2000,rating:54,box_office:182811707},
          {movie:"The Patriot",year:2000,rating:61,box_office:113330342},
          {movie:"Chicken Run",year:2000,rating:97,box_office:106834564},
          {movie:"The Million Dollar Hotel",year:2000,rating:26,box_office:59989},
          {movie:"Payback",year:1999,rating:54,box_office:81526121},
          {movie:"Lethal Weapon 4",year:1998,rating:52,box_office:130444603},
          {movie:"Fairytale: A True Story",year:1997,rating:50,box_office:14059077},
          {movie:"Conspiracy Theory",year:1997,rating:52,box_office:75982834},
          {movie:"Father's Day",year:1997,rating:25,box_office:28598376},
          {movie:"Ransom",year:1996,rating:75,box_office:136492681},
          {movie:"Pocahontas",year:1995,rating:56,box_office:141579773},
          {movie:"Casper",year:1995,rating:44,box_office:100328194},
          {movie:"Braveheart",year:1995,rating:78,box_office:75609945},
          {movie:"Maverick",year:1994,rating:67,box_office:101631272},
          {movie:"The Man Without a Face",year:1993,rating:67,box_office:24760338},
          {movie:"Forever Young",year:1992,rating:53,box_office:55956187},
          {movie:"Lethal Weapon 3",year:1992,rating:56,box_office:144731527},
          {movie:"Hamlet",year:1990,rating:76,box_office:20710451},
          {movie:"Air America",year:1990,rating:13,box_office:31053601},
          {movie:"Bird on a Wire",year:1990,rating:32,box_office:70978012},
          {movie:"Lethal Weapon 2",year:1989,rating:83,box_office:147253986},
          {movie:"Tequila Sunrise",year:1988,rating:42,box_office:41292551},
          {movie:"Lethal Weapon",year:1987,rating:83,box_office:65207127},
          {movie:"Mad Max Beyond Thunderdome",year:1985,rating:81,box_office:36230219},
          {movie:"Mrs. Soffel",year:1984,rating:40,box_office:4385312},
          {movie:"The Bounty",year:1984,rating:82,box_office:8613462},
          {movie:"The Year of Living Dangerously",year:1982,rating:89,box_office:10278575},
          {movie:"Mad Max 2: The Road Warrior",year:1982,rating:98,box_office:23667907},
          {movie:"Gallipoli",year:1981,rating:88,box_office:5732587},
          {movie:"Mad Max",year:1979,rating:90,box_office:8750000}
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

    d3.select("#gibsonchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x",170)
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