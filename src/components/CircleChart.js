import React, { Component } from "react";
import * as d3 from "d3";
class CircleChart extends Component {
  componentDidMount() {
    const data = [10, 20, 30];
    this.drawCircleChart(data);
  }
  drawCircleChart(data) {
    const width = 400;
    const height = 400;
    
    const colors = ['green', 'purple', 'yellow'];
    
    const svgCanvas = d3.select("#circleChar")
       .append("svg")
       .attr("width", width)
       .attr("height", height);
    
    var g = svgCanvas.selectAll("g")
       .data(data)
       .enter()
       .append("g")
       .attr("transform", function(d, i) {
          return "translate(0,0)";
       })
    
    g.append("circle").attr("cx", function(d, i) {
       return i*75 + 50;
    })
    
    .attr("cy", function(d, i) {
       return 75;
    })
    
    .attr("r", function(d) {
       return d*1.5;
    })
    
    .attr("fill", function(d, i){
       return colors[i];
    })
    
    g.append("text").attr("x", function(d, i) {
       return i * 75 + 25;
    })
    
    .attr("y", 80)
    .attr("stroke", "teal")
    .attr("font-size", "10px")
    .attr("font-family", "sans-serif").text(function(d) {
       return d;
    });
  }
  render() {
    return <div id="circleChar"></div>;
  }
}
export default CircleChart;
