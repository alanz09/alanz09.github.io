// Set the dimensions of the canvas / graph
var margin = {top: 45, right: 50, bottom: 50, left: 70},
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
var svg = d3.select("#fordchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Star Wars: The Force Awakens",year:2015,rating:92,box_office:936662225},
        {movie:"The Age of Adaline",year:2015,rating:55,box_office:42629776},
        {movie:"The Expendables 3",year:2014,rating:32,box_office:39322544},
        {movie:"Anchorman 2: The Legend Continues",year:2013,rating:75,box_office:127352707},
        {movie:"Ender's Game",year:2013,rating:60,box_office:61737191},
        {movie:"Paranoia",year:2013,rating:6,box_office:7385015},
        {movie:"42",year:2013,rating:79,box_office:95020213},
        {movie:"Cowboys & Aliens",year:2011,rating:43,box_office:100240551},
        {movie:"Morning Glory",year:2010,rating:56,box_office:31011732},
        {movie:"Extraordinary Measures",year:2010,rating:28,box_office:12068313},
        {movie:"Crossing Over",year:2009,rating:16,box_office:455654},
        {movie:"Indiana Jones and the Kingdom of the Crystal Skull",year:2008,rating:77,box_office:317101119},
        {movie:"Firewall",year:2006,rating:19,box_office:48751189},
        {movie:"Hollywood Homicide",year:2003,rating:30,box_office:30940691},
        {movie:"K-19: The Widowmaker",year:2002,rating:93,box_office:35168966},
        {movie:"What Lies Beneath",year:2000,rating:46,box_office:155464351},
        {movie:"Random Hearts",year:1999,rating:15,box_office:31502583},
        {movie:"Six Days Seven Nights",year:1998,rating:36,box_office:74339294},
        {movie:"Air Force One",year:1997,rating:78,box_office:172956409},
        {movie:"The Devil's Own",year:1997,rating:33,box_office:42868348},
        {movie:"Sabrina",year:1995,rating:65,box_office:53672080},
        {movie:"Clear and Present Danger",year:1994,rating:82,box_office:122187717},
        {movie:"The Fugitive",year:1993,rating:96,box_office:183875760},
        {movie:"Patriot Games",year:1992,rating:75,box_office:83351587},
        {movie:"Regarding Henry",year:1991,rating:44,box_office:43001500},
        {movie:"Presumed Innocent",year:1990,rating:86,box_office:86303188},
        {movie:"Indiana Jones and the Last Crusade",year:1989,rating:88,box_office:197171806},
        {movie:"Working Girl",year:1988,rating:84,box_office:63779477},
        {movie:"Frantic",year:1988,rating:78,box_office:17637950},
        {movie:"The Mosquito Coast",year:1986,rating:75,box_office:14302779},
        {movie:"Witness",year:1985,rating:92,box_office:68706993},
        {movie:"Indiana Jones and the Temple of Doom",year:1984,rating:85,box_office:179870271},
        {movie:"Star Wars: Episode VI - Return of the Jedi",year:1983,rating:80,box_office:309306177},
        {movie:"Blade Runner",year:1982,rating:89,box_office:32868943},
        {movie:"Raiders of the Lost Ark",year:1981,rating:94,box_office:248159971},
        {movie:"Star Wars: Episode V - The Empire Strikes Back",year:1980,rating:94,box_office:290475067},
        {movie:"More American Graffiti",year:1979,rating:22,box_office:15014674},
        {movie:"The Frisco Kid",year:1979,rating:53,box_office:9346177},
        {movie:"Apocalypse Now",year:1979,rating:97,box_office:83471511},
        {movie:"Hanover Street",year:1979,rating:57,box_office:3000000},
        {movie:"Force 10 from Navarone",year:1978,rating:64,box_office:7230000},
        {movie:"Star Wars: Episode IV - A New Hope",year:1977,rating:93,box_office:460998007},
        {movie:"The Conversation",year:1974,rating:98,box_office:4420000},
        {movie:"American Graffiti",year:1973,rating:95,box_office:115000000},
        {movie:"Getting Straight",year:1970,rating:33,box_office:13300000}
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

    d3.select("#fordchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 465)
    .attr("y",10);

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