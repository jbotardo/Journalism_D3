// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
}

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//Create a SVG wrapper
var svg = d3
    .select(".scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append a SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "Poverty";
// function used to update poverty X scale
function xScalePoverty(povertyData, chosenXAxis) {
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(povertyData, d => d[chosenXAxis]) * 0.8,
        d3.max(povertyData, d => d[chosenXAxis]) * 1.2
        ])
        .range([0, width]);

    return xLinearScale;
}
