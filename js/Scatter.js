var widtha = 455;
var heighta = 445;
// var padding = { top: 10, bottom: 10, left: 10, right: 10 }
var K = 0;
var r = 0

var ssvg = 0;

var orret_g = 0

var ScattermyChart;

var name_x = [];

var k_in_num = 0;
let glyphRader = 0;
var kmain = new Array();
var force_g = 0;
// var main = 0;
// var zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

// function zoomed() {
//     ssvg.attr("transform",
//         "translate(" + zoom.translate() + ")" +
//         "scale(" + zoom.scale() + ")"
//     );
// }

// function interpolateZoom(translate, scale) {
//     var self = this;
//     return d3.transition().duration(350).tween("zoom", function () {
//         var iTranslate = d3.interpolate(zoom.translate(), translate),
//             iScale = d3.interpolate(zoom.scale(), scale);
//         return function (t) {
//             zoom
//                 .scale(iScale(t))
//                 .translate(iTranslate(t));
//             zoomed();
//         };
//     });
// }
colorscatter = ['#4608CC', '#E80111', '#8E552A', '#DD3C6B', '#30C9AB',
    '#5C0C31', '#92EB3F', '#2B30E5', '#BBF324', '#8AD917', '#044F23',
    '#EA40FD', '#676DA5', '#A97C75', '#CD1285', '#0CE25F', '#66FF65', '#E6660E', '#36DD9B', '#C2B4CD',
    '#E09731', '#453E6A', '#3ACFAB', '#D1DDFD', '#D50D6A', '#EEB457',
    '#AD76DC', '#3B8E4A', '#C99495', '#474BAA', '#ABC33D', '#45D618', '#534CE0',
    '#A8E6F7', '#53EC18', '#FB7C58', '#5B158C', '#A76002', '#88A45C', '#FDAB06',
    '#F05862', '#A4FE88', '#5D2A0F', '#72D33C', '#6C08E3', '#1302C8', '#1B1445',
    '#CAD467', '#DE3FE7', '#8FEFA7', '#522CA3', '#7504C5', '#195AA4', '#3B17AB',
    '#40B85D', '#D8C272', '#2FA5E3', '#69B012', '#F6AE80', '#88F189', '#EB97C7',
    '#1B81BB', '#607382', '#E9EBEF', '#DE8AAA', '#8FFBB9', '#A84054', '#480F29',
    '#F5C202', '#573EAA', '#4A0458', '#D7A9F7', '#D47867', '#EA846F', '#EC34A9',
    '#F9F3FC', '#B9EB69', '#8CDDB1', '#00BFD1', '#C6FD28', '#284CC5', '#745295'
]


function PP() {
    ssvg = d3.select("#Tsne").append("svg")
        .attr('id', 'SView')
        .attr("width", widtha)
        .attr("height", heighta)
    // .append('g')
    // .call(zoom)
    // .append('g')
    // .attr('class', 'zoomg')
    // .append("g")
    // // .attr("transform", "translate(0,100)")
    // .attr("transform", "translate(-10, 10)");
}

var pr = [];

var coort = [];

var tcircle = 0;
var flag = -1;
var heatmapInstance = h337.create({
    container: document.querySelector("#Tsne"),
    radius: 30,
    maxOpacity: 0.8,
    minOpacity: 0.6,
    // blur: .75,
    gradient: {
        '.95': 'red',
        '.75': 'orange',
        '.4': 'blue',
        '.3': 'yellow',
        '.0': '#00FF00',
        //   '.0': "rgba(33,102,172,0)",
        //                         '.0.01':  "#FFA079",
        // '.0.08': "#FF7F50",
        // '.0.15': "#FFBB3E",
        // '.22': "#FFA500",
        // '.29': "#FFD700",
        // '.36': "#e2dc00",
        // '.43': "#ADFF2F",
        // '.5': "#00FF7F",
        // '.57': "#00CED1",
        // '.64': "#00FFFF",
        // '.71': "#1E90FF",
        // '.78': "#0000FF",
        // '.85': "#8A2BE2",
        // '.92': "#7B68EE",
        // '.99': "#EE82EE"
        // '.11': 'rgba(227, 184, 193)',
        // '.25': 'rgba(194, 140, 124)',
        // '.39': 'rgba(217, 169, 130)',
        // '.50': 'rgba(242, 206, 133)',
        // '.65': 'rgba(242, 224, 150)',
        // '.70': 'rgba(242, 238, 162)',
        // '.85': 'rgba(176, 196, 124)',
        // '.99': 'rgba(112, 153, 89)',
        // '.99': 'rgba()',
    }
});

var lay_heat = 0;

PP()

