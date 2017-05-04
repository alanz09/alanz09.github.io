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
var svg = d3.select("#noltechart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Noah",year:2014,rating:77,box_office:101200044},
      {movie:"Hateship Loveship",year:2013,rating:50,box_office:54030},
      {movie:"Parker",year:2013,rating:41,box_office:17616641},
      {movie:"Gangster Squad",year:2013,rating:31,box_office:46000903},
      {movie:"The Company You Keep",year:2012,rating:54,box_office:5133027},
      {movie:"Warrior",year:2011,rating:82,box_office:13657115},
      {movie:"Zookeeper",year:2011,rating:14,box_office:80360843},
      {movie:"Arthur",year:2011,rating:26,box_office:33035397},
      {movie:"Cats & Dogs: The Revenge of Kitty Galore",year:2010,rating:14,box_office:43585753},
      {movie:"Tropic Thunder",year:2008,rating:82,box_office:110515313},
      {movie:"The Spiderwick Chronicles",year:2008,rating:80,box_office:71195053},
      {movie:"The Mysteries of Pittsburgh",year:2008,rating:12,box_office:80238},
      {movie:"Off the Black",year:2006,rating:65,box_office:24425},
      {movie:"Peaceful Warrior",year:2006,rating:25,box_office:3960414},
      {movie:"Over the Hedge",year:2006,rating:75,box_office:155019340},
      {movie:"Hotel Rwanda",year:2004,rating:90,box_office:23530892},
      {movie:"Clean",year:2004,rating:72,box_office:138711},
      {movie:"The Beautiful Country",year:2004,rating:77,box_office:442813},
      {movie:"Hulk",year:2003,rating:61,box_office:132177234},
      {movie:"The Good Thief",year:2002,rating:78,box_office:3517797},
      {movie:"Trixie",year:2000,rating:27,box_office:295683},
      {movie:"The Golden Bowl",year:2000,rating:54,box_office:3050532},
      {movie:"Simpatico",year:1999,rating:25,box_office:929606},
      {movie:"Breakfast of Champions",year:1999,rating:26,box_office:178278},
      {movie:"The Thin Red Line",year:1998,rating:78,box_office:36400491},
      {movie:"Affliction",year:1997,rating:87,box_office:6330054},
      {movie:"U Turn",year:1997,rating:59,box_office:6682098},
      {movie:"Afterglow",year:1997,rating:74,box_office:2465960},
      {movie:"Nightwatch",year:1997,rating:23,box_office:1179002},
      {movie:"Mother Night",year:1996,rating:64,box_office:403701},
      {movie:"Mulholland Falls",year:1996,rating:31,box_office:11526099},
      {movie:"Jefferson in Paris",year:1995,rating:33,box_office:2473668},
      {movie:"I Love Trouble",year:1994,rating:20,box_office:30806194},
      {movie:"Blue Chips",year:1994,rating:37,box_office:23070663},
      {movie:"I'll Do Anything",year:1994,rating:61,box_office:10424645},
      {movie:"Lorenzo's Oil",year:1992,rating:94,box_office:7286388},
      {movie:"The Player",year:1992,rating:98,box_office:21706101},
      {movie:"The Prince of Tides",year:1991,rating:73,box_office:74787599},
      {movie:"Cape Fear",year:1991,rating:76,box_office:79091969},
      {movie:"Another 48 Hrs.",year:1990,rating:15,box_office:80818974},
      {movie:"Q & A",year:1990,rating:87,box_office:11207891},
      {movie:"Everybody Wins",year:1990,rating:17,box_office:1372350},
      {movie:"New York Stories",year:1989,rating:73,box_office:10763469},
      {movie:"Farewell to the King",year:1989,rating:55,box_office:2420917},
      {movie:"Three Fugitives",year:1989,rating:14,box_office:40586886},
      {movie:"Weeds",year:1987,rating:80,box_office:2325444},
      {movie:"Extreme Prejudice",year:1987,rating:71,box_office:11307844},
      {movie:"Down and Out in Beverly Hills",year:1986,rating:84,box_office:62134225},
      {movie:"Teachers",year:1984,rating:62,box_office:27774237},
      {movie:"Under Fire",year:1983,rating:89,box_office:5696391},
      {movie:"48 Hrs.",year:1982,rating:92,box_office:78868508},
      {movie:"Cannery Row",year:1982,rating:80,box_office:5301539},
      {movie:"North Dallas Forty",year:1979,rating:87,box_office:26079312},
      {movie:"The Deep",year:1977,rating:36,box_office:47346365}
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

    d3.select("#noltechart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 330)
    .attr("y",-1);

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