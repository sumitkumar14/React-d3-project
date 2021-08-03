import React, { Component } from "react";
import * as d3 from "d3";
class BarChart extends Component {
  componentDidMount() {
    const data = [2, 4, 6, 8, 10, 12, 14, 16, 18];
    this.drawBarChart(data);
  }
  drawBarChart(data) {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 20;
    const svgCanvas = d3
      .select("#bar")
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "none");
    svgCanvas
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (dataPoint, i) => i * 45 + 10)
      .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
      .text((dataPoint) => dataPoint);
    svgCanvas
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", 40)
      .attr("height", (datapoint) => datapoint * scale)
      .attr("fill", "orange")
      .attr("x", (datapoint, iteration) => iteration * 45)
      .attr("y", (datapoint) => canvasHeight - datapoint * scale);
  }
  render() {
    return <div style={{justifyContent:'center', display:'flex'}}><div id="bar"></div></div>;
  }
}
export default BarChart;