function DrawHeat() {

    // console.log(data)
    // if (heatmapInstance != 0) {
    //     heatmapInstance.remove();
    //     heatmapInstance = 0;
    // }
    d3.json(fileURL).then((HeatD) => {
        // console.log(HeatD)

        if (tcircle != 0) {
            tcircle.remove();
            tcircle = 0;
        }
        // if (main != 0) {
        //     main.remove();
        //     main = 0;
        // }
        if (scatterlinein != 0) {
            scatterlinein.remove();
            scatterlinein = 0;
        }
        if (kmain.length != 0) {
            for (let i in kmain) {
                kmain[i].remove();
            }
            kmain = new Array();
        }

        if (glyphRader != 0) {
            glyphRader.remove();
            glyphRader = 0;
        }

        if (force_g != 0) {
            force_g.remove();
            force_g = 0;
        }

        data = HeatD

        var points = []
        var kmax = 0;
        var padding = {
            top: 5,
            right: 10,
            bottom: 5,
            left: 10
        };
        heatmapInstance = h337.create({
            container: document.querySelector("#Tsne"),
            radius: 10,
            maxOpacity: 0.8,
            minOpacity: 0.6,
            // blur: .75,
            gradient: {
                '.95': 'red',
                '.75': 'orange',
                '.4': 'blue',
                '.3': 'yellow',
                '.0': '#00FF00',
                //   '.0': "rgba(33,102,172,0)",
                //                         '.0.01':  "#FFA079",
                // '.0.08': "#FF7F50",
                // '.0.15': "#FFBB3E",
                // '.22': "#FFA500",
                // '.29': "#FFD700",
                // '.36': "#e2dc00",
                // '.43': "#ADFF2F",
                // '.5': "#00FF7F",
                // '.57': "#00CED1",
                // '.64': "#00FFFF",
                // '.71': "#1E90FF",
                // '.78': "#0000FF",
                // '.85': "#8A2BE2",
                // '.92': "#7B68EE",
                // '.99': "#EE82EE"
                // '.11': 'rgba(227, 184, 193)',
                // '.25': 'rgba(194, 140, 124)',
                // '.39': 'rgba(217, 169, 130)',
                // '.50': 'rgba(242, 206, 133)',
                // '.65': 'rgba(242, 224, 150)',
                // '.70': 'rgba(242, 238, 162)',
                // '.85': 'rgba(176, 196, 124)',
                // '.99': 'rgba(112, 153, 89)',
                // '.99': 'rgba()',
            }
        });


        // var xAxisWidth = widtha - padding.right;
        // var yAxisWidth = heighta - padding.bottom;
        // var xScale = d3.scaleLinear()
        //     .domain([d3.min(data, function (d) {
        //         return parseFloat(d.x);
        //     }), d3.max(data, function (d) {
        //         return parseFloat(d.x);
        //     })])
        //     .range([padding.left, xAxisWidth]);
        // var yScale = d3.scaleLinear()
        //     .domain([d3.min(data, function (d) {
        //         return parseFloat(d.y);
        //     }), d3.max(data, function (d) {
        //         return parseFloat(d.y);
        //     })])
        //     .range([padding.top, yAxisWidth]);var xAxisWidth = widtha;
        var min_xx = 999999,
            min_yy = 999999,
            max_xx = -999999,
            max_yy = -999999
        for (var i in data) {
            if (min_xx > parseFloat(data[i].x)) min_xx = parseFloat(data[i].x);
            if (min_yy > parseFloat(data[i].y)) min_yy = parseFloat(data[i].y);
            if (max_xx < parseFloat(data[i].x)) max_xx = parseFloat(data[i].x);
            if (max_yy < parseFloat(data[i].y)) max_yy = parseFloat(data[i].y);
        }

        var xAxisWidth = widtha;
        var yAxisWidth = heighta;
        var xScale = d3.scaleLinear()
            .domain([min_xx, max_xx])
            .range([50, xAxisWidth - 50]);
        var yScale = d3.scaleLinear()
            .domain([min_yy, max_yy])
            .range([50, yAxisWidth - 50]);

        // var kk_data = []
        // for (var i = Math.floor(min_xx + 5) - 10; i <= Math.floor(max_xx - 5) + 10; i += 10) {
        //     for (var j = Math.floor(min_yy + 5) - 10; j <= Math.floor(max_yy - 5) + 10; j += 10) {
        //         var m_val = 0,
        //             m_num = 0;
        //         for (var k in data) {
        //             if (parseFloat(data[k].x) >= i - 5 && parseFloat(data[k].x) < i + 5 && parseFloat(data[k].y) >= j - 5 && parseFloat(data[k].y) < j + 5) {
        //                 m_val += parseFloat(data[k].val)
        //                 m_num++;
        //             }
        //         }
        //         var n_val = 0;
        //         if (m_num != 0) n_val = m_val / m_num;
        //         var rcx = {
        //             x: i,
        //             y: j,
        //             val: n_val
        //         }
        //         // if (m_num != 0)
        //         kk_data.push(rcx);
        //     }
        // }

        // kk_data = [data[1], data[2], data[3]]
        var kmin = 999999
        // console.log(kk_data)
        for (i in data) {
            points.push({
                x: Math.round(xScale(data[i].x), 5),
                y: Math.round(yScale(data[i].y), 5),
                value: 100,
                // value: -1
                // radius: 70
            })
        }
        // for (var i = 1; i <= 370; i += 5) {
        //     for (var j = 1; j <= 370; j += 5) {
        //         points.push({
        //             x: i,
        //             y: j,
        //             value: 0
        //         })
        //     }

        // }
        // console.log(points)
        var heat_data = {
            max: Math.floor(kmax),
            // min: Math.floor(-250),
            data: points
        }
        heatmapInstance.setData(heat_data);
        console.log(1);
    })

}
// DrawHeat()
function ScatterPaint_gain_loss() {
    d3.json('data/ts/20200831db.json').then((coor) => {
        d3.csv('data/box_calc.csv').then((rectdata) => {
            // console.log(rdata);

            if (glyphRader != 0) {
                glyphRader.remove();
                glyphRader = 0;
            }
            if (scatterlinein != 0) {
                scatterlinein.remove();
                scatterlinein = 0;
            }

            if (kmain.length != 0) {
                for (let i in kmain) {
                    kmain[i].remove();
                }
                kmain = new Array();
            }

            if (force_g != 0) {
                force_g.remove();
                force_g = 0;
            }

            // if (main != 0) {
            //     main.remove();
            //     main = 0;
            // }

            heatmapInstance.setData({
                max: 0,
                data: []
            });
            var tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltipx")
                .style("opacity", 0.0)

            var NameValue = new Object();

            for (var i in rectdata) {
                // console.log(i);
                NameValue[rectdata[i].code + rectdata[i].biao] = parseInt(rectdata[i][12]);
            }

            // console.log(NameValue)

            if (tcircle != 0) tcircle.remove()
            if (r != 0) r.remove()

            var sequentialScale = d3.scaleSequential()
                .domain([0, 60])
                .interpolator(d3.interpolateRainbow);


            // DrawHeat(coor)
            var padding = {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10
            };
            let max_x = -999999,
                min_x = 99999,
                max_y = -99999,
                min_y = 999999

            for (var i = 0; i < coor.length; ++i) {
                console.log(coor[i]);
                max_x = Math.max(max_x, parseFloat(coor[i].x))
                max_y = Math.max(max_y, parseFloat(coor[i].y))
                min_x = Math.min(min_x, parseFloat(coor[i].x))
                min_y = Math.min(min_y, parseFloat(coor[i].y))
            }

            var xAxisWidth = widtha;
            var yAxisWidth = heighta;
            console.log(max_y)
            var xScale = d3.scaleLinear()
                .domain([min_x, max_x])
                .range([20, xAxisWidth]);

            var yScale = d3.scaleLinear()
                .domain([min_y, max_y])
                .range([10, yAxisWidth - 10]);

            // var h_line = [-25, 25, -50, 50, min_x, max_x],
            //     s_line = [-25, 25, -50, 50, min_y, max_y]
            // ssvg.selectAll('#x_line')
            //     .attr('id', 'x_line')
            //     .data(h_line)
            //     .enter()
            //     .append('g')
            //     .append('line')
            //     .attr('x1', d => {
            //         return xScale(d)
            //     })
            //     .attr('y1', (d, i) => {
            //         return yScale(min_y)
            //     })
            //     .attr('x2', d => {
            //         return xScale(d)
            //     })
            //     .attr('y2', (d, i) => {
            //         return yScale(max_y)
            //     })
            //     .attr('fill', 'none')
            //     .attr('stroke', '#0a3c75')
            //     .attr('stroke-width', 0.1)
            //     .attr('stroke-opacity', 0.4)
            //     .attr('stroke-dasharray', 5.5)

            // ssvg.selectAll('#x_line')
            //     .attr('id', 'x_line')
            //     .data(s_line)
            //     .enter()
            //     .append('g')
            //     .append('line')
            //     .attr('x1', d => {
            //         return xScale(min_x)
            //     })
            //     .attr('y1', d => {
            //         return yScale(d)
            //     })
            //     .attr('x2', d => {
            //         return xScale(max_x)
            //     })
            //     .attr('y2', d => {
            //         return yScale(d)
            //     })
            //     .attr('fill', 'none')
            //     .attr('stroke', '#0a3c75')
            //     .attr('stroke-width', 0.1)
            //     .attr('stroke-opacity', 0.4)
            //     .attr('stroke-dasharray', 5.5)


            // var xAxis = d3.svg.axis().scale(xScale).ticks(0).tickFormat(d3.format()).orient("bottom");
            // var yAxis = d3.svg.axis().scale(yScale).ticks(0).tickFormat(d3.format()).orient("left"); //添加一个g用于放x轴

            // ssvg.append("g")
            //     .attr("class", "axis")
            //     .attr("transform", "translate(" + 0 + "," + yScale(0) + ")")
            //     .call(xAxis)
            // ssvg.append("g")
            //     .attr("class", "axis")
            //     .attr("transform", "translate(" + xScale(0) + "," + 0 + ")")
            //     .call(yAxis)


            // var color = ['#00a676', '#f9c80e', '#3abeff', '#df19c1', '#ff206e', '#f08700', '#0091c9']
            var color = ['#2fe9b3', '#2f8fe9', '#c32fe9', '#e92f9c', '#2E8B57', '#e4e92f', '#FFFACD']
            var a = d3.rgb(255, 0, 0); //红色
            // var b = d3.rgb(0, 255, 0); //绿色
            var b = '#00FF00'

            var compute = d3.interpolate(a, b);

            // console.log(coor[1])
            var linear = d3.scaleLinear()
                .domain([-550, 550])
                .range([0, 1]);
            // var klun = new Array();
            // for (let i in coor) {
            //     if (coor[i].l == number)
            //     klun.push(coor[i]);
            // }
            // if (p == -1) {
            tcircle = ssvg.append('g').selectAll("circle")
                .data(coor)
                .enter()
                .append("circle")
                .attr("fill", (d, i) => {
                    // if (d.l == num)
                    // if (coor[i]['val'] <= 0)
                    //     return 'red'
                    // // return compute(linear(parseFloat(num_coor[i][91])))
                    // else
                    //     return '#00FF00'
                    // else return 'none'
                    // console.log(d)

                    // return sequentialScale(d.label);

                    // return colorscatter[d.label];
                    return 'black'

                    if (NameValue[d.id + d.l] == 2)
                        return "#D8483E";
                    else if (NameValue[d.id + d.l] == 1) {
                        return "#F3AC2A";
                    } else
                        return "#41CA77";
                })
                // .attr('fill-opacity', d => {
                //     if (d.label == 24)
                //     return 1;
                //     else 
                //     return 1;
                // })
                // .attr("fill-opacity", 0.5)
                .attr("id", "circleid")
                .attr("cx", function (d) {
                    //console.log(d);
                    return Math.round(xScale(parseFloat(d.x), 5));
                })
                .attr("cy", function (d) {
                    return Math.round(yScale(parseFloat(d.y), 5));
                })
                .attr("r", 2)
                .attr('stroke', (d, i) => {
                    //if (d.l == num)
                    return 'white'

                    // if (NameValue[d.id + d.l] == 2)
                    //     return "#D8483E";
                    // else if (NameValue[d.id + d.l] == 1) {
                    //     return "#F3AC2A";
                    // } else
                    //     return "#41CA77";
                })
                .attr('stroke-width', 0)
                .attr('fill-opacity', 0.6)
                .on('mouseover', d => {
                    // console.log(d);
                    tcircle.attr('fill-opacity', x => {
                        if (x.label != d.label)
                            return 0.01;
                    }).attr('fill', x => {
                        if (x.label != d.label)
                            return 'gray';
                        else return colorscatter[x.label];
                    })
                })
                .on('mouseout', d => {
                    tcircle.attr("fill-opacity", 0.6)
                        .attr("fill", d => colorscatter[d.label]);
                })
                .on('click', d => {
                    // console.log(d);
                    typeSelect = 1;
                    knamea = new Object()
                    for (let i in coor) {
                        if (coor[i].label == d.label && coor[i].l == number) {
                            knamea[coor[i].id] = 1;
                        }
                    }
                    LineName
                        .attr('stroke-opacity', (x) => {
                            // for (let r in select_name) {
                            //     if (x.code == select_name[r])
                            //         return 1;
                            // }
                            if (knamea[x.code])
                                return 0.5;
                            else
                                return 0
                        })
                        .attr('stroke', (x) => {
                            // for (let r in select_name) {
                            //     if (x.code == select_name[r])
                            //         return 1;
                            // }
                            if (knamea[x.code])
                                return 'orange';
                            else
                                return 'none';
                        })
                    for (k in Line_Name) {
                        Line_Name[k]
                            .attr('stroke-opacity', (x) => {
                                // for (let r in select_name) {
                                //     if (x.code == select_name[r])
                                //         return 1;
                                // }
                                if (knamea[x.code])
                                    return 0.5;
                                else
                                    return 0
                            })
                            .attr('stroke', (x) => {
                                // for (let r in select_name) {
                                //     if (x.code == select_name[r])
                                //         return 1;
                                // }
                                if (knamea[x.code])
                                    return 'orange';
                                else
                                    return 'none';
                            })
                    }

                    RadarGlyph(d.label, 7);
                    axisSelect(fileURL, d.label);
                })
            // .on("mouseover", function (d, i) {
            //     // tooltip.html("Code: " + d.id + "</br>" + "Value: " + d.val)
            //     //     .style("left", (d3.event.pageX - 15) + "px")
            //     //     .style("top", (d3.event.pageY + 0) + "px")
            //     //     .style("opacity", 1.0)
            //     // console.log(d)
            //     console.log(d)
            //     d3.select(this)
            //         .attr("fill", d => {
            //             if (d.val > 0)
            //                 return '#00FF00'
            //             else
            //                 return 'red'
            //         })
            //         .attr('fill-opacity', 1)
            // })
            // .on("mouseout", function (d, i) {
            //     // if (k_in_num)
            //     d3.select(this)
            //         .attr("fill", d => {
            //             return 'white';
            //         });
            //     // tooltip.style("opacity", 0.1)
            // });
            // var brush = d3.svg.brush()
            //     .x(xScale)
            //     .y(yScale)
            //     .extent([
            //         [0, 0],
            //         [0, 0]
            //     ])
            //     .on("brush", brushed)

            // // console.log(coor)

            // var name_brush = {};

            // function brushed() {
            //     var extent = brush.extent();
            //     var xmin = extent[0][0];
            //     var xmax = extent[1][0];
            //     var ymin = extent[0][1];
            //     var ymax = extent[1][1];

            //     // console.log(ymin)
            //     // console.log(ymax)
            //     // console.log(xmax)
            //     // console.log(xmin)
            //     // console.log(coor[0])
            //     var nnnnn = []
            //     let identity = []
            //     for (var i in coor) {
            //         if (coor[i].x >= xmin && coor[i].x <= xmax && coor[i].y >= ymin && coor[i].y <= ymax) {
            //             name_brush[coor[i].id] = 1;
            //             nnnnn.push(coor[i].id)
            //             identity.push(coor[i]);
            //         }
            //     }

            //     // console.log(nnnnn)
            //     // console.log(name_brush[nnnnn[0]])

            //     // if (K == 0) {
            //     var coor_p = {}

            //     for (var i in pf) {
            //         // console.log(pf[i][0])
            //         if (name_brush[pf[i][0].id] == 1) {
            //             coor_p[i] = pf[i];
            //         }
            //     }

            //     // console.log(coor_p)
            //     // console.log(coor)

            //     var coor_path = PathCalc(coor_p, -1, -1);
            //     // console.log()

            //     // console.log(coor_path[1])

            //     // var n__ = []
            //     // for (var i in coor_path[1]) {
            //     //     n__.push(i)
            //     // }

            //     // OrRect(n__, color[flag])

            //     if (LineName != 0) LineName.remove();

            //     LinePaint_2(coor_path[0], coor_path[2], color[1])
            //     // K = 1;
            //     // }
            //     if (identity.length != 0)
            //         d3.csv('data/box.csv').then((d1) => {
            //             d = []
            //             for (let i in d1) {
            //                 if (parseInt(d1[i].biao) == num)
            //                     d.push(d1[i])
            //             }
            //             // PaintTypeZ(d, name_brush);
            //         })

            //     // console.log(flag)



            // }

            // // console.log(flag)
            // r = ssvg.append("g")
            //     .call(brush)
            //     .selectAll("rect")
            //     .style("fill-opacity", 0.3)
            // // } else {
            //     tcircle = ssvg.append('g').selectAll("circle")
            //         .data(coor)
            //         .enter()
            //         .append("circle")
            //         .attr("fill", (d, i) => {
            //             // console.log(d)
            //             if (d.l == num)
            //                 // if (coor[i]['val'] <= 0)
            //                 //     return 'red'
            //                 // // return compute(linear(parseFloat(num_coor[i][91])))
            //                 // else
            //                 //     return '#00FF00'
            //                 // else return 'none'
            //                 return 'white'
            //             else
            //                 return 'none'
            //         })
            //         // .attr("fill-opacity", 0.5)
            //         .attr("id", "circleid")
            //         .attr("cx", function (d) {
            //             //console.log(d);
            //             return xScale(d.x);
            //         })
            //         .attr("cy", function (d) {
            //             return yScale(d.y);
            //         })
            //         .attr("r", 3)
            //         .attr('stroke', (d, i) => {
            //             if (d.l == num)
            //                 // return 
            //                 if (d.val <= 0)
            //                     return 'red'
            //             // return compute(linear(parseFloat(num_coor[i][91])))
            //             else
            //                 // return '#00FF00'
            //                 return 'green'
            //             else 'none';
            //             // if (coor[i]['xval'] <= 0)
            //             //     return 'red'
            //             // // return compute(linear(parseFloat(num_coor[i][91])))
            //             // else
            //             //     return '#00FF00'
            //             // return 'blue'
            //         })
            //         .attr('stroke-width', 0.1)
            //         // .attr('fill-opacity', 0.3)
            //         .on("mouseover", function (d, i) {
            //             // tooltip.html("Code: " + d.id + "</br>" + "Value: " + d.val)
            //             //     .style("left", (d3.event.pageX - 15) + "px")
            //             //     .style("top", (d3.event.pageY + 0) + "px")
            //             //     .style("opacity", 1.0)
            //             // console.log(d)
            //             d3.select(this)
            //                 .attr("fill", d => {
            //                     if (d.val > 0)
            //                         return '#00FF00'
            //                     else
            //                         return 'red'
            //                 })
            //                 .attr('fill-opacity', 1)

            //         })
            //         // .on("mousemove", d => {
            //         //     // tooltip.style("left", (d3.event.pageX - 15) + "px")
            //         //     //     .style("top", (d3.event.pageY + 0) + "px")
            //         // })
            //         .on("mouseout", function (d, i) {
            //             d3.select(this)
            //                 .attr("fill", d => {
            //                     return 'white';
            //                 });
            //             // tooltip.style("opacity", 0.1)
            //         })
            //         .on('click', function (d, i) {
            //             d3.select(this)
            //                 .attr('r', 5)
            //                 .attr('fill', d => {
            //                     if (d.val > 0)
            //                         return '#00FF00'
            //                     else
            //                         return 'red'
            //                 })
            //             kname = d.id;
            //             if (d_num == 0) {
            //                 if (judge_cir_line == 0)
            //                     Paintjudge(kname);
            //                 else
            //                     PaintCir(kname);
            //                 PaintSha(number, kname, i);
            //                 IceLine(kname, num)
            //             } else {
            //                 // if (cnt_num < 1) {
            //                 //     cnt_num++;
            //                 //     name_in.push(d)
            //                 //     if (judge_cir_line == 1)
            //                 //         PaintCir(d)
            //                 //     else
            //                 //         Paintjudge(d)
            //                 // } else {
            //                 cnt_num++;
            //                 name_x.push(kname)
            //                 if (judge_cir_line == 1) {
            //                     PaintCir_2(name_x)
            //                 } else {
            //                     Paintjudge_2(name_x)
            //                 }
            //                 // name_in = []
            //                 // cnt_num = 0
            //                 // }
            //                 IceLine_2(name_x, num)
            //                 PaintSha_2(number, name_x, i);
            //             }
            //         });
            //     var brush = d3.svg.brush()
            //         .x(xScale)
            //         .y(yScale)
            //         .extent([
            //             [0, 0],
            //             [0, 0]
            //         ])
            //         .on("brush", brushed)

            //     // console.log(coor)

            //     var name_brush = {};

            //     function brushed() {
            //         var extent = brush.extent();
            //         var xmin = extent[0][0];
            //         var xmax = extent[1][0];
            //         var ymin = extent[0][1];
            //         var ymax = extent[1][1];

            //         // console.log(ymin)
            //         // console.log(ymax)
            //         // console.log(xmax)
            //         // console.log(xmin)
            //         // console.log(coor[0])
            //         var nnnnn = []
            //         let identity = []
            //         for (var i in coor) {
            //             if (coor[i].l == num && coor[i].x >= xmin && coor[i].x <= xmax && coor[i].y >= ymin && coor[i].y <= ymax) {
            //                 name_brush[coor[i].id] = 1;
            //                 nnnnn.push(coor[i].id)
            //                 identity.push(coor[i]);
            //             }
            //         }

            //         // console.log(nnnnn)
            //         // console.log(name_brush[nnnnn[0]])

            //         // if (K == 0) {
            //         var coor_p = {}

            //         for (var i in pf) {
            //             // console.log(pf[i][0])
            //             if (name_brush[pf[i][0].id] == 1) {
            //                 coor_p[i] = pf[i];
            //             }
            //         }

            //         // console.log(coor_p)
            //         // console.log(coor)

            //         var coor_path = PathCalc(coor_p, -1, -1);
            //         // console.log()

            //         // console.log(coor_path[1])

            //         // var n__ = []
            //         // for (var i in coor_path[1]) {
            //         //     n__.push(i)
            //         // }

            //         // OrRect(n__, color[flag])

            //         if (LineName != 0) LineName.remove();

            //         LinePaint_2(coor_path[0], coor_path[2], color[1])
            //         // K = 1;
            //         // }
            //         if (identity.length != 0)
            //             d3.csv('data/box.csv', function (d1) {
            //                 d = []
            //                 for (let i in d1) {
            //                     if (parseInt(d1[i].biao) == num)
            //                         d.push(d1[i])
            //                 }
            //                 PaintTypeZ(d, name_brush);
            //             })

            //         // console.log(flag)



            //     }

            //     // console.log(flag)
            //     r = ssvg.append("g")
            //         .call(brush)
            //         .selectAll("rect")
            //         .style("fill-opacity", 0.3)
            // }


            // console.log(tcircle)

            // coor.length = 0;
        })
    })
}
var scatterlinein = 0;
ScatterPaint_gain_loss();

