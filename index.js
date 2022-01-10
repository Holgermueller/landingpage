let tooltip = d3
  .select("chart-holder")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 0);

d3.json(
  "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
).then((data) => {
  console.log(data);
});
