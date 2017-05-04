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
var svg = d3.select("#washchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");
// Get the data
data = [{movie:"Fences",year:2016,rating:93,box_office:57682904},
      {movie:"The Magnificent Seven",year:2016,rating:63,box_office:93432655},
      {movie:"The Equalizer",year:2014,rating:60,box_office:101530738},
      {movie:"2 Guns",year:2013,rating:64,box_office:75612460},
      {movie:"Flight",year:2012,rating:78,box_office:93772375},
      {movie:"Safe House",year:2012,rating:53,box_office:126373434},
      {movie:"Unstoppable",year:2010,rating:87,box_office:81562942},
      {movie:"The Book of Eli",year:2010,rating:48,box_office:94835059},
      {movie:"The Taking of Pelham 1 2 3",year:2009,rating:51,box_office:65452312},
      {movie:"The Great Debaters",year:2007,rating:79,box_office:30236407},
      {movie:"American Gangster",year:2007,rating:80,box_office:130164645},
      {movie:"Déjà vu",year:2006,rating:55,box_office:64038616},
      {movie:"Inside Man",year:2006,rating:87,box_office:88513495},
      {movie:"The Manchurian Candidate",year:2004,rating:81,box_office:65955630},
      {movie:"Man on Fire",year:2004,rating:39,box_office:77911774},
      {movie:"Out of Time",year:2003,rating:65,box_office:41088845},
      {movie:"Antwone Fisher",year:2002,rating:79,box_office:21078145},
      {movie:"John Q",year:2002,rating:23,box_office:71756802},
      {movie:"Training Day",year:2001,rating:72,box_office:76631907},
      {movie:"Remember the Titans",year:2000,rating:73,box_office:115654751},
      {movie:"The Hurricane",year:1999,rating:83,box_office:50699241},
      {movie:"The Bone Collector",year:1999,rating:28,box_office:66518655},
      {movie:"The Siege",year:1998,rating:44,box_office:40981289},
      {movie:"He Got Game",year:1998,rating:80,box_office:21567853},
      {movie:"Fallen",year:1998,rating:40,box_office:25232289},
      {movie:"The Preacher's Wife",year:1996,rating:60,box_office:48102795},
      {movie:"Courage Under Fire",year:1996,rating:85,box_office:59031057},
      {movie:"Devil in a Blue Dress",year:1995,rating:87,box_office:16140822},
      {movie:"Virtuosity",year:1995,rating:33,box_office:24047675},
      {movie:"Crimson Tide",year:1995,rating:87,box_office:91387195},
      {movie:"The Pelican Brief",year:1993,rating:53,box_office:100768056},
      {movie:"Philadelphia",year:1993,rating:78,box_office:77446440},
      {movie:"Much Ado About Nothing",year:1993,rating:91,box_office:22549338},
      {movie:"Malcom X",year:1992,rating:91,box_office:48169910},
      {movie:"Ricochet",year:1991,rating:73,box_office:21756163},
      {movie:"Mississippi Masala",year:1991,rating:80,box_office:7308786},
      {movie:"Mo' Better Blues",year:1990,rating:73,box_office:16153593},
      {movie:"Heart Condition",year:1990,rating:0,box_office:4134992},
      {movie:"Glory",year:1989,rating:93,box_office:26828365},
      {movie:"The Mighty Quinn",year:1989,rating:88,box_office:4557214},
      {movie:"For Queen & Country",year:1988,rating:31,box_office:191051},
      {movie:"Cry Freedom",year:1987,rating:81,box_office:5899797},
      {movie:"Power",year:1986,rating:55,box_office:3800000},
      {movie:"A Soldier's Story",year:1984,rating:89,box_office:21821347}
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

    d3.select("#washchart svg")
    .append("svg:image")
    .attr("xlink:href", "http://i1352.photobucket.com/albums/q643/alanz09/trophy_zpsye79myc6.png")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 315)
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