function scatterline(name) {
    // PP()
    // for (var i in coor) {
    //     coor[i]['val'] = parseFloat(num_coor[i][91])
    // }

    // console.log(coor)
    // console.log(rectdata)
    d3.json(fileURL).then((coor) => {

        if (scatterlinein != 0) {
            scatterlinein.remove();
            scatterlinein = 0;
        }
        if (glyphRader != 0) {
            glyphRader.remove();
            glyphRader = 0;
        }


        if (kmain.length != 0) {
            for (let i in kmain) {
                kmain[i].remove();
            }
            kmain = new Array();
        }

        if (force_g != 0) {
            force_g.remove();
            force_g = 0;
        }

        // if (main != 0) {
        //     main.remove();
        //     main = 0;
        // }

        heatmapInstance.setData({
            max: 0,
            data: []
        });
        var tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltipx")
            .style("opacity", 0.0)

        var NameValue = new Object();


        console.log(NameValue)

        // if (tcircle != 0) tcircle.remove()
        // if (r != 0) r.remove()
        tcircle.attr('opacity', 0.3);


        // DrawHeat(coor)
        var padding = {
            top: 5,
            right: 10,
            bottom: 5,
            left: 10
        };
        let max_x = -999999,
            min_x = 99999,
            max_y = -99999,
            min_y = 999999

        for (var i in coor) {
            max_x = Math.max(max_x, parseFloat(coor[i].x))
            max_y = Math.max(max_y, parseFloat(coor[i].y))
            min_x = Math.min(min_x, parseFloat(coor[i].x))
            min_y = Math.min(min_y, parseFloat(coor[i].y))
        }

        var xAxisWidth = widtha;
        var yAxisWidth = heighta;
        // var xScale = d3.scaleLinear()
        //     .domain([min_x, max_x])
        //     .range([30, xAxisWidth - 5]);
        // var yScale = d3.scaleLinear()
        //     .domain([min_y, max_y])
        //     .range([yAxisWidth - 30, 5]);
        var xScale = d3.scaleLinear()
            .domain([min_x, max_x])
            .range([20, xAxisWidth]);

        var yScale = d3.scaleLinear()
            .domain([min_y, max_y])
            .range([10, yAxisWidth - 10]);


        // var h_line = [-25, 25, -50, 50, min_x, max_x],
        //     s_line = [-25, 25, -50, 50, min_y, max_y]
        // ssvg.selectAll('#x_line')
        //     .attr('id', 'x_line')
        //     .data(h_line)
        //     .enter()
        //     .append('g')
        //     .append('line')
        //     .attr('x1', d => {
        //         return xScale(d)
        //     })
        //     .attr('y1', (d, i) => {
        //         return yScale(min_y)
        //     })
        //     .attr('x2', d => {
        //         return xScale(d)
        //     })
        //     .attr('y2', (d, i) => {
        //         return yScale(max_y)
        //     })
        //     .attr('fill', 'none')
        //     .attr('stroke', '#0a3c75')
        //     .attr('stroke-width', 0.1)
        //     .attr('stroke-opacity', 0.4)
        //     .attr('stroke-dasharray', 5.5)

        // ssvg.selectAll('#x_line')
        //     .attr('id', 'x_line')
        //     .data(s_line)
        //     .enter()
        //     .append('g')
        //     .append('line')
        //     .attr('x1', d => {
        //         return xScale(min_x)
        //     })
        //     .attr('y1', d => {
        //         return yScale(d)
        //     })
        //     .attr('x2', d => {
        //         return xScale(max_x)
        //     })
        //     .attr('y2', d => {
        //         return yScale(d)
        //     })
        //     .attr('fill', 'none')
        //     .attr('stroke', '#0a3c75')
        //     .attr('stroke-width', 0.1)
        //     .attr('stroke-opacity', 0.4)
        //     .attr('stroke-dasharray', 5.5)


        // var xAxis = d3.svg.axis().scale(xScale).ticks(0).tickFormat(d3.format()).orient("bottom");
        // var yAxis = d3.svg.axis().scale(yScale).ticks(0).tickFormat(d3.format()).orient("left"); //添加一个g用于放x轴

        // ssvg.append("g")
        //     .attr("class", "axis")
        //     .attr("transform", "translate(" + 0 + "," + yScale(0) + ")")
        //     .call(xAxis)
        // ssvg.append("g")
        //     .attr("class", "axis")
        //     .attr("transform", "translate(" + xScale(0) + "," + 0 + ")")
        //     .call(yAxis)


        // var color = ['#00a676', '#f9c80e', '#3abeff', '#df19c1', '#ff206e', '#f08700', '#0091c9']
        var color = ['#2fe9b3', '#2f8fe9', '#c32fe9', '#e92f9c', '#2E8B57', '#e4e92f', '#FFFACD']
        var a = d3.rgb(255, 0, 0); //红色
        // var b = d3.rgb(0, 255, 0); //绿色
        var b = '#00FF00'

        var compute = d3.interpolate(a, b);

        var linear = d3.scaleLinear()
            .domain([-550, 550])
            .range([0, 1]);

        linelist = [];

        for (let i in coor) {
            if (coor[i].id == name) {
                linelist.push(coor[i]);
            }
        }

        var lineGen = d3.line()
            .x(function (d) {
                return xScale(d.x);
            })
            .y(function (d) {
                return yScale(d.y);
            });

        console.log(linelist)

        scatterlinein = ssvg.append('path')
            .attr('d', lineGen(linelist))
            // .attr('fill', 'blue');
            .attr('stroke', 'blue')
            .attr('stroke-width', 2)
            .attr('fill', 'none');

    })
}

// function DrawForce() {
//     d3.json('data/ts/20200831db.json', function (coor) {
//         d3.csv('data/box_calc.csv', function (rectdata) {
//             let nodes = new Array();
//             for (let i = 0; i <= 23; ++i) {
//                 nodes.push({
//                     name: i
//                 })
//             }

//             let edges = new Array();
//             let ed = new Object();

//             for (let i = 0; i < 24; ++i) {
//                 for (let j = 0; j < 24; ++j) {
//                     if (j >= i) {
//                         ed[i * 100 + j] = {
//                             source: i,
//                             target: j,
//                             relation: "",
//                             value: 0
//                         }
//                         ed[j * 100 + i] = ed[i * 100 + j];
//                     }
//                 }
//             }

//             let nameData = new Object();
//             for (let i in coor) {
//                 if (typeof (nameData[coor[i].id]) == 'undefined') {
//                     nameData[coor[i].id] = new Array();
//                 }
//                 nameData[coor[i].id].push(coor[i]);
//             }

//             for (let i in nameData) {
//                 for (let j = 0; j < 19; ++j) {
//                     ed[nameData[i][j].label * 100 + nameData[i][j + 1].label].value++;
//                 }
//             }

//             let ssss = 0;
//             for (let i = 0; i < 24; ++i) {
//                 for (let j = 0; j < 24; ++j) {
//                     if (j >= i) {
//                         edges.push(ed[i * 100 + j])
//                         ssss += ed[i * 100 + j].value;
//                     }
//                 }
//             }


//         })
//     })
// }

// DrawForce();


function getColor(idx) {
    var palette = [
        '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
        '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
        '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
        '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
    ]
    return palette[idx % palette.length];
}

