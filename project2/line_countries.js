// Set the dimensions of the canvas / graph
var margin = {top: 0, right: 20, bottom: 55, left: 100},
    width = 950 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%Y").parse;

// Set the ranges
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis()
  .scale(x)
    .orient("bottom")
    .ticks(10)
    .tickFormat(d3.format("d"));

var yAxis = d3.svg.axis()
  .scale(y)
    .orient("left")
    .innerTickSize(-width)
    .tickPadding(12);

// Define the line
var valueline = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.angola); });

var valueline2 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.burundi); });

var valueline3 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.CAR); });

var valueline4 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.chad); });

var valueline5 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.congo); });

var valueline6 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.DEC); });

var valueline7 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.eritrea); });

var valueline8 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.ethiopia); });

var valueline9 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.gambia); });

var valueline10 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.liberia); });

var valueline11 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.mauritania); });

var valueline12 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.nigeria); });

var valueline13 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.rwanda); });

var valueline14 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.sierra_leone); });

var valueline15 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.somalia); });

var valueline16 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.sudan); });

var valueline17 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.togo); });

var valueline18 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.uganda); });

var valueline19 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.burma); });

var valueline20 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.cambodia); });

var valueline21 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.china); });

var valueline22 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.north_korea); });

var valueline23 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.laos); });

var valueline24 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.vietnam); });

var valueline25 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.armenia); });

var valueline26 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.azerbaijan); });

var valueline27 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.belarus); });

var valueline28 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.georgia); });

var valueline29 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.kazakhstan); });

var valueline30 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.kyrgyzstan); });

var valueline31 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.moldova); });

var valueline32 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.russia); });

var valueline33 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.ukraine); });

var valueline34 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.uzbekistan); });

var valueline35 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.colombia); });

var valueline36 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.cuba); });

var valueline37 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.haiti); });

var valueline38 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.honduras); });

var valueline39 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.afghanistan); });

var valueline40 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.bhutan); });

var valueline41 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.iran); });

var valueline42 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.iraq); });

var valueline43 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.pakistan); });

var valueline44 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.SL); });

var valueline45 = d3.svg.line()
  .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.syria); });
    
// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
data = [{year: "2017", angola: 0, burundi: 172, CAR: 172, chad: 5, congo: 1, DEC: 5179, eritrea: 477, ethiopia: 418, gambia: 5, liberia: 3, mauritania: 0, nigeria: 0, rwanda: 49, sierra_leone: 2, somalia: 3488, sudan: 359, togo: 0, uganda: 22, burma: 2011, cambodia: 0, china: 13, north_korea: 11, laos: 0, vietnam: 12, armenia: 26, azerbaijan: 14, belarus: 24, georgia: 0, kazakhstan: 13, kyrgyzstan: 14, moldova: 123, russia: 142, ukraine: 1662, uzbekistan: 9, colombia: 77, cuba: 90, haiti: 0, honduras: 56, afghanistan: 586, bhutan: 1445, iran: 1061, iraq: 3624, pakistan: 119, SL: 7, syria: 3566},
{year: "2016", angola: 3, burundi: 694, CAR: 401, chad: 2, congo: 16, DEC: 16370, eritrea: 1949, ethiopia: 1131, gambia: 0, liberia: 16, mauritania: 0, nigeria: 7, rwanda: 140, sierra_leone: 3, somalia: 9020, sudan: 1458, togo: 19, uganda: 65, burma: 12347, cambodia: 18, china: 57, north_korea: 14, laos: 7, vietnam: 58, armenia: 55, azerbaijan: 32, belarus: 185, georgia: 16, kazakhstan: 91, kyrgyzstan: 40, moldova: 465, russia: 462, ukraine: 2543, uzbekistan: 41, colombia: 529, cuba: 354, haiti: 0, honduras: 84, afghanistan: 2737, bhutan: 5817, iran: 3750, iraq: 9880, pakistan: 545, SL: 91, syria: 12587},
{year: "2015", angola: 5, burundi: 1186, CAR: 270, chad: 16, congo: 52, DEC: 7876, eritrea: 1596, ethiopia: 626, gambia: 3, liberia: 12, mauritania: 0, nigeria: 4, rwanda: 173, sierra_leone: 6, somalia: 8858, sudan: 1578, togo: 1, uganda: 67, burma: 18386, cambodia: 0, china: 30, north_korea: 15, laos: 0, vietnam: 35, armenia: 49, azerbaijan: 18, belarus: 98, georgia: 9, kazakhstan: 58, kyrgyzstan: 17, moldova: 333, russia: 281, ukraine: 1451, uzbekistan: 43, colombia: 521, cuba: 1527, haiti: 0, honduras: 0, afghanistan: 910, bhutan: 5775, iran: 3109, iraq: 12676, pakistan: 159, SL: 89, syria: 1682},
{year: "2014", angola: 0, burundi: 68, CAR: 25, chad: 21, congo: 30, DEC: 4540, eritrea: 1488, ethiopia: 728, gambia: 1, liberia: 31, mauritania: 4, nigeria: 4, rwanda: 45, sierra_leone: 6, somalia: 9000, sudan: 1315, togo: 26, uganda: 5, burma: 14598, cambodia: 44, china: 53, north_korea: 8, laos: 0, vietnam: 79, armenia: 10, azerbaijan: 15, belarus: 46, georgia: 13, kazakhstan: 24, kyrgyzstan: 8, moldova: 142, russia: 139, ukraine: 490, uzbekistan: 69, colombia: 252, cuba: 4062, haiti: 4, honduras: 0, afghanistan: 753, bhutan: 8434, iran: 2846, iraq: 19769, pakistan: 240, SL: 57, syria: 105},
{year: "2013", angola: 6, burundi: 193, CAR: 318, chad: 32, congo: 161, DEC: 2563, eritrea: 1824, ethiopia: 765, gambia: 11, liberia: 94, mauritania: 0, nigeria: 2, rwanda: 139, sierra_leone: 4, somalia: 7608, sudan: 2160, togo: 18, uganda: 15, burma: 16299, cambodia: 30, china: 86, north_korea: 17, laos: 0, vietnam: 86, armenia: 3, azerbaijan: 3, belarus: 10, georgia: 1, kazakhstan: 11, kyrgyzstan: 19, moldova: 119, russia: 125, ukraine: 227, uzbekistan: 51, colombia: 230, cuba: 4205, haiti: 0, honduras: 0, afghanistan: 661, bhutan: 9134, iran: 2578, iraq: 19488, pakistan: 158, SL: 92, syria: 36},
{year: "2012", angola: 0, burundi: 186, CAR: 136, chad: 12, congo: 102, DEC: 1863, eritrea: 1346, ethiopia: 620, gambia: 2, liberia: 69, mauritania: 0, nigeria: 2, rwanda: 157, sierra_leone: 1, somalia: 4911, sudan: 1077, togo: 26, uganda: 18, burma: 14160, cambodia: 6, china: 45, north_korea: 22, laos: 21, vietnam: 100, armenia: 8, azerbaijan: 10, belarus: 83, georgia: 7, kazakhstan: 7, kyrgyzstan: 49, moldova: 255, russia: 197, ukraine: 372, uzbekistan: 140, colombia: 126, cuba: 1948, haiti: 0, honduras: 0, afghanistan: 481, bhutan: 15070, iran: 1758, iraq: 12163, pakistan: 274, SL: 55, syria: 31},
{year: "2011", angola: 2, burundi: 110, CAR: 182, chad: 25, congo: 27, DEC: 977, eritrea: 2032, ethiopia: 560, gambia: 7, liberia: 121, mauritania: 3, nigeria: 1, rwanda: 74, sierra_leone: 28, somalia: 3161, sudan: 334, togo: 5, uganda: 10, burma: 16972, cambodia: 5, china: 28, north_korea: 23, laos: 211, vietnam: 119, armenia: 15, azerbaijan: 16, belarus: 66, georgia: 20, kazakhstan: 53, kyrgyzstan: 30, moldova: 331, russia: 165, ukraine: 428, uzbekistan: 96, colombia: 46, cuba: 2920, haiti: 0, honduras: 5, afghanistan: 428, bhutan: 14999, iran: 2032, iraq: 9388, pakistan: 54, SL: 69, syria: 29},
{year: "2010", angola: 0, burundi: 530, CAR: 45, chad: 28, congo: 154, DEC: 3174, eritrea: 2570, ethiopia: 668, gambia: 10, liberia: 244, mauritania: 74, nigeria: 2, rwanda: 230, sierra_leone: 54, somalia: 4884, sudan: 558, togo: 9, uganda: 30, burma: 16693, cambodia: 9, china: 72, north_korea: 8, laos: 36, vietnam: 891, armenia: 1, azerbaijan: 18, belarus: 103, georgia: 4, kazakhstan: 46, kyrgyzstan: 27, moldova: 356, russia: 326, ukraine: 449, uzbekistan: 185, colombia: 123, cuba: 4818, haiti: 18, honduras: 20, afghanistan: 515, bhutan: 12363, iran: 3543, iraq: 18016, pakistan: 59, SL: 118, syria: 25},
{year: "2009", angola: 8, burundi: 762, CAR: 59, chad: 6, congo: 293, DEC: 1135, eritrea: 1571, ethiopia: 321, gambia: 10, liberia: 385, mauritania: 16, nigeria: 3, rwanda: 111, sierra_leone: 51, somalia: 4189, sudan: 683, togo: 14, uganda: 8, burma: 18202, cambodia: 15, china: 54, north_korea: 25, laos: 14, vietnam: 1538, armenia: 4, azerbaijan: 38, belarus: 146, georgia: 4, kazakhstan: 52, kyrgyzstan: 46, moldova: 445, russia: 495, ukraine: 601, uzbekistan: 152, colombia: 57, cuba: 4800, haiti: 0, honduras: 0, afghanistan: 349, bhutan: 13452, iran: 5381, iraq: 18838, pakistan: 67, SL: 33, syria: 25},
{year: "2008", angola: 0, burundi: 2889, CAR: 56, chad: 23, congo: 197, DEC: 727, eritrea: 251, ethiopia: 299, gambia: 6, liberia: 992, mauritania: 26, nigeria: 76, rwanda: 108, sierra_leone: 99, somalia: 2523, sudan: 375, togo: 204, uganda: 42, burma: 18139, cambodia: 8, china: 43, north_korea: 37, laos: 59, vietnam: 1196, armenia: 9, azerbaijan: 30, belarus: 111, georgia: 20, kazakhstan: 62, kyrgyzstan: 25, moldova: 487, russia: 426, ukraine: 1022, uzbekistan: 134, colombia: 94, cuba: 4177, haiti: 0, honduras: 0, afghanistan: 576, bhutan: 5320, iran: 5270, iraq: 13822, pakistan: 104, SL: 1, syria: 24},
{year: "2007", angola: 4, burundi: 4545, CAR: 15, chad: 10, congo: 206, DEC: 848, eritrea: 963, ethiopia: 1028, gambia: 13, liberia: 1606, mauritania: 62, nigeria: 20, rwanda: 202, sierra_leone: 166, somalia: 6969, sudan: 705, togo: 40, uganda: 38, burma: 13896, cambodia: 15, china: 27, north_korea: 22, laos: 117, vietnam: 1564, armenia: 29, azerbaijan: 78, belarus: 219, georgia: 7, kazakhstan: 45, kyrgyzstan: 17, moldova: 565, russia: 1773, ukraine: 1605, uzbekistan: 190, colombia: 54, cuba: 2922, haiti: 0, honduras: 0, afghanistan: 441, bhutan: 0, iran: 5482, iraq: 1608, pakistan: 30, SL: 2, syria: 17},
{year: "2006", angola: 13, burundi: 466, CAR: 23, chad: 4, congo: 66, DEC: 405, eritrea: 538, ethiopia: 1271, gambia: 6, liberia: 2346, mauritania: 88, nigeria: 15, rwanda: 112, sierra_leone: 439, somalia: 10357, sudan: 1848, togo: 18, uganda: 20, burma: 1612, cambodia: 9, china: 21, north_korea: 9, laos: 830, vietnam: 3168, armenia: 87, azerbaijan: 77, belarus: 350, georgia: 4, kazakhstan: 124, kyrgyzstan: 15, moldova: 721, russia: 6003, ukraine: 2483, uzbekistan: 527, colombia: 115, cuba: 3143, haiti: 0, honduras: 0, afghanistan: 651, bhutan: 3, iran: 2792, iraq: 202, pakistan: 20, SL: 6, syria: 27},
{year: "2005", angola: 21, burundi: 214, CAR: 0, chad: 0, congo: 43, DEC: 424, eritrea: 327, ethiopia: 1663, gambia: 0, liberia: 4289, mauritania: 3, nigeria: 11, rwanda: 183, sierra_leone: 829, somalia: 10405, sudan: 2205, togo: 72, uganda: 10, burma: 1447, cambodia: 9, china: 13, north_korea: 0, laos: 8517, vietnam: 2084, armenia: 86, azerbaijan: 299, belarus: 445, georgia: 11, kazakhstan: 80, kyrgyzstan: 38, moldova: 1016, russia: 5982, ukraine: 2889, uzbekistan: 271, colombia: 323, cuba: 6360, haiti: 8, honduras: 0, afghanistan: 902, bhutan: 0, iran: 1856, iraq: 198, pakistan: 9, SL: 0, syria: 7},
{year: "2004", angola: 20, burundi: 276, CAR: 24, chad: 4, congo: 73, DEC: 569, eritrea: 128, ethiopia: 2689, gambia: 3, liberia: 7140, mauritania: 0, nigeria: 34, rwanda: 176, sierra_leone: 1084, somalia: 13331, sudan: 3500, togo: 35, uganda: 8, burma: 1056, cambodia: 3, china: 3, north_korea: 0, laos: 6005, vietnam: 1012, armenia: 88, azerbaijan: 407, belarus: 659, georgia: 33, kazakhstan: 312, kyrgyzstan: 100, moldova: 1711, russia: 1446, ukraine: 3482, uzbekistan: 426, colombia: 577, cuba: 2980, haiti: 17, honduras: 0, afghanistan: 959, bhutan: 0, iran: 1786, iraq: 66, pakistan: 11, SL: 1, syria: 0},
{year: "2003", angola: 21, burundi: 16, CAR: 1, chad: 1, congo: 41, DEC: 251, eritrea: 23, ethiopia: 1702, gambia: 9, liberia: 2956, mauritania: 0, nigeria: 57, rwanda: 47, sierra_leone: 1378, somalia: 1994, sudan: 2139, togo: 47, uganda: 1, burma: 203, cambodia: 7, china: 9, north_korea: 0, laos: 13, vietnam: 1472, armenia: 63, azerbaijan: 406, belarus: 702, georgia: 53, kazakhstan: 118, kyrgyzstan: 46, moldova: 616, russia: 1394, ukraine: 5065, uzbekistan: 166, colombia: 149, cuba: 306, haiti: 0, honduras: 0, afghanistan: 1453, bhutan: 0, iran: 2471, iraq: 298, pakistan: 18, SL: 7, syria: 3},
{year: "2002", angola: 16, burundi: 62, CAR: 0, chad: 1, congo: 5, DEC: 107, eritrea: 13, ethiopia: 330, gambia: 0, liberia: 560, mauritania: 6, nigeria: 28, rwanda: 47, sierra_leone: 176, somalia: 237, sudan: 897, togo: 16, uganda: 2, burma: 128, cambodia: 4, china: 9, north_korea: 0, laos: 18, vietnam: 3331, armenia: 30, azerbaijan: 114, belarus: 680, georgia: 14, kazakhstan: 223, kyrgyzstan: 69, moldova: 1022, russia: 2105, ukraine: 5217, uzbekistan: 394, colombia: 8, cuba: 1919, haiti: 7, honduras: 0, afghanistan: 1683, bhutan: 0, iran: 1535, iraq: 466, pakistan: 0, SL: 5, syria: 4},
{year: "2001", angola: 34, burundi: 109, CAR: 1, chad: 7, congo: 10, DEC: 264, eritrea: 114, ethiopia: 1457, gambia: 5, liberia: 3442, mauritania: 202, nigeria: 85, rwanda: 84, sierra_leone: 1984, somalia: 4946, sudan: 5944, togo: 279, uganda: 12, burma: 544, cambodia: 23, china: 15, north_korea: 0, laos: 23, vietnam: 3546, armenia: 26, azerbaijan: 450, belarus: 984, georgia: 51, kazakhstan: 290, kyrgyzstan: 116, moldova: 1199, russia: 4596, ukraine: 7313, uzbekistan: 693, colombia: 0, cuba: 2946, haiti: 24, honduras: 0, afghanistan: 2930, bhutan: 0, iran: 6461, iraq: 2465, pakistan: 3, SL: 2, syria: 8}
    ];

