import React from "react";
import Chart from "react-google-charts";

const BarGraph = ({ offered, needed, name }) => (
  <div className="App">
    <Chart
      chartType="BarChart"
      width="200px"
      height="70px"
      data={[
        [
          "",
          "number",
          { role: "style" },
          { type: "string", role: "tooltip", p: { html: true } }
        ],
        [
          offered + " Offered",
          parseInt(offered, 10),
          "#3590DC",
          "<h3>Offered : " + offered + "</h3>"
        ],
        [
          needed + " Needed",
          parseInt(needed, 10),
          "#D6DBE1",
          "<h3>Needed : " + needed + "</h3>"
        ]
      ]}
      options={{
        tooltip: { isHtml: true },
        legend: { position: "none" },
        chartArea: { width: "60%", height: "80%", right: 5 },
        vAxis: {
          textColor: "#6C717B",
          textStyle: {
            fontSize: 12,
            italic: true
          }
        },
        hAxis: {
          baselineColor: "#fff",
          minValue: 0,
          viewWindowMode: "maximized",
          gridlines: {
            count: 0
          }
        },
        bar: { groupWidth: "20%" },
        backgroundColor: {
          fill: "none"
        }
      }}
    />
  </div>
);

export default BarGraph;