function Rader(data, x, y, zoom) {
    // console.log(number)
    let main = ssvg.append('g')
        .classed('main', true)
        .attr('transform', "translate(" + x + ',' + (y) + ')');
    // console.log(data)
    // 设定一些方便计算的常量
    var radius = 50 * zoom,
        linelen = 60 * zoom,
        lineWid = 5 * zoom,
        // 指标的个数，即fieldNames的长度
        total = 7,
        // 需要将网轴分成几级，即网轴上从小到大有多少个正多边形
        level = 3,
        // 网轴的范围，类似坐标轴
        rangeMin = 0,
        rangeMax = 60,
        arc = 2 * Math.PI;
    // 每项指标所在的角度
    var onePiece = arc / total;
    // 计算网轴的正多边形的坐标
    var polygons = {
        webs: [],
        webPoints: []
    };
    var outCircleRadius = radius * 7 / 6;
    var inCircleRadius = radius / 3;

    for (var k = level; k > 0; k--) {
        var webs = '',
            webPoints = [];
        var r = (radius * 7 / 6) / level * k + inCircleRadius;
        for (var i = 0; i < total; i++) {
            // if (i != 1) continue
            var x = r * Math.sin(i * onePiece),
                y = r * Math.cos(i * onePiece);
            webs += x + ',' + y + ' ';
            webPoints.push({
                x: x,
                y: y
            });
            // if (i == 0) {
            //     liner.append('line')
            //         .attr('x1', x)
            //         .attr('y1', y - lineWid / 2)
            //         .attr('x2', x + linelen)
            //         .attr('y2', y - lineWid / 2)
            //         .attr('fill', 'none')
            //         .attr('stroke', getColor(k))
            //         .attr('stroke-width', lineWid);
            // }
        }
        polygons.webs.push(webs);
        polygons.webPoints.push(webPoints);
    }
    // 绘制网轴
    var webs = main.append('g')
        .classed('webs', true);

    for (let i in data.vlen) {
        let vsum = 0;
        for (let k in data.vlen[i]) {
            vsum += data.vlen[i][k];
        }
        // console.log(vsum);
        for (var k = level; k > 0; k--) {
            var r = radius / level * k + inCircleRadius;
            var x = r * Math.sin(i * onePiece),
                y = r * Math.cos(i * onePiece);
        }
    }

    // webs.selectAll('polygon')
    //     .data(polygons.webs)
    //     .enter()
    //     .append('polygon')
    //     .attr('points', function (d) {
    //         return d;
    //     });
    // console.log(polygons.webPoints[0])
    // 添加纵轴
    var lines = main.append('g')
        .classed('lines', true);
    lines.selectAll('#linekkk')
        .attr('id', "linekkk")
        .data(polygons.webPoints[0])
        .enter()
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', function (d) {
            // console.log(d.x);
            return d.x;
        })
        .attr('y2', function (d) {
            return d.y;
        })
        .attr('fill', 'none')
        .attr('stroke', 'gray')
        .attr("stroke-width", 1)
        .attr('stroke-dasharray', 5);
    var DecisionCircle = new Array();
    for (var i = 0; i < total; ++i) {
        var x = Math.sin(i * onePiece),
            y = Math.cos(i * onePiece);
        if (i == 1 || i == 2) {
            for (var j = 3; j > 0; --j) {
                var r = radius * (j / 3) + inCircleRadius;
                DecisionCircle.push({
                    x: x * r,
                    y: y * r
                })
            }
        } else {
            for (var j = 3; j > 1; --j) {
                var r = radius * (j / 3) + inCircleRadius;
                DecisionCircle.push({
                    x: x * r,
                    y: y * r
                })
            }
        }
    }
    lines.selectAll('#cir_kkkkk')
        .attr('id', 'cir_kkkkk')
        .data(DecisionCircle)
        .enter()
        .append('circle')
        .attr('cx', d => {
            return d.x;
        })
        .attr('cy', d => {
            return d.y;
        })
        .attr('r', 3 * zoom)
        .attr('fill', 'steelblue')
        .attr('stroke', 'gray')
        .attr('stroke-width', 0.5);
    // 计算雷达图表的坐标
    var areasData = [];
    var values = data.values;
    for (var i = 0; i < values.length; i++) {
        var value = values[i],
            area = '',
            points = [];
        for (var k = 0; k < total; k++) {
            // var r = radius * (value[k] - rangeMin) / (rangeMax - rangeMin);
            // console.log(((value[k]) / rangeMax))
            var r = radius * ((value[k]) / rangeMax) + inCircleRadius;
            var x = r * Math.sin(k * onePiece),
                y = r * Math.cos(k * onePiece);
            area += x + ',' + y + ' ';
            points.push({
                x: x,
                y: y
            })
        }
        areasData.push({
            polygon: area,
            points: points
        });
    }
    // console.log(data);
    // 添加g分组包含所有雷达图区域
    var areas = main.append('g')
        .classed('areas', true);
    // 添加g分组用来包含一个雷达图区域下的多边形以及圆点 
    areas.selectAll('g')
        .data(areasData)
        .enter()
        .append('g')
        .attr('class', function (d, i) {
            return 'area' + (i + 1);
        });
    var nameDict = new Object();
    var nameNum = new Object();
    var nameDictIn = new Object();
    for (let i in data.people) {
        // if (data.people[i].l == number)
        if (typeof (nameDictIn[data.people[i].id]) == "undefined") {
            nameDictIn[data.people[i].id] = new Object();
        }
        // console.log(nameDictIn[data.people[i].id]);
        nameDictIn[data.people[i].id][parseInt(data.people[i]['l']) - 1] = 1;
        nameDict[data.people[i].id] = 1;
    }

    var p_name_cnt = 0;

    for (let i in PeoLine) {
        nameNum[i] = p_name_cnt;
        p_name_cnt++;
    }
    // console.log(nameDictIn)

    // TODO: Rader area 重画雷达区域
    for (var i = 0; i < areasData.length; i++) {
        // 依次循环每个雷达图区域
        var area = areas.select('.area' + (i + 1)),
            areaData = areasData[i];
        // 绘制雷达图区域下的多边形
        // console.log(areaData)
        area.append('polygon')
            .attr('points', areaData.polygon)
            .attr('stroke', function (d, index) {
                return getColor(i);
            })
            .attr('fill', function (d, index) {
                // return getColor(i);
                return 'none';
            })
            .on('mouseover', (d, i) => {
                // console.log(data);
                for (let i in PeoLine) {
                    // console.log(i);
                    if (nameDict[i] != 1) {
                        PeoLine[i].attr("opacity", 0);
                    }
                }
                for (let k in nameDict) {
                    PeoCir[k].attr('fill-opacity', (d, i) => {
                        if (nameDictIn[k][i] == 1) {
                            // console.log(i);
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                }
            })
            .on('mouseout', (d, i) => {
                for (let i in PeoLine) {
                    // console.log(i);
                    // if (nameDict[i] != 1)
                    PeoLine[i].attr("opacity", 1);
                    PeoCir[i].attr('fill-opacity', 0);
                }
            })
        // 绘制雷达图区域下的点 
        // var circles = area.append('g')
        //     .classed('circles', true);
        // circles.selectAll('circle')
        //     .data(areaData.points)
        //     .enter()
        //     .append('circle')
        //     .attr('cx', function (d) {
        //         return d.x;
        //     })
        //     .attr('cy', function (d) {
        //         return d.y;
        //     })
        //     .attr('r', 2)
        //     .attr('stroke-width', 0.3)
        //     .attr('stroke', function (d, index) {
        //         return getColor(i);
        //     });
    }


    var liner = main.append('g')

    var line_generator = d3.line()
        .x(function (d, i) {
            return d.x;
        })
        .y(function (d) {
            return (d.y);
        })
        .curve(d3.curveMonotoneX)

    var area_generator = d3.area()
        .x(function (d, i) {
            return (d.y);
        })
        .y0(function (d, i) {
            return d.x0;
        })
        .y1(function (d) {
            return (d.x);
        })
        .curve(d3.curveMonotoneX)

    for (var i = 0; i < total; ++i) {
        // if (i != 1) continue;
        var line_sum = 0;
        var line_area_dataA = new Array();
        var line_area_dataB = new Array();
        for (k = level; k > 0; --k) {
            var r = radius / level * (k - 0.5) + inCircleRadius;
            line_area_dataA.push({
                x: 0,
                x0: 0,
                y: r
            })
            line_area_dataB.push({
                x: 0,
                x0: 0,
                y: r
            })
        }
        var r = radius / level * (3 + 0.5) + inCircleRadius;
        line_area_dataA.push({
            x: 0,
            x0: 0,
            y: r
        })
        line_area_dataB.push({
            x: 0,
            x0: 0,
            y: r
        })

        for (var k = level; k > 0; k--) {
            var r = radius / level * k + inCircleRadius;

            for (var j = 0; j < level; ++j) {
                line_sum += data.vlen[i][j];
            }
            let len = linelen / 2 * (data.vlen[i][3 - k] / line_sum)
            line_area_dataA.push({
                x: len,
                x0: 0,
                y: r
            });
            line_area_dataB.push({
                x: -len,
                x0: 0,
                y: r
            })
        }
        line_area_dataA.sort((a, b) => {
            return a.y - b.y;
        })

        line_area_dataB.sort((a, b) => {
            return a.y - b.y;
        })

        // liner.append('path')
        // .attr('d', area_generator(line_area_dataA))
        // .attr('fill', 'steelblue');

        // liner.append('path')
        // .attr('d', area_generator(line_area_dataB))
        // .attr('fill', 'steelblue');

        // liner.append('g')
        // .attr('transform', 'rotate('+ -(i * 360 / total) +')').append('path')
        // .attr('d', line_generator(line_area_dataA))
        // .attr('fill', 'steelblue')
        // .attr('stroke', 'steelblue')
        // .attr('stroke-width', 0)
        // .attr('fill-opacity', 0.5);

        // liner.append('g')
        // .attr('transform', 'rotate('+ -(i * 360 / total) +')').append('path')
        // .attr('d', line_generator(line_area_dataB))
        // .attr('fill', 'steelblue')
        // .attr('stroke', 'steelblue')
        // .attr('stroke-width', 0)
        // .attr('fill-opacity', 0.5);
        // console.log(line_area_dataA)
    }

    for (var i = 0; i < total; i++) {
        var line_sum = 0;
        var line_area_dataA = new Array();
        var line_area_dataB = new Array();

        // if (i == 1 || i == 2) {
        for (k = level; k > 0; k--) {
            var r = radius / level * (k - 0.5) + inCircleRadius;
            var x = r * Math.sin(i * onePiece),
                y = r * Math.cos(i * onePiece);
            line_area_dataA.push({
                x: x,
                y: y,
                y0: y
            });
            line_area_dataB.push({
                x: x,
                y: y,
                y0: y
            })
        }

        var r = radius / level * (3 + 0.5);
        var x = r * Math.sin(i * onePiece),
            y = r * Math.cos(i * onePiece);
        line_area_dataA.push({
            x: x,
            y: y,
            y0: y
        });
        line_area_dataB.push({
            x: x,
            y: y,
            y0: y
        })

        for (var k = level; k > 0; k--) {
            var r = radius / level * k + inCircleRadius;

            for (var j = 0; j < level; ++j) {
                line_sum += data.vlen[i][j];
            }
            var x = r * Math.sin(i * onePiece),
                y = r * Math.cos(i * onePiece);
            // webs += x + ',' + y + ' ';
            // webPoints.push({
            //     x: x,
            //     y: y
            // });
            let len = linelen / 2 * (data.vlen[i][3 - k] / line_sum),
                x_ = 0,
                y_ = 0;
            if (i == 0) {
                // liner.append('line')
                //     .attr('x1', x - len)
                //     .attr('y1', y)
                //     .attr('x2', x + len)
                //     .attr('y2', y)
                //     .attr('fill', 'none')
                //     .attr('stroke', getColor(k))
                //     .attr('stroke-width', lineWid);
            } else {
                y_ = len * Math.abs(x) / Math.sqrt(x * x + y * y);
                x_ = len * Math.abs(y) / Math.sqrt(x * x + y * y);
                if (x > 0 && y > 0) {
                    x_ = -x_;
                } else if (x < 0 && y > 0) {
                    x_ = -x_;
                    y_ = -y_;
                } else if (x < 0 && y < 0) {
                    y_ = -y_;
                }
                // liner.append('line')
                //     .attr('x1', x - x_)
                //     .attr('y1', y - y_)
                //     .attr('x2', x + x_)
                //     .attr('y2', y + y_)
                //     .attr('fill', 'none')
                //     .attr('stroke', getColor(k))
                //     .attr('stroke-width', lineWid);
                line_area_dataA.push({
                    x: x + x_,
                    y: y + y_,
                    y0: y
                });
                line_area_dataB.push({
                    x: x - x_,
                    y: y - y_,
                    y0: y
                });
            }
            // }
        }

        line_area_dataA.sort((a, b) => {
            return a.x - b.x;
        })

        line_area_dataB.sort((a, b) => {
            return a.x - b.x;
        })

        // liner.append('path')
        // .attr('d', area_generator(line_area_dataA))
        // .attr('fill', 'steelblue');

        // liner.append('path')
        // .attr('d', area_generator(line_area_dataB))
        // .attr('fill', 'steelblue');

        // liner.append('path')
        // .attr('d', line_generator(line_area_dataA))
        // .attr('fill', 'node')
        // .attr('stroke', 'black')
        // .attr('stroke-width', 1);

        // liner.append('path')
        // .attr('d', line_generator(line_area_dataB))
        // .attr('fill', 'node')
        // .attr('stroke', 'black')
        // .attr('stroke-width', 1);
        // console.log(line_area_dataA)


        // polygons.webs.push(webs);
        // polygons.webPoints.push(webPoints);
    }
    // 计算文字标签坐标
    // var textPoints = [];
    // var textRadius = radius + 20;
    // for (var i = 0; i < total; i++) {
    //     var x = textRadius * Math.sin(i * onePiece),
    //         y = textRadius * Math.cos(i * onePiece);
    //     textPoints.push({
    //         x: x,
    //         y: y
    //     });
    // }
    // // 绘制文字标签
    // var texts = main.append('g')
    //     .classed('texts', true);
    // texts.selectAll('text')
    //     .data(textPoints)
    //     .enter()
    //     .append('text')
    //     .attr('x', function (d) {
    //         return d.x;
    //     })
    //     .attr('y', function (d) {
    //         return d.y;
    //     })
    //     .text(function (d, i) {
    //         return data.fieldNames[i];
    //     });
    liner.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', inCircleRadius)
        .attr('stroke-width', 1)
        .attr('fill', 'white')
        .attr('stroke', 'gray');
    liner.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', outCircleRadius + inCircleRadius)
        .attr('stroke-width', 1)
        .attr('fill', 'none')
        .attr('stroke', 'gray');
    return main;
}
var bubble;
var select_circle = 0;
var selectc = 0;
var bubble_column = 0;
var bubble_row = 0;
var bubble_jian1 = 0;
var bubble_change = 0;
var bubble_box_line = 0;
var bubble_box_cur = 0;

function DrawGlyph() {
    d3.json(fileURL).then((gdata) => {
        d3.csv('data/box_calc.csv').then((rectdata) => {
            // console.log(gdata);
            if (tcircle != 0) {
                tcircle.remove();
                tcircle = 0;
            }
            if (r != 0) {
                r.remove();
                r = 0;
            }
            if (scatterlinein != 0) {
                scatterlinein.remove();
                scatterlinein = 0;
            }

            if (kmain.length != 0) {
                for (let i in kmain) {
                    kmain[i].remove();
                }
                kmain = new Array();
            }

            if (force_g != 0) {
                force_g.remove();
                force_g = 0;
            }

            heatmapInstance.setData({
                max: 0,
                data: []
            });
            let max_x = -999999,
                min_x = 99999,
                max_y = -99999,
                min_y = 999999

            for (var i in gdata) {
                max_x = Math.max(max_x, parseFloat(gdata[i].x))
                max_y = Math.max(max_y, parseFloat(gdata[i].y))
                min_x = Math.min(min_x, parseFloat(gdata[i].x))
                min_y = Math.min(min_y, parseFloat(gdata[i].y))
            }

            var xAxisWidth = widtha;
            var yAxisWidth = heighta;
            var xScale = d3.scaleLinear()
                .domain([min_x, max_x])
                .range([35, xAxisWidth - 25]);
            var yScale = d3.scaleLinear()
                .domain([min_y, max_y])
                .range([20, yAxisWidth - 30]);

            let dicpos = new Array();
            for (let i = 0; i <= 24; ++i) {
                dicpos.push({
                    x_sum: 0,
                    y_sum: 0,
                    x_avg: 0,
                    y_avg: 0,
                    cnt: 0,
                    label: 0,
                    deci: [
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    people: new Array(),
                    wealthIn: 0,
                    wealthOut: 0,
                    wealthIn_avg: 0,
                    wealthOut_avg: 0,
                    wealthIn_array: new Array(),
                    wealthOut_array: new Array(),
                    wealthIn_box: new Array(),
                    wealthOut_box: new Array()
                })
            }

            for (let i in gdata) {
                dicpos[gdata[i].label].x_sum += gdata[i].x;
                dicpos[gdata[i].label].y_sum += gdata[i].y;
                dicpos[gdata[i].label].cnt++;
                dicpos[gdata[i].label].label = gdata[i].label;
                // console.log(rectdata[i]);
                for (let j = 1; j <= 7; ++j) {
                    dicpos[gdata[i].label].deci[j][parseInt(rectdata[i][j])]++;
                }
                dicpos[gdata[i].label].people.push(gdata[i]);
                if (parseFloat(rectdata[i]['19']) > 600) rectdata[i]['19'] = 600;
                if (parseFloat(rectdata[i]['19']) < -600) rectdata[i]['19'] = -600;
                if (parseFloat(rectdata[i]['139']) > 600) rectdata[i]['139'] = 600;
                if (parseFloat(rectdata[i]['139']) < -600) rectdata[i]['139'] = -600;
                dicpos[gdata[i].label].wealthIn += parseFloat(rectdata[i]['19']);
                dicpos[gdata[i].label].wealthIn_array.push(parseFloat(rectdata[i]['19']));
                dicpos[gdata[i].label].wealthOut += parseFloat(rectdata[i]['139']);
                dicpos[gdata[i].label].wealthOut_array.push(parseFloat(rectdata[i]['139']));
            }

            // console.log(dicpos[1]);

            let mainmin = 99999;
            let mainmax = 0;
            let w_change = new Array();

            for (let i in dicpos) {
                dicpos[i].wealthIn_array.sort(function (a, b) {
                    return a - b;
                });
                dicpos[i].wealthOut_array.sort(function (a, b) {
                    return a - b;
                });
                // console.log(dicpos[i].wealthIn_array)
                dicpos[i].wealthIn_box = [dicpos[i].wealthIn_array[0], dicpos[i].wealthIn_array[parseInt(dicpos[i].wealthIn_array.length / 4 - 1)], dicpos[i].wealthIn_array[parseInt(dicpos[i].wealthIn_array.length * 2 / 4 - 1)], dicpos[i].wealthIn_array[parseInt(dicpos[i].wealthIn_array.length * 3 / 4 - 1)], dicpos[i].wealthIn_array[parseInt(dicpos[i].wealthIn_array.length - 1)]];
                dicpos[i].wealthOut_box = [dicpos[i].wealthOut_array[0], dicpos[i].wealthOut_array[parseInt(dicpos[i].wealthOut_array.length / 4 - 1)], dicpos[i].wealthOut_array[parseInt(dicpos[i].wealthOut_array.length * 2 / 4 - 1)], dicpos[i].wealthOut_array[parseInt(dicpos[i].wealthOut_array.length * 3 / 4 - 1)], dicpos[i].wealthOut_array[parseInt(dicpos[i].wealthOut_array.length - 1)]];
                if (mainmax < dicpos[i].cnt) {
                    mainmax = dicpos[i].cnt;
                }
                if (mainmin > dicpos[i].cnt) {
                    mainmin = dicpos[i].cnt;
                }
                dicpos[i].x_avg = dicpos[i].x_sum / dicpos[i].cnt;
                dicpos[i].y_avg = dicpos[i].y_sum / dicpos[i].cnt;
                dicpos[i].wealthIn_avg = parseFloat((dicpos[i].wealthIn / dicpos[i].cnt).toFixed(2));
                dicpos[i].wealthOut_avg = parseFloat((dicpos[i].wealthOut / dicpos[i].cnt).toFixed(2));
                dicpos[i].wealthChange = dicpos[i].wealthOut_avg - dicpos[i].wealthIn_avg;
                w_change.push(dicpos[i].wealthChange);
            }
            // console.log(dicpos)
            var inScale = d3.scaleLinear()
                .domain([-600, 600])
                .range([Math.PI / 2, Math.PI * 3 / 2]);
            var outScaleZheng = d3.scaleLinear()
                .domain([600, 0])
                .range([Math.PI * 3 / 2, Math.PI * 2]);
            var outScaleFu = d3.scaleLinear()
                .domain([0, -600])
                .range([0, Math.PI / 2]);

            var outScale = d3.scaleLinear()
                .domain([-600, 600])
                .range([Math.PI, 0]);
            var changeScale1 = d3.scaleLinear()
                .domain([(d3.min(w_change)), 0])
                .range([0, 1]);

            var changeScale2 = d3.scaleLinear()
                .domain([0, (d3.max(w_change))])
                .range([0, 1]);
            let compute1 = d3.interpolate('red', 'white')
            let compute2 = d3.interpolate('white', '#00ff00')



            // glyphRader = ssvg.append('g')
            //     .selectAll('#glyph')
            //     .attr('id', 'glyph')
            //     .data(dicpos)
            //     .enter()
            //     .append('circle')
            //     .attr('cx', d => {
            //         // console.log(d);
            //         return Math.round(xScale(d.x_avg), 5);
            //     })
            //     .attr('cy', d => {
            //         return Math.round(yScale(d.y_avg), 5);
            //     })
            //     .attr('r', 10)
            //     .attr('fill', (d, i) => {
            //         // if (i != 4)
            //         //     return 'none';
            //         return colorscatter[d.label];
            //     })

            var data = {
                fieldNames: ['语文', '数学', '外语', '物理', '化学', '生物', '政治', '历史'],
                values: [
                    [10, 20, 30, 40, 50, 60, 70, 80]
                ]
            };
            let linescale = d3.scaleLinear()
                .domain([mainmin, mainmax])
                .range([0.3, 1])

            // console.log(dicpos)

            var diccircle = new Array();
            for (let i in dicpos) {
                diccircle.push({
                    pos: [Math.round(xScale(dicpos[i].x_avg), 5), Math.round(yScale(dicpos[i].y_avg), 5)],
                    dcnt: 40 * linescale(dicpos[i].cnt),
                    cnt: dicpos[i].cnt,
                    label: dicpos[i].label,
                    color: colorscatter[dicpos[i].label],
                    change: dicpos[i].wealthChange
                });
            }

            let stepCirandBox = 12;
            var dicline = new Array();

            for (let i in dicpos) {
                var temp1 = {
                    label: dicpos[i].label,
                    source: {
                        x: diccircle[i].pos[0],
                        y: diccircle[i].pos[1]
                    },
                    target: {
                        x: diccircle[i].pos[0] + Math.cos(inScale(dicpos[i].wealthIn_box[2])) * (diccircle[i].dcnt - stepCirandBox * linescale(dicpos[i].cnt)),
                        y: diccircle[i].pos[1] + Math.sin(inScale(dicpos[i].wealthIn_box[2])) * (diccircle[i].dcnt - stepCirandBox * linescale(dicpos[i].cnt))
                    },
                    cnt: diccircle[i].cnt
                }
                var temp2 = {
                    label: dicpos[i].label,
                    source: {
                        x: diccircle[i].pos[0],
                        y: diccircle[i].pos[1]
                    },
                    target: {
                        x: diccircle[i].pos[0],
                        y: diccircle[i].pos[1]
                    },
                    cnt: diccircle[i].cnt
                }
                if (dicpos[i].wealthOut_box[2] > 0) {
                    temp2.target.x += Math.cos(outScaleZheng(dicpos[i].wealthOut_box[2])) * (diccircle[i].dcnt - stepCirandBox * linescale(dicpos[i].cnt));
                    temp2.target.y += Math.sin(outScaleZheng(dicpos[i].wealthOut_box[2])) * (diccircle[i].dcnt - stepCirandBox * linescale(dicpos[i].cnt));
                }
                if (dicpos[i].wealthOut_box[2] <= 0) {
                    temp2.target.x += Math.cos(outScaleFu(dicpos[i].wealthOut_box[2])) * (diccircle[i].dcnt - stepCirandBox * linescale(dicpos[i].cnt));
                    temp2.target.y += Math.sin(outScaleFu(dicpos[i].wealthOut_box[2])) * (diccircle[i].dcnt - stepCirandBox * linescale(dicpos[i].cnt));
                }
                dicline.push(temp1);
                dicline.push(temp2);


            }

            var dicbox = new Array();
            let boxstep = 12;
            let boxandline = 2;
            var dicboxcur = new Array();
            for (let i in dicpos) {
                var temp1 = {
                    label: dicpos[i].label,
                    startAngle: inScale(dicpos[i].wealthIn_box[0]),
                    endAngle: inScale(dicpos[i].wealthIn_box[1]),
                    r: diccircle[i].dcnt - ((boxstep - boxandline) / 2 + boxandline) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 0
                }
                var temp2 = {
                    label: dicpos[i].label,
                    startAngle: inScale(dicpos[i].wealthIn_box[3]),
                    endAngle: inScale(dicpos[i].wealthIn_box[4]),
                    r: diccircle[i].dcnt - ((boxstep - boxandline) / 2 + boxandline) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 0
                }
                var temp3 = {
                    label: dicpos[i].label,
                    startAngle: inScale(dicpos[i].wealthIn_box[1]),
                    endAngle: inScale(dicpos[i].wealthIn_box[3]),
                    r: diccircle[i].dcnt - (boxandline) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 0
                }

                var temp4 = {
                    label: dicpos[i].label,
                    startAngle: inScale(dicpos[i].wealthIn_box[1]),
                    endAngle: inScale(dicpos[i].wealthIn_box[3]),
                    r: diccircle[i].dcnt - (boxstep) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 0
                }
                dicboxcur.push(temp1);
                dicboxcur.push(temp2);
                dicboxcur.push(temp3);
                dicboxcur.push(temp4);
            }

            for (let i in dicpos) {
                var temp1 = {
                    label: dicpos[i].label,
                    startAngle: outScale(dicpos[i].wealthOut_box[0]),
                    endAngle: outScale(dicpos[i].wealthOut_box[1]),
                    r: diccircle[i].dcnt - ((boxstep - boxandline) / 2 + boxandline) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 1
                }
                // if (dicpos[i].wealthOut_box[0] > 0) {
                //     temp1.startAngle = outScaleZheng(dicpos[i].wealthOut_box[0]);
                // } else {
                //     temp1.startAngle = outScaleFu(dicpos[i].wealthOut_box[0]);
                // }

                // if (dicpos[i].wealthOut_box[1] > 0) {
                //     temp1.endAngle = outScaleZheng(dicpos[i].wealthOut_box[1]);
                // } else {
                //     temp1.endAngle = outScaleFu(dicpos[i].wealthOut_box[1]);
                // }
                var temp2 = {
                    label: dicpos[i].label,
                    startAngle: outScale(dicpos[i].wealthOut_box[3]),
                    endAngle: outScale(dicpos[i].wealthOut_box[4]),
                    r: diccircle[i].dcnt - ((boxstep - boxandline) / 2 + boxandline) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 1
                }
                // if (dicpos[i].wealthOut_box[3] > 0) {
                //     temp2.startAngle = outScaleZheng(dicpos[i].wealthOut_box[3]);
                // } else {
                //     temp2.startAngle = outScaleFu(dicpos[i].wealthOut_box[3]);
                // }

                // if (dicpos[i].wealthOut_box[4] > 0) {
                //     temp2.endAngle = outScaleZheng(dicpos[i].wealthOut_box[4]);
                // } else {
                //     temp2.endAngle = outScaleFu(dicpos[i].wealthOut_box[4]);
                // }
                var temp3 = {
                    label: dicpos[i].label,
                    startAngle: outScale(dicpos[i].wealthOut_box[1]),
                    endAngle: outScale(dicpos[i].wealthOut_box[3]),
                    r: diccircle[i].dcnt - (boxandline) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 1
                }
                // if (dicpos[i].wealthOut_box[1] > 0) {
                //     temp3.startAngle = outScaleZheng(dicpos[i].wealthOut_box[1]);
                // } else {
                //     temp3.startAngle = outScaleFu(dicpos[i].wealthOut_box[1]);
                // }

                // if (dicpos[i].wealthOut_box[3] > 0) {
                //     temp3.endAngle = outScaleZheng(dicpos[i].wealthOut_box[3]);
                // } else {
                //     temp3.endAngle = outScaleFu(dicpos[i].wealthOut_box[3]);
                // }

                var temp4 = {
                    label: dicpos[i].label,
                    startAngle: temp3.startAngle,
                    endAngle: temp3.endAngle,
                    r: diccircle[i].dcnt - (boxstep) * linescale(dicpos[i].cnt),
                    pos: diccircle[i].pos,
                    f: 1
                }
                dicboxcur.push(temp1);
                dicboxcur.push(temp2);
                dicboxcur.push(temp3);
                dicboxcur.push(temp4);
            }

            for (let i in dicpos) {
                for (let j = 0; j < 5; ++j) {
                    var temp1 = {
                        label: dicpos[i].label,
                        source: {
                            x: diccircle[i].pos[0] + Math.cos(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt)),
                            y: diccircle[i].pos[1] + Math.sin(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt))
                        },
                        target: {
                            x: diccircle[i].pos[0] + Math.cos(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt)),
                            y: diccircle[i].pos[1] + Math.sin(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt))
                        },
                        sourceAnglex: Math.cos(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt)),

                        sourceAngley: Math.sin(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt)),
                        targetAnglex: Math.cos(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt)),
                        targetAngley: Math.sin(inScale(dicpos[i].wealthIn_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt)),
                        cnt: diccircle[i].cnt
                    }
                    var temp2 = {
                        label: dicpos[i].label,
                        source: {
                            x: diccircle[i].pos[0],
                            y: diccircle[i].pos[1]
                        },
                        target: {
                            x: diccircle[i].pos[0],
                            y: diccircle[i].pos[1]
                        },
                        cnt: diccircle[i].cnt
                    }
                    if (dicpos[i].wealthOut_box[j] > 0) {
                        temp2.target.x += Math.cos(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));
                        temp2.target.y += Math.sin(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));
                        temp2.targetAnglex = Math.cos(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));
                        temp2.targetAngley = Math.sin(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));

                    }
                    if (dicpos[i].wealthOut_box[j] <= 0) {
                        temp2.target.x += Math.cos(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));
                        temp2.target.y += Math.sin(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));
                        temp2.targetAnglex = Math.cos(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));
                        temp2.targetAngley = Math.sin(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxandline * linescale(dicpos[i].cnt));

                    }

                    if (dicpos[i].wealthOut_box[j] > 0) {
                        temp2.source.x += Math.cos(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));
                        temp2.source.y += Math.sin(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));
                        temp2.sourceAnglex = Math.cos(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));
                        temp2.sourceAngley = Math.sin(outScaleZheng(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));

                    }
                    if (dicpos[i].wealthOut_box[j] <= 0) {
                        temp2.source.x += Math.cos(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));
                        temp2.source.y += Math.sin(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));
                        temp2.sourceAnglex = Math.cos(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));
                        temp2.sourceAngley = Math.sin(outScaleFu(dicpos[i].wealthOut_box[j])) * (diccircle[i].dcnt - boxstep * linescale(dicpos[i].cnt));

                    }
                    dicbox.push(temp1);
                    dicbox.push(temp2);

                }

            }

            // console.log(diccircle)
            bubble = ssvg.selectAll('#diccir')
                .attr('id', 'diccir')
                .data(diccircle)
                .enter()
                .append('circle')
                .attr('cx', (d, i) => {
                    return d.pos[0];
                })
                .attr('cy', d => d.pos[1])
                .attr('r', d => linescale(d.cnt) * 40)
                .attr('fill', d => {
                    // return colorscatter[d.label];
                    if (d.change >= 0)
                        return compute2(changeScale2(d.change));
                    else
                        return compute1(changeScale1(d.change));
                })
                .attr('fill-opacity', 1)
                .attr('stroke', '#666')
                .attr('stroke-width', 0.5)
                .attr('stroke-opacity', 1)
                .on('click', d => {
                    if (xian != 0) {
                        xian.remove();
                        xian = 0;
                    }
                    centerCircle(d.label, diccircle);
                    // RadarGlyph(d.label, 7);
                });
            bubble_column = ssvg.selectAll('#diccolumn')
                .attr('id', 'diccolumn')
                .data(diccircle)
                .enter()
                .append('line')
                .attr('x1', d => d.pos[0])
                .attr('x2', d => d.pos[0])
                .attr('y1', d => d.pos[1] - d.dcnt)
                .attr('y2', d => d.pos[1] + d.dcnt)
                .attr('stroke', '#666')
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', 1);

            bubble_row = ssvg.selectAll('#dicrow')
                .attr('id', 'dicrow')
                .data(diccircle)
                .enter()
                .append('line')
                .attr('y1', d => d.pos[1])
                .attr('y2', d => d.pos[1])
                .attr('x1', d => d.pos[0] - d.dcnt)
                .attr('x2', d => d.pos[0] + d.dcnt)
                .attr('stroke', '#666')
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', 1);

            // bubble_box_line = ssvg.selectAll("#dicboxline")
            //     .attr('id', 'dicboxline')
            //     .data(dicbox)
            //     .enter()
            //     .append('line')
            //     .attr('x1', d => d.source.x)
            //     .attr('y1', d => d.source.y)
            //     .attr('x2', d => d.target.x)
            //     .attr('y2', d => d.target.y)
            //     .attr('fill', 'none')
            //     .attr('stroke', 'black')
            //     .attr('stroke-width', 0.5);

            // bubble_box_cur = ssvg.selectAll('#dicArc')
            //     .attr('id', 'dicArc')
            //     .data(dicboxcur)
            //     .enter()
            //     .append('g')
            //     .attr('transform', d => 'translate(' + d.pos[0] + ',' + d.pos[1] + ')')
            //     .append('path')
            //     .attr('d', d => {
            //         var carc = d3.arc().innerRadius(d.r - 0.25)
            //             .outerRadius(d.r + 0.25);
            //         var temp
            //         if (d.f == 0)
            //             temp = {
            //                 startAngle: (d.startAngle + Math.PI / 2),
            //                 endAngle: (d.endAngle + Math.PI / 2)
            //             };
            //         else
            //             temp = {
            //                 startAngle: (d.startAngle),
            //                 endAngle: (d.endAngle)
            //             };
            //         return carc(temp);
            //     })
            //     .attr('fill', d => {
            //         return 'black';
            //     })

            var jian2 = ssvg.append("svg:defs").selectAll("#markerr")
                .attr("id", 'markerr')
                .data(["suit", "licensing", "resolved"])
                .enter().append("svg:marker")
                .attr("id", String)
                // .attr("viewBox", "0 -5 10 10")
                .attr("viewBox", "0 0 12 12") //坐标系的区域
                // .attr("refX", 15)
                // .attr("refY", -0)
                // .attr("markerWidth", 5)
                // .attr("markerHeight", 6)

                .attr("refX", 9.8) //箭头坐标
                .attr("refY", 6)
                .attr("markerWidth", 12)
                .attr("markerHeight", 12)
                .attr("orient", "auto")
                .append("svg:path")
                // .attr("d", "M0,-5L10,0L0,5");
                .attr("d", "M2,2 L10,6 L2,10 L2,6 L2,2") //箭头的路径
                .attr('fill', '#666');
            //(2)根据连线类型引用上面创建的标记


            bubble_jian1 = ssvg.append("svg:g").selectAll("path")
                .data(dicline)
                .enter().append("svg:path")
                .attr("class", function (d) {
                    return "link " + 'licensing';
                })
                .attr("marker-end", function (d) {
                    return "url(#" + 'licensing' + ")";
                })
                .attr("d", function (d) {
                    return "M" + d.source.x + "," +
                        d.source.y + "L" +
                        //  + dr + "," +
                        // dr + " 0 0,1 " + 
                        d.target.x + "," +
                        d.target.y;
                })
                .attr('stroke-width', d => {
                    // console.log(valScale(d.value))
                    return linescale(d.cnt);
                })
                .attr('stroke', 'none');

            // bubble_change = ssvg.selectAll('#changeArc')
            //     .attr('id', 'changeArc')
            //     .data(diccircle)
            //     .enter()
            //     .append('g')
            //     .attr('transform', d => 'translate(' + d.pos[0] + ',' + d.pos[1] + ')')
            //     .append('path')
            //     .attr('d', d => {
            //         var carc = d3.arc().innerRadius(0)
            //             .outerRadius(changeScale(Math.abs(d.change)));
            //         var temp;
            //         if (d.change >= 0) {
            //             temp = {
            //                 startAngle: (Math.PI),
            //                 endAngle: (Math.PI * 2)
            //             }
            //         } else {
            //             temp = {
            //                 startAngle: (0),
            //                 endAngle: (Math.PI)
            //             }
            //             // carc.startAngle(Math.PI)
            //             //     .endAngle(Math.PI * 2);
            //         }
            //         console.log(temp)
            //         return carc(temp);
            //     })
            //     .attr('fill', d => {
            //         if (d.change >= 0) return '#00ff00';
            //         else return 'red';
            //     })


            // console.log(bubble)
            // for (let i in dicpos) {
            //     // if (i != 4)
            //     // continue;

            //     var v = [];
            //     var vlen = [];
            //     for (let j = 1; j <= 7; ++j) {
            //         let kmaxk = 0;
            //         let kindex = 0;
            //         let len = new Array();
            //         for (let k = 0; k < 4; ++k) {
            //             // console.log(dicpos[i].deci[k])
            //             len.push(dicpos[i].deci[j][k]);
            //             if (dicpos[i].deci[j][k] > kmaxk) {
            //                 kmaxk = dicpos[i].deci[j][k];
            //                 kindex = k;
            //             }
            //         }
            //         // console.log(kindex);
            //         v.push((4 - (kindex + 1)) * 20);
            //         vlen.push(len);
            //         // console.log((4 - 1 - kindex) * 20);
            //     }
            //     // console.log(v);
            //     var kdata = {
            //         fieldNames: ['wealth', 'work', 'health', 'insurance', 'loan', 'investment', 'risk'],
            //         values: [v],
            //         vlen: vlen,
            //         people: dicpos[i].people
            //     }
            //     // console.log(v);
            //     kmain.push(Rader(kdata, Math.round(xScale(dicpos[i].x_avg), 5), Math.round(yScale(dicpos[i].y_avg), 5), linescale(dicpos[i].cnt)));
            //     // console.log(Math.round(xScale(dicpos[i].y_avg), 5));
            //     // Rader(data, Math.round(xScale(dicpos[i].x_avg), 5), 0);
            //     // break;
            // }
        })

    })
}