//d3.csv("data.csv", function(error, data) {
// data.forEach(function(d) {
//  console.log(d, 'is d')
//     d.year = parseDate(d.year);
//     d.avg_feb = +d.avg_feb;
//     d.avg_mar = +d.avg_mar;
// });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.year; }));
    y.domain([0, d3.max(data, function(d) { return Math.max(d.angola, d.burundi, d.CAR, d.chad, d.congo, d.DEC, d.eritrea, d.ethiopia, d.gambia, d.liberia, d.mauritania, d.nigeria, d.rwanda, d.sierra_leone, d.somalia, d.sudan, d.togo, d.uganda, d.burma, d.cambodia, d.china, d.north_korea, d.laos, d.vietnam, d.armenia, d.azerbaijan, d.belarus, d.georgia, d.kazakhstan, d.kyrgyzstan, d.moldova, d.russia, d.ukraine, d.uzbekistan, d.colombia, d.cuba, d.haiti, d.honduras, d.afghanistan, d.bhutan, d.iran, d.iraq, d.pakistan, d.SL, d.syria); })]);

    // Add valueline path
    svg.append("path")
        .attr("class", "line")
        .attr("id", "greenLine")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline(data))
      .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Angola" + "<br>" + "<strong>Population:</strong> 25.02M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/aoout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this) 
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 2
    svg.append("path")
        .attr("class", "line")
        .attr("id", "burundi")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline2(data))
      .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Burundi" + "<br>" + "<strong>Population:</strong> 11.18M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/biout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 3
    svg.append("path")
        .attr("class", "line")
        .attr("id", "centralAfricanRep")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline3(data))
      .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Central African Republic" + "<br>" + "<strong>Population:</strong> 4.90M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/cfout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 4
    svg.append("path")
        .attr("class", "line")
        .attr("id", "chad")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline4(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Chad" + "<br>" + "<strong>Population:</strong> 14.04M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/tdout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 5
    svg.append("path")
        .attr("class", "line")
        .attr("id", "congo")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline5(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Congo" + "<br>" + "<strong>Population:</strong> 4.62M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/cgout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 6
    svg.append("path")
        .attr("class", "line")
        .attr("id", "demRepCongo")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline6(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Democratic Republic of Congo" + "<br>" + "<strong>Population:</strong> 77.27M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/cdout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 7
    svg.append("path")
        .attr("class", "line")
        .attr("id", "eritrea")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline7(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Eritrea" + "<br>" + "<strong>Population:</strong> 4.79M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/erout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2011 ******************************************************************************************************
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 8
    svg.append("path")
        .attr("class", "line")
        .attr("id", "ethiopia")
        .style("opacity", 0.7)
        .style("stroke", "grey")
        .attr("d", valueline8(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Ethiopia" + "<br>" + "<strong>Population:</strong> 99.39M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/etout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this) //2015
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 9
    svg.append("path")
        .attr("class", "line")
        .attr("id", "gambia")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline9(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Gambia" + "<br>" + "<strong>Population:</strong> 1.99M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/gmout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 10
    svg.append("path")
        .attr("class", "line")
        .attr("id", "liberia")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline10(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Liberia" + "<br>" + "<strong>Population:</strong> 4.50M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/lrout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 11
    svg.append("path")
        .attr("class", "line")
        .attr("id", "mauritania")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline11(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Mauritania" + "<br>" + "<strong>Population:</strong> 4.07M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/mrout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this) //2015
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 12
    svg.append("path")
        .attr("class", "line")
        .attr("id", "nigeria")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline12(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Nigeria" + "<br>" + "<strong>Population:</strong> 182.20M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/ngout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 13
    svg.append("path")
        .attr("class", "line")
        .attr("id", "rwanda")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline13(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Rwanda" + "<br>" + "<strong>Population:</strong> 11.61M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/rwout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 14
    svg.append("path")
        .attr("class", "line")
        .attr("id", "sierraLeone")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline14(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Sierra Leone" + "<br>" + "<strong>Population:</strong> 6.45M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/slout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this) //2015
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 15
    svg.append("path")
        .attr("class", "line")
        .attr("id", "somalia")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline15(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Somalia" + "<br>" + "<strong>Population:</strong> 10.79M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/soout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"); //2015
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 16
    svg.append("path")
        .attr("class", "line")
        .attr("id", "sudan")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline16(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Sudan" + "<br>" + "<strong>Population:</strong> 40.23M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/sdout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this) //2015
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 17
    svg.append("path")
        .attr("class", "line")
        .attr("id", "togo")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline17(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Togo" + "<br>" + "<strong>Population:</strong> 7.30M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/tgout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this) //2015
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 18
    svg.append("path")
        .attr("class", "line")
        .attr("id", "uganda")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline18(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Uganda" + "<br>" + "<strong>Population:</strong> 39.03M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/africa/outline/ugout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this) //2015
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 19
    svg.append("path")
        .attr("class", "line")
        .attr("id", "redLine")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline19(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Myanmar (Burma)" + "<br>" + "<strong>Population:</strong> 53.90M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/mmout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 20
    svg.append("path")
        .attr("class", "line")
        .attr("id", "cambodia")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline20(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Cambodia" + "<br>" + "<strong>Population:</strong> 15.58M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/khout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 21
    svg.append("path")
        .attr("class", "line")
        .attr("id", "china")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline21(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>China" + "<br>" + "<strong>Population:</strong> 1.37B" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/cnout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 22
    svg.append("path")
        .attr("class", "line")
        .attr("id", "northKorea")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline22(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>North Korea" + "<br>" + "<strong>Population:</strong> 25.16M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/kp.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 23
    svg.append("path")
        .attr("class", "line")
        .attr("id", "laos")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline23(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Laos" + "<br>" + "<strong>Population:</strong> 6.80M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/laout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 24
    svg.append("path")
        .attr("class", "line")
        .attr("id", "vietnam")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline24(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Vietnam" + "<br>" + "<strong>Population:</strong> 91.70M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/vnout.gif style='width: 150px; height: 200px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 25
    svg.append("path")
        .attr("class", "line")
        .attr("id", "orangeLine")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline25(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Armenia" + "<br>" + "<strong>Population:</strong> 3.02M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/europe/outline/am.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 26
    svg.append("path")
        .attr("class", "line")
        .attr("id", "azerbaijan")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline26(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Azerbaijan" + "<br>" + "<strong>Population:</strong> 9.65M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/europe/outline/az.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 27
    svg.append("path")
        .attr("class", "line")
        .attr("id", "belarus")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline27(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Belarus" + "<br>" + "<strong>Population:</strong> 9.51M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/europe/outline/by.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 28
    svg.append("path")
        .attr("class", "line")
        .attr("id", "georgia")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline28(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Georgia" + "<br>" + "<strong>Population:</strong> 3.68M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/europe/outline/ge.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 29
    svg.append("path")
        .attr("class", "line")
        .attr("id", "kazakhstan")
        .style("stroke", "grey")
        .attr("opacity", 0.7)
        .attr("d", valueline29(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Kazakhstan" + "<br>" + "<strong>Population:</strong> 17.54M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/kzout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 30
    svg.append("path")
        .attr("class", "line")
        .attr("id", "kyrgyzstan")
        .style("stroke", "grey")
        .attr("opacity", 0.7)
        .attr("d", valueline30(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Kyrgyzstan" + "<br>" + "<strong>Population:</strong> 5.96M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/kgout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });


    // Add valueline path 31
    svg.append("path")
        .attr("class", "line")
        .attr("id", "moldova")
        .style("stroke", "grey")
        .attr("opacity", 0.7)
        .attr("d", valueline31(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Moldova" + "<br>" + "<strong>Population:</strong> 3.55M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/europe/outline/md.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 32
    svg.append("path")
        .attr("class", "line")
        .attr("id", "russia")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline32(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Russia" + "<br>" + "<strong>Population:</strong> 144.10M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/ruout.gif style='width: 200px; height: 100px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 33
    svg.append("path")
        .attr("class", "line")
        .attr("id", "ukraine")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline33(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Ukraine" + "<br>" + "<strong>Population:</strong> 45.20M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/europe/outline/ua.gif style='width: 200px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 34
    svg.append("path")
        .attr("class", "line")
        .attr("id", "uzbekistan")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline34(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Uzbekistan" + "<br>" + "<strong>Population:</strong> 31.30M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/uzout.gif style='width: 200px; height: 200px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 35
    svg.append("path")
        .attr("class", "line")
        .attr("id", "blueLine")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline35(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Colombia" + "<br>" + "<strong>Population:</strong> 48.23M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/samerica/outline/co.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 36
    svg.append("path")
        .attr("class", "line")
        .attr("id", "cuba")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline36(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Cuba" + "<br>" + "<strong>Population:</strong> 11.39M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/namerica/caribb/outline/cubaout.gif style='width: 230px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 37
    svg.append("path")
        .attr("class", "line")
        .attr("id", "haiti")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline37(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Haiti" + "<br>" + "<strong>Population:</strong> 10.71M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/namerica/caribb/outline/ht.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 38
    svg.append("path")
        .attr("class", "line")
        .attr("id", "honduras")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline38(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Honduras" + "<br>" + "<strong>Population:</strong> 8.08M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/namerica/camerica/outline/hnoutl.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 39
    svg.append("path")
        .attr("class", "line")
        .attr("id", "afghanistan")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline39(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Afghanistan" + "<br>" + "<strong>Population:</strong> 32.53M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/afout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 40
    svg.append("path")
        .attr("class", "line")
        .attr("id", "bhutan")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline40(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Bhutan" + "<br>" + "<strong>Population:</strong> 774.83K" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/btout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 41
    svg.append("path")
        .attr("class", "line")
        .attr("id", "iran")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline41(data))
      .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Iran" + "<br>" + "<strong>Population:</strong> 79.11M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/irout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 42
    svg.append("path")
        .attr("class", "line")
        .attr("id", "iraq")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline42(data))
      .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Iraq" + "<br>" + "<strong>Population:</strong> 36.42M" + "<br><br><br>" + 
            "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/iqout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      }) 
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 43
    svg.append("path")
        .attr("class", "line")
        .attr("id", "pakistan")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline43(data))
      .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Pakistan" + "<br>" + "<strong>Population:</strong> 188.92M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/pkout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 44
    svg.append("path")
        .attr("class", "line")
        .attr("id", "sriLanka")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline44(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Sri Lanka" + "<br>" + "<strong>Population:</strong> 20.97M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/lkout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

    // Add valueline path 45
    svg.append("path")
        .attr("class", "line")
        .attr("id", "syria")
        .style("stroke", "grey")
        .style("opacity", 0.7)
        .attr("d", valueline45(data))
        .on("mousemove", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", 1);
          div.html("<strong>Country: </strong>Syria" + "<br>" + "<strong>Population:</strong> 18.50M" + "<br><br><br>" + "<img src=http://www.worldatlas.com/webimage/countrys/asia/outline/syout.gif style='width: 150px; height: 150px;''>" +
            "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", 2.5)
            .style("opacity", 1);
      })
      .on("mouseout", function(d) {
          div.transition()
            .duration(600)
            .style("opacity", 0);
          d3.select(this)
            .style("stroke", "grey")
            .style("stroke-width", 1.5)
            .style("opacity", 0.7);
          });

  // Define the div for the tooltip
  var div = d3.select("body").append("div") // TOOLTIP STUFF 
      .attr("class", "tooltip")       
      .style("opacity", 0);

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
    svg.append("g") // Label on Y axis
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -70)
      .attr("x", -190)
      .attr("dy", ".61em")
      .style("text-anchor", "end")
      .text("Refugees (in thousands)");

    svg.append("g") // Label on X axis
      .attr("class", "x axis")
      .append("text")
      .attr("transform", "translate(0," + height + ")")
      .attr("y", 45)
      .attr("x", 430)
      .style("text-anchor", "end")
      .text("Year");


