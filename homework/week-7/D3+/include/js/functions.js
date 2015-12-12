window.onload = function() {
    var data = [{
        "name": "Noord-Brabant",
        "population": "2479274",
        "surface": "4914",
        "popdensity": "505"
    }, {
        "name": "Utrecht",
        "population": "1253672",
        "surface": "1383",
        "popdensity": "906"
    }, {
        "name": "Zuid-Holland",
        "population": "3577032",
        "surface": "2808",
        "popdensity": "1274"
    }, {
        "name": "Noord-Holland",
        "population": "2741369",
        "surface": "2665",
        "popdensity": "1028"
    }, {
        "name": "Drenthe",
        "population": "488988",
        "surface": "2639",
        "popdensity": "185"
    }, {
        "name": "Friesland",
        "population": "646317",
        "surface": "3340",
        "popdensity": "194"
    }, {
        "name": "Gelderland",
        "population": "2019692",
        "surface": "4970",
        "popdensity": "406"
    }, {
        "name": "Groningen",
        "population": "582728",
        "surface": "2325",
        "popdensity": "251"
    }, {
        "name": "Limburg",
        "population": "1120006",
        "surface": "2150",
        "popdensity": "521"
    }, {
        "name": "Overijssel",
        "population": "1139697",
        "surface": "3324",
        "popdensity": "343"
    }, {
        "name": "Flevoland",
        "population": "399893",
        "surface": "1416",
        "popdensity": "283"
    }, {
        "name": "Zeeland",
        "population": "380621",
        "surface": "1784",
        "popdensity": "213"
    }];

    var n = document.getElementsByClassName("legend1");
    n[0].style.display = "none";
    var o = document.getElementsByClassName("legend2");
    o[0].style.display = "none";
    var p = document.getElementsByClassName("legend3");
    p[0].style.display = "none";

    var popcolors = ["#08306b", "#08519c", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef", "#deebf7"];
    var surfcolors = ["#67000d", "#99000d", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2"];
    var popdenscolors = ["#49006a", "#7a0177", "#ae017e", "#dd3497", "#f768a1", "#fa9fb5", "#fcc5c0", "#fde0dd"];
    var groups = [3000000, 2000000, 1000000, 800000, 600000, 400000, 200000, 100000];
    var surfgroups = [4500, 4000, 3500, 3000, 2500, 2000, 1500, 1000];
    var popdensgroups = [1200, 1000, 800, 600, 400, 300, 200, 100];

    var widthmap = 989,
        heightmap = 1200;

    var margin = {
            top: 20,
            right: 20,
            bottom: 50,
            left: 85
        },
        width = 989 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var colour = d3.scale.category20b();

    var projection = d3.geo.mercator()
        .scale(1)
        .translate([0, 0]);

    var path = d3.geo.path()
        .projection(projection);


    var svg = d3.select("body").append("svg")
        .attr("width", widthmap)
        .attr("height", heightmap);

    var svg2 = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    d3.json("/include/js/nld.json", function(error, nld) {

        var l = topojson.feature(nld, nld.objects.subunits).features[3],
            b = path.bounds(l),
            s = .3 / Math.max((b[1][0] - b[0][0]) / widthmap, (b[1][1] - b[0][1]) / heightmap),
            t = [(widthmap - s * (b[1][0] + b[0][0])) / 1.5, (heightmap - s * (b[1][1] + b[0][1])) / 2];

        projection
            .scale(s)
            .translate(t);

        svg.selectAll("path")
            .data(topojson.feature(nld, nld.objects.subunits).features).enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "steelblue")
            .attr("class", function(d, i) {
                return d.properties.name;
            });

        svg2.selectAll(".x.axis").remove();
        svg2.selectAll(".y.axis").remove();
        svg2.selectAll(".bar").remove();
        svg2.selectAll(".rect").remove();
        svg2.selectAll("text").remove();
        svg2.selectAll("g.text").remove();

        document.getElementById("options").onchange = function() {
            var sheet = document.getElementById("options").value;
            var n = document.getElementsByClassName("legend1");
            n[0].style.display = "none";
            var o = document.getElementsByClassName("legend2");
            o[0].style.display = "none";
            var p = document.getElementsByClassName("legend3");
            p[0].style.display = "none";
            if (sheet == "Standaard") {
                for (x = 0; x < data.length; x++) {
                    var landnaam = data[x].name;
                    var populatie = data[x].population;
                    var provincie = document.getElementsByClassName(landnaam)[0];
                    if (populatie > 0) {
                        provincie.style.fill = "steelblue";
                    }
                }

                svg2.selectAll(".x.axis").remove();
                svg2.selectAll(".y.axis").remove();
                svg2.selectAll(".bar").remove();
                svg2.selectAll(".rect").remove();
                svg2.selectAll("text").remove();
                svg2.selectAll("g.text").remove();


            } else if (sheet == "Populatie per provincie per 1 januari 2015") {
                var n = document.getElementsByClassName("legend1");
                n[0].style.display = "block";
                var o = document.getElementsByClassName("legend2");
                o[0].style.display = "none";
                var p = document.getElementsByClassName("legend3");
                p[0].style.display = "none";
                for (b = 0; b < data.length; b++) {
                    var landnaam = data[b].name;
                    var populatie = data[b].population;
                    var provincie = document.getElementsByClassName(landnaam)[0];
                    if (populatie > groups[0]) {
                        provincie.style.fill = popcolors[0];
                    } else if (populatie > groups[1]) {
                        provincie.style.fill = popcolors[1];
                    } else if (populatie > groups[2]) {
                        provincie.style.fill = popcolors[2];
                    } else if (populatie > groups[3]) {
                        provincie.style.fill = popcolors[3];
                    } else if (populatie > groups[4]) {
                        provincie.style.fill = popcolors[4];
                    } else if (populatie > groups[5]) {
                        provincie.style.fill = popcolors[5];
                    } else if (populatie > groups[6]) {
                        provincie.style.fill = popcolors[6];
                    } else if (populatie > groups[7]) {
                        provincie.style.fill = popcolors[7];
                    }

                    // d3.select(".tooltip svg")
                    // svg.on("mouseover", function() {
                    //     return tooltip.style("visibility", "visible");
                    // })
                    // svg.on("mousemove", function() {
                    //     return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px");
                    // })
                    // svg.on("mouseout", function() {
                    //     return tooltip.style("visibility", "hidden");
                    // });

                    // var tooltip = d3.select(".tooltip")
                    //     .append("div")
                    //     .style("position", "absolute")
                    //     .style("z-index", "10")
                    //     .text()
                    //     .style("visibility", "hidden");

                }
                svg2.selectAll(".x.axis").remove();
                svg2.selectAll(".y.axis").remove();
                svg2.selectAll(".bar").remove();
                svg2.selectAll(".rect").remove();
                svg2.selectAll("text").remove();
                svg2.selectAll("g.text").remove();

                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, 900], .1);

                var y = d3.scale.linear()
                    .range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(10, "");

                d3.tsv("/include/js/data1.tsv", type, function(error, data) {
                    if (error) throw error;

                    x.domain(data.map(function(d) {
                        return d.provincie;
                    }));
                    y.domain([0, d3.max(data, function(d) {
                        return d.inwoners;
                    })]);
                    y.domain([0, 4000000])
                    svg2.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    svg2.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                        .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", -70)
                        .attr("dy", ".71em")
                        .style("text-anchor", "end")
                        .text("Aantal inwoners per provincie");

                    svg2.selectAll(".bar")
                        .data(data)
                        .enter().append("rect")
                        .attr("class", "bar")
                        .attr("fill", "#2171b5")
                        .attr("x", function(d) {
                            return x(d.provincie);
                        })
                        .attr("width", x.rangeBand())
                        .attr("y", function(d) {
                            return y(d.inwoners);
                        })
                        .attr("height", function(d) {
                            return height - y(d.inwoners);
                        });
                });



                function type(d) {
                    d.inwoners = +d.inwoners;
                    return d;
                }

            } else if (sheet == "Oppervlakte per provincie") {
                var n = document.getElementsByClassName("legend1");
                n[0].style.display = "none";
                var o = document.getElementsByClassName("legend2");
                o[0].style.display = "block";
                var p = document.getElementsByClassName("legend3");
                p[0].style.display = "none";
                var y = document.getElementsByClassName("legend2");
                y[0].style.display = "block";
                for (c = 0; c < data.length; c++) {
                    var landnaam = data[c].name;
                    var oppervlakte = data[c].surface;
                    var provincie = document.getElementsByClassName(landnaam)[0];
                    if (oppervlakte > surfgroups[0]) {
                        provincie.style.fill = surfcolors[0];
                    } else if (oppervlakte > surfgroups[1]) {
                        provincie.style.fill = surfcolors[1];
                    } else if (oppervlakte > surfgroups[2]) {
                        provincie.style.fill = surfcolors[2];
                    } else if (oppervlakte > surfgroups[3]) {
                        provincie.style.fill = surfcolors[3];
                    } else if (oppervlakte > surfgroups[4]) {
                        provincie.style.fill = surfcolors[4];
                    } else if (oppervlakte > surfgroups[5]) {
                        provincie.style.fill = surfcolors[5];
                    } else if (oppervlakte > surfgroups[6]) {
                        provincie.style.fill = surfcolors[6];
                    } else if (oppervlakte > surfgroups[7]) {
                        provincie.style.fill = surfcolors[7];
                    }
                }

                svg2.selectAll(".x.axis").remove();
                svg2.selectAll(".y.axis").remove();
                svg2.selectAll(".bar").remove();
                svg2.selectAll(".rect").remove();
                svg2.selectAll("text").remove();
                svg2.selectAll(".dy").remove();
                svg2.selectAll("g.text").remove();


                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .1);

                var y = d3.scale.linear()
                    .range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(10, "");

                d3.tsv("/include/js/data2.tsv", type, function(error, data) {
                    if (error) throw error;
                    x.domain(data.map(function(d) {
                        return d.provincie;
                    }));
                    y.domain([0, d3.max(data, function(d) {
                        return d.oppervlakte;
                    })]);

                    svg2.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    svg2.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                        .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", -70)
                        .attr("dy", ".71em")
                        .style("text-anchor", "end")
                        .text("Oppervlakte in vierkante kilometers");

                    svg2.selectAll(".bar")
                        .data(data)
                        .enter().append("rect")
                        .attr("class", "bar")
                        .attr("fill", "#FB6A4A")
                        .attr("x", function(d) {
                            return x(d.provincie);
                        })
                        .attr("width", x.rangeBand())
                        .attr("y", function(d) {
                            return y(d.oppervlakte);
                        })
                        .attr("height", function(d) {
                            return height - y(d.oppervlakte);
                        });
                });

                function type(d) {
                    d.oppervlakte = +d.oppervlakte;
                    return d;
                }

            } else if (sheet == "De bevolkingsdichtheid per 1 januari 2015") {
                var n = document.getElementsByClassName("legend1");
                n[0].style.display = "none";
                var o = document.getElementsByClassName("legend2");
                o[0].style.display = "none";
                var p = document.getElementsByClassName("legend3");
                p[0].style.display = "block";
                for (d = 0; d < data.length; d++) {
                    var landnaam = data[d].name;
                    var bevdichtheid = data[d].popdensity;
                    var provincie = document.getElementsByClassName(landnaam)[0];
                    if (bevdichtheid > popdensgroups[0]) {
                        provincie.style.fill = popdenscolors[0];
                    } else if (bevdichtheid > popdensgroups[1]) {
                        provincie.style.fill = popdenscolors[1];
                    } else if (bevdichtheid > popdensgroups[2]) {
                        provincie.style.fill = popdenscolors[2];
                    } else if (bevdichtheid > popdensgroups[3]) {
                        provincie.style.fill = popdenscolors[3];
                    } else if (bevdichtheid > popdensgroups[4]) {
                        provincie.style.fill = popdenscolors[4];
                    } else if (bevdichtheid > popdensgroups[5]) {
                        provincie.style.fill = popdenscolors[5];
                    } else if (bevdichtheid > popdensgroups[6]) {
                        provincie.style.fill = popdenscolors[6];
                    } else if (bevdichtheid > popdensgroups[7]) {
                        provincie.style.fill = popdenscolors[7];
                    }
                }

                svg2.selectAll(".x.axis").remove();
                svg2.selectAll(".y.axis").remove();
                svg2.selectAll(".bar").remove();
                svg2.selectAll(".rect").remove();
                svg2.selectAll("text").remove();
                svg2.selectAll(".dy").remove();
                svg2.selectAll("g.text").remove();

                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .1);

                var y = d3.scale.linear()
                    .range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(10, "");

                d3.tsv("/include/js/data3.tsv", type, function(error, data) {
                    if (error) throw error;

                    x.domain(data.map(function(d) {
                        return d.provincie;
                    }));
                    y.domain([0, d3.max(data, function(d) {
                        return d.dichtheid;
                    })]);

                    svg2.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    svg2.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                        .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", -70)
                        .attr("dy", ".71em")
                        .style("text-anchor", "end")
                        .text("Bevolkingsdichtheid per vierkante kilometer");

                    svg2.selectAll(".bar")
                        .data(data)
                        .enter().append("rect")
                        .attr("class", "bar")
                        .attr("fill", "#ae017e")
                        .attr("x", function(d) {
                            return x(d.provincie);
                        })
                        .attr("width", x.rangeBand())
                        .attr("y", function(d) {
                            return y(d.dichtheid);
                        })
                        .attr("height", function(d) {
                            return height - y(d.dichtheid);
                        });
                });

                function type(d) {
                    d.dichtheid = +d.dichtheid;
                    return d;
                }
            }
        }
    });
}