// DrawGlyph()

function DrawForce() {
    d3.json(fileURL).then((coor) => {
        d3.csv('data/box_calc.csv').then((rectdata) => {
            // console.log(gdata);
            if (tcircle != 0) {
                tcircle.remove();
                tcircle = 0;
            }
            if (r != 0) {
                r.remove();
                r = 0;
            }
            if (scatterlinein != 0) {
                scatterlinein.remove();
                scatterlinein = 0;
            }
            if (kmain.length != 0) {
                for (let i in kmain) {
                    kmain[i].remove();
                }
                kmain = new Array();
            }

            if (glyphRader != 0) {
                glyphRader.remove();
                glyphRader = 0;
            }

            if (force_g != 0) {
                force_g.remove();
                force_g = 0;
            }
            heatmapInstance.setData({
                max: 0,
                data: []
            });

            force_g = ssvg.append('g');

            // console.log(coor)

            let nodes = new Array();
            for (let i = 0; i <= 24; ++i) {
                nodes.push({
                    name: i
                });
            }

            let edges = new Array();
            let ed = new Object();
            for (let i = 0; i <= 24; ++i) {
                for (let j = 0; j <= 24; ++j) {
                    if (j >= i) {
                        ed[i * 100 + j] = {
                            source: i,
                            target: j,
                            relation: "",
                            value: 0
                        }
                        ed[j * 100 + i] = ed[i * 100 + j];
                    }
                }
            }

            let nameData = new Object();
            for (let i in coor) {
                if (typeof (nameData[coor[i].id]) == 'undefined') {
                    nameData[coor[i].id] = new Array();
                }
                nameData[coor[i].id].push(coor[i]);
            }

            for (let i in nameData) {
                for (let j = 0; j < 19; ++j) {
                    ed[nameData[i][j].label * 100 + nameData[i][j + 1].label].value++;
                }
            }

            let valuemax = -1;
            let valuemin = 9000;

            for (let i = 0; i <= 24; ++i) {
                for (let j = 0; j <= 24; ++j) {
                    if (j >= i && ed[i * 100 + j].value != 0 && ed[i * 100 + j].value > 10) {
                        if (valuemax < ed[i * 100 + j].value) {
                            valuemax = ed[i * 100 + j].value;
                        }
                        if (valuemin > ed[i * 100 + j].value) {
                            valuemin = ed[i * 100 + j].value;
                        }
                        // console.log(ed[i * 100 + j]);
                        edges.push(ed[i * 100 + j])
                    }
                }
            }

            var valueScale = d3.scaleLinear()
                .domain([valuemin, valuemax])
                .range([5, 1]);

            var widScale = d3.scaleLinear()
                .domain([valuemin, valuemax])
                .range([1, 10]);

            //准备数据
            // var nodes = [{
            //         name: "湖南邵阳"
            //     },
            //     {
            //         name: "山东莱州"
            //     },
            //     {
            //         name: "广东阳江"
            //     },
            //     {
            //         name: "山东枣庄"
            //     },
            //     {
            //         name: "泽"
            //     },
            //     {
            //         name: "恒"
            //     },
            //     {
            //         name: "鑫"
            //     },
            //     {
            //         name: "明山"
            //     },
            //     {
            //         name: "班长"
            //     }
            // ];

            // var edges = [{
            //         source: 0,
            //         target: 4,
            //         relation: "籍贯",
            //         value: 1.3
            //     },
            //     {
            //         source: 4,
            //         target: 5,
            //         relation: "舍友",
            //         value: 1
            //     },
            //     {
            //         source: 4,
            //         target: 6,
            //         relation: "舍友",
            //         value: 1
            //     },
            //     {
            //         source: 4,
            //         target: 7,
            //         relation: "舍友",
            //         value: 1
            //     },
            //     {
            //         source: 1,
            //         target: 6,
            //         relation: "籍贯",
            //         value: 2
            //     },
            //     {
            //         source: 2,
            //         target: 5,
            //         relation: "籍贯",
            //         value: 0.9
            //     },
            //     {
            //         source: 3,
            //         target: 7,
            //         relation: "籍贯",
            //         value: 1
            //     },
            //     {
            //         source: 5,
            //         target: 6,
            //         relation: "同学",
            //         value: 1.6
            //     },
            //     {
            //         source: 6,
            //         target: 7,
            //         relation: "朋友",
            //         value: 0.7
            //     },
            //     {
            //         source: 6,
            //         target: 8,
            //         relation: "职责",
            //         value: 2
            //     }
            // ];
            //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
            var colorScale = d3.scaleOrdinal()
                .domain(d3.range(nodes.length))
                .range(d3.schemeCategory20);

            //新建一个力导向图
            var forceSimulation = d3.forceSimulation()
                .force("link", d3.forceLink())
                .force("charge", d3.forceManyBody())
                .force("center", d3.forceCenter());;

            //初始化力导向图，也就是传入数据
            //生成节点数据
            forceSimulation.nodes(nodes)
                .on("tick", ticked); //这个函数很重要，后面给出具体实现和说明
            //生成边数据
            forceSimulation.force("link")
                .links(edges)
                .distance(function (d) { //每一边的长度
                    // return d.value * 1;
                    return valueScale(d.value) * 80;
                })
            //设置图形的中心位置	
            forceSimulation.force("center")
                .x(widtha / 2)
                .y(heighta / 2);
            //在浏览器的控制台输出
            console.log(nodes);
            console.log(edges);

            //有了节点和边的数据后，我们开始绘制
            //绘制边
            var links = force_g.append("g")
                .selectAll("line")
                .data(edges)
                .enter()
                .append("line")
                .attr("stroke", function (d, i) {
                    // console.log(d)
                    return colorScale(i);
                })
                .attr("stroke-width", (d, i) => {
                    return widScale(d.value);
                });
            var linksText = force_g.append("g")
                .selectAll("text")
                .data(edges)
                .enter()
                .append("text")
                .text(function (d) {
                    return d.relation;
                })

            //绘制节点
            //老规矩，先为节点和节点上的文字分组
            var gs = force_g.selectAll(".circleText")
                .data(nodes)
                .enter()
                .append("g")
                .attr("transform", function (d, i) {
                    var cirX = d.x;
                    var cirY = d.y;
                    return "translate(" + cirX + "," + cirY + ")";
                })
                .call(d3.drag()
                    .on("start", started)
                    .on("drag", dragged)
                    .on("end", ended)
                );

            //绘制节点
            gs.append("circle")
                .attr("r", 10)
                .attr("fill", function (d, i) {
                    return colorScale(i);
                })
            //文字
            gs.append("text")
                .attr("x", -10)
                .attr("y", -20)
                .attr("dy", 10)
                .text(function (d) {
                    return d.name;
                })

            function ticked() {
                links
                    .attr("x1", function (d) {
                        return d.source.x;
                    })
                    .attr("y1", function (d) {
                        return d.source.y;
                    })
                    .attr("x2", function (d) {
                        return d.target.x;
                    })
                    .attr("y2", function (d) {
                        return d.target.y;
                    });

                linksText
                    .attr("x", function (d) {
                        return (d.source.x + d.target.x) / 2;
                    })
                    .attr("y", function (d) {
                        return (d.source.y + d.target.y) / 2;
                    });

                gs
                    .attr("transform", function (d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });
            }

            function started(d) {
                if (!d3.event.active) {
                    forceSimulation.alphaTarget(0.8).restart();
                }
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }

            function ended(d) {
                if (!d3.event.active) {
                    forceSimulation.alphaTarget(0);
                }
                d.fx = null;
                d.fy = null;
            }
        })
    })
}

