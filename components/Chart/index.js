import { useEffect, useRef } from "react";
import * as d3 from "d3";

function Chart({ data }) {
  const d3Chart = useRef(null);

  useEffect(() => {
    const chart = d3Chart.current;

    if (data.hourly) {
      // Message data
      const dates = data.hourly.map((d) => d.dt * 1000);
      const temps = data.hourly.map((d) => d.temp);

      // Create Graph
      const margin = { top: 40, right: 48, bottom: 40, left: 40 };

      const width =
        chart.parentNode.getBoundingClientRect().width -
        margin.left -
        margin.right;
      const height = 400 - margin.top - margin.bottom;

      const viewBoxWidth = width + margin.left + margin.right;
      const viewBoxHeight = height + margin.top + margin.bottom;

      const svg = d3
        .select(chart)
        .attr("viewBox", [0, 0, viewBoxWidth, viewBoxHeight])
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      // Create Axis
      const x = d3.scaleTime().domain(d3.extent(dates)).range([0, width]);
      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      const y = d3
        .scaleLinear()
        .domain([d3.min(temps) - 2, d3.max(temps) + 2])
        .range([height, 0]);

      svg.append("g").call(d3.axisLeft(y));

      // Graph Label
      svg
        .append("text")
        .attr("class", "label-title")
        .attr("x", width / 2)
        .attr("y", -margin.top / 8)
        .attr("text-anchor", "middle")
        .text("Temperature for the next 48 hours");

      //  X axis label
      svg
        .append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", height + margin.bottom)
        .attr("text-anchor", "middle")
        .text("Time");

      //  Y axis label
      svg
        .append("text")
        .attr("class", "label")
        .attr("x", 0 - margin.left)
        .attr("y", 0 - margin.top / 2)
        .text("Temperature in °C");

      // Create Line
      const line = svg
        .append("path")
        .datum(data.hourly)
        .attr("class", "line")
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(d.dt * 1000))
            .y((d) => y(d.temp))
        );

      // Create Dots
      const circles = svg
        .append("g")
        .selectAll("circle")
        .data(data.hourly)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.dt * 1000))
        .attr("cy", (d) => y(d.temp))
        .attr("r", 6)
        .attr("class", "dot");

      // Tooltip data on mouseover
      function onMouseOver(event, d) {
        const [x, y] = d3.pointer(event);

        d3.select("#d3-chart")
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 1)
          .html(
            `Temperature: ${d.temp}°C<br/>${new Date(
              d.dt * 1000
            ).toLocaleDateString("default", {
              day: "numeric",
              month: "short",
            })}, ${new Date(d.dt * 1000).toLocaleTimeString("default", {
              hour: "numeric",
              minute: "numeric",
            })}`
          );
      }

      //Tooltip trigger
      function onMouseMove(event, d) {
        const [x, y] = d3.pointer(event);

        d3.select(".tooltip").style("bottom", `${x}px`);
      }

      //Tooltip remove
      function onMouseOut() {
        d3.select(".tooltip").style("opacity", 0).remove();
      }
      circles
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut)
        .on("mousemove", onMouseMove);

      return () => {
        d3.select(chart).selectAll("*").remove();
      };
    }
  });

  return (
    <div className="card-style w-full" id="d3-chart">
      <svg ref={d3Chart} />
    </div>
  );
}

export default Chart;
