d3.select(".chart-holder")
  .selectAll("p")
  .data([1, 2, 3])
  .enter()
  .append("p")
  .text((dta) => dta);