// DrawGlyph()
var jian = 0,
    xian = 0;

function centerCircle(select_num, data) {
    d3.json(fileURL).then((coor) => {
        d3.csv('data/box_calc.csv').then((rectdata) => {
            // console.log(data);
            if (select_circle != 0) {
                select_circle.remove();
            }

            // if (jian != 0) {
            //     jian.remove();
            //     jian = 0;
            // }
            if (xian != 0) {
                xian.remove();
                xian = 0;
            }



            // if (selectc != 0) {
            //     selectc.remove();
            // }
            // console.log();
            let sel = select_num;
            let nodes = new Array();
            for (let i = 0; i <= 24; ++i) {
                nodes.push({
                    name: i
                });
            }

            let edges = new Array();
            let ed = new Object();
            for (let i = 0; i <= 24; ++i) {
                for (let j = 0; j <= 24; ++j) {
                    if (j >= i) {
                        ed[i * 100 + j] = {
                            source: i,
                            target: j,
                            relation: "",
                            value: 0
                        }
                        ed[j * 100 + i] = {
                            source: j,
                            target: i,
                            relation: "",
                            value: 0
                        }
                    }
                }
            }

            let nameData = new Object();
            for (let i in coor) {
                if (typeof (nameData[coor[i].id]) == 'undefined') {
                    nameData[coor[i].id] = new Array();
                }
                nameData[coor[i].id].push(coor[i]);
            }

            for (let i in nameData) {
                for (let j = 0; j < 19; ++j) {
                    ed[nameData[i][j].label * 100 + nameData[i][j + 1].label].value++;
                }
            }

            let valuemax = -1;
            let valuemin = 9000;

            for (let i = 0; i <= 24; ++i) {
                for (let j = 0; j <= 24; ++j) {
                    if (ed[i * 100 + j].value != 0 && (i == sel || j == sel) && i != j) {
                        if (valuemax < ed[i * 100 + j].value) {
                            valuemax = ed[i * 100 + j].value;
                        }
                        if (valuemin > ed[i * 100 + j].value) {
                            valuemin = ed[i * 100 + j].value;
                        }
                        // console.log(ed[i * 100 + j]);
                        edges.push(ed[i * 100 + j])
                    }
                }
            }

            var arc = 2 * Math.PI;
            var total = 25;
            var onePiece = arc / total;
            var arcCntx = 0;
            var arcCnty = 0;

            var rad = 200;
            var web = new Object();


            var valScale = d3.scaleLinear()
                .domain([valuemin, valuemax])
                .range([1, 3]);
            // console.log(valScale(valuemin))
            var cnt_sum = 0;
            for (let i in data) {
                if (i == sel) continue;
                cnt_sum += data[i].dcnt;
            }
            var cntk = 0;

            for (let i = 0; i < total; ++i) {
                if (i == sel) continue;
                let x = rad * Math.cos(arc * (cntk + data[i].dcnt / 2) / cnt_sum);
                let y = rad * Math.sin(arc * (cntk + data[i].dcnt / 2) / cnt_sum);
                web[i] = ({
                    x: x + widtha / 2,
                    y: y + heighta / 2
                });
                cntk += data[i].dcnt;
            }

            var webx = new Object();
            for (let i = 0; i < total; ++i) {
                if (i == sel) continue;
                let x = (rad - data[i].dcnt) * Math.cos(arc * (cntk + data[i].dcnt / 2) / cnt_sum);
                let y = (rad - data[i].dcnt) * Math.sin(arc * (cntk + data[i].dcnt / 2) / cnt_sum);
                webx[i] = ({
                    x: x + widtha / 2,
                    y: y + heighta / 2,
                    rd: arc * (cntk + data[i].dcnt / 2) / cnt_sum
                });
                cntk += data[i].dcnt;
            }

            var edx = new Array();
            for (let i in edges) {
                // edx.push()
                // console.log(edges[i])
                var temp = {
                    source: 0,
                    target: 0,
                    value: edges[i].value
                }
                if (edges[i].source == sel) {
                    // console.log(Math.cos(webx[edges[i].target].rd));
                    let x = (data[sel].dcnt) * Math.cos(webx[edges[i].target].rd);
                    let y = (data[sel].dcnt) * Math.sin(webx[edges[i].target].rd);
                    temp.source = {
                        x: x + widtha / 2,
                        y: y + heighta / 2
                    };
                }

                if (edges[i].target == sel) {
                    let x = (data[sel].dcnt) * Math.cos(webx[edges[i].source].rd);
                    let y = (data[sel].dcnt) * Math.sin(webx[edges[i].source].rd);
                    temp.target = {
                        x: x + widtha / 2,
                        y: y + heighta / 2
                    };
                }

                if (edges[i].source != sel) {
                    temp.source = webx[edges[i].source];
                }

                if (edges[i].target != sel) {
                    temp.target = webx[edges[i].target];
                }

                edx.push(temp);
            }
            // console.log(edx);
            //(1)创建箭头
            jian = ssvg.append("svg:defs").selectAll("marker")
                .data(["suit", "licensing", "resolved"])
                .enter().append("svg:marker")
                .attr("id", String)
                // .attr("viewBox", "0 -5 10 10")
                .attr("viewBox", "0 0 12 12") //坐标系的区域
                // .attr("refX", 15)
                // .attr("refY", -0)
                // .attr("markerWidth", 5)
                // .attr("markerHeight", 6)

                .attr("refX", 12) //箭头坐标
                .attr("refY", 6)
                .attr("markerWidth", 12)
                .attr("markerHeight", 12)
                .attr("orient", "auto")
                .append("svg:path")
                // .attr("d", "M0,-5L10,0L0,5");
                .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2") //箭头的路径
                .attr('fill', '#666');
            //(2)根据连线类型引用上面创建的标记
            xian = ssvg.append("svg:g").selectAll("path")
                .data(edx)
                .enter().append("svg:path")
                .attr("class", function (d) {
                    return "link " + 'licensing';
                })
                .attr("marker-end", function (d) {
                    return "url(#" + 'licensing' + ")";
                })
                .attr("d", function (d) {
                    var dx = d.target.x - d.source.x, //增量
                        dy = d.target.y - d.source.y,
                        dr = Math.sqrt(dx * dx + dy * dy) * 2;
                    return "M" + d.source.x + "," +
                        d.source.y + "A" + dr + "," +
                        dr + " 0 0,1 " + d.target.x + "," +
                        d.target.y;
                })
                .attr('stroke-width', d => {
                    // console.log(valScale(d.value))
                    return valScale(d.value)
                })
                .attr('stroke', '#666');


            bubble.transition()
                // .delay(500)
                .attr('cx', d => {
                    if (d.label == sel) {
                        return widtha / 2;
                    } else {
                        // console.log(arcCnt);
                        // console.log(web[arcCnt].x)
                        return web[d.label].x;
                    }
                })
                .attr('cy', d => {
                    if (d.label == sel) {
                        return heighta / 2;
                    } else {
                        return web[d.label].y;
                    }
                })

            bubble_column.transition()
                // .delay(500)
                .attr('x1', d => {
                    if (d.label == sel) {
                        return widtha / 2;
                    } else {
                        // console.log(arcCnt);
                        // console.log(web[arcCnt].x)
                        return web[d.label].x;
                    }
                })
                .attr('x2', d => {
                    if (d.label == sel) {
                        return widtha / 2;
                    } else {
                        // console.log(arcCnt);
                        // console.log(web[arcCnt].x)
                        return web[d.label].x;
                    }
                })
                .attr('y1', d => {
                    if (d.label == sel) {
                        return heighta / 2 + data[d.label].dcnt;
                    } else {
                        return web[d.label].y + data[d.label].dcnt;
                    }
                })
                .attr('y2', d => {
                    if (d.label == sel) {
                        return heighta / 2 - data[d.label].dcnt;
                    } else {
                        return web[d.label].y - data[d.label].dcnt;
                    }
                })

            bubble_row.transition()
                // .delay(500)
                .attr('x1', d => {
                    if (d.label == sel) {
                        return widtha / 2 + data[d.label].dcnt;
                    } else {
                        // console.log(arcCnt);
                        // console.log(web[arcCnt].x)
                        return web[d.label].x + data[d.label].dcnt;
                    }
                })
                .attr('x2', d => {
                    if (d.label == sel) {
                        return widtha / 2 - data[d.label].dcnt;
                    } else {
                        // console.log(arcCnt);
                        // console.log(web[arcCnt].x)
                        return web[d.label].x - data[d.label].dcnt;
                    }
                })
                .attr('y1', d => {
                    if (d.label == sel) {
                        return heighta / 2;
                    } else {
                        return web[d.label].y;
                    }
                })
                .attr('y2', d => {
                    if (d.label == sel) {
                        return heighta / 2;
                    } else {
                        return web[d.label].y;
                    }
                })

            bubble_jian1.transition()
                .attr("d", function (d) {

                    var s1x, s1y;
                    var s2x, s2y;
                    if (d.label == sel) {
                        s1x = widtha / 2;
                    } else {
                        // console.log(arcCnt);
                        // console.log(web[arcCnt].x)
                        s1x = web[d.label].x;
                    }
                    if (d.label == sel) {
                        s1y = heighta / 2;
                    } else {
                        s1y = web[d.label].y;
                    }
                    return "M" + s1x + "," +
                        s1y + "L" +
                        //  + dr + "," +
                        // dr + " 0 0,1 " + 
                        (d.target.x - d.source.x + s1x) + "," +
                        (d.target.y - d.source.y + s1y);
                })

            // bubble_box_cur.transition().attr("transform", d => {
            //     var s1x, s1y;
            //     var s2x, s2y;
            //     if (d.label == sel) {
            //         s1x = widtha / 2;
            //     } else {
            //         // console.log(arcCnt);
            //         // console.log(web[arcCnt].x)
            //         s1x = web[d.label].x;
            //     }
            //     if (d.label == sel) {
            //         s1y = heighta / 2;
            //     } else {
            //         s1y = web[d.label].y;
            //     }
            //     return "translate(" + (s1x - d.pos[0]) + "," + (s1y - d.pos[1]) + ")";
            // })

            // .attr('stroke-opacity', d => {
            //     if (d.label == sel) return '1'
            //     else return 0;
            // })

            // select_circle = ssvg.append('circle')
            // .attr('cx', widtha / 2)
            // .attr('cy', heighta / 2)
            // .attr('fill', data[sel].color)
            // .attr('r', data[sel].dcnt)
            // .attr('fill-opacity', 0.3);

            bubble.on('click', x => {
                // console.log(d.label)
                if (x.label == sel) {
                    sel = -1;
                    if (xian != 0) {
                        xian.remove();
                        xian = 0;
                    }


                    bubble.transition()
                        .attr('cx', d => d.pos[0])
                        .attr('cy', d => d.pos[1]);
                    bubble_column.transition()
                        .attr('x1', d => d.pos[0])
                        .attr('x2', d => d.pos[0])
                        .attr('y1', d => d.pos[1] - d.dcnt)
                        .attr('y2', d => d.pos[1] + d.dcnt);
                    bubble_row.transition()
                        .attr('y1', d => d.pos[1])
                        .attr('y2', d => d.pos[1])
                        .attr('x1', d => d.pos[0] - d.dcnt)
                        .attr('x2', d => d.pos[0] + d.dcnt);
                    bubble_jian1.transition()
                        .attr("d", function (d) {
                            return "M" + d.source.x + "," +
                                d.source.y + "L" +
                                //  + dr + "," +
                                // dr + " 0 0,1 " + 
                                d.target.x + "," +
                                d.target.y;
                        });
                    // bubble_box_cur.transition()
                    //     .attr('transform', d => {

                    //         var s1x, s1y;
                    //         var s2x, s2y;
                    //         if (d.label == sel) {
                    //             s1x = widtha / 2;
                    //         } else {
                    //             // console.log(arcCnt);
                    //             console.log(d.label)
                                
                    //             s1x = web[d.label].x;
                    //         }
                    //         if (d.label == sel) {
                    //             s1y = heighta / 2;
                    //         } else {
                    //             s1y = web[d.label].y;
                    //         }
                    //         return 'translate(' + (d.pos[0] - s1x) + ',' + (d.pos[1] - s1y) + ')'
                    //     })
                } else {
                    centerCircle(x.label, data);
                }
            })
        })
    });
}