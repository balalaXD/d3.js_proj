'use strict'

function draw(data) {
  d3.select("body")
    .append("div")
      .attr("class", "chart")
    .selectAll("div.line")
    .data(data.cash)
    .enter()
    .append("div")
      .attr("class", "line")

  d3.selectAll("div.line")
    .append("div")
      .attr("class", "label")
      .text(d => d.name)

  d3.selectAll("div.line")
    .append("div")
      .attr("class", "bar")
      .style("width", d => `${d.count/100}px`)
      .style("outline", "1px solid black")
      .text(d => Math.round(d.count))
}

d3.json("data/plaza_traffic.json")
  .then(draw)
