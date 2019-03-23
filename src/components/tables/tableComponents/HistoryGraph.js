import React from "react";
import Chart from "react-google-charts";

const AdditionCandidate = [
  [
    "",
    "Seats",
    { type: "string", role: "tooltip", p: { html: true } },
    "Offered",
    { type: "string", role: "tooltip", p: { html: true } }
  ],
  [
    "2013",
    4,
    "<h4>2013</h4><h5>Registered Seats : 50</h5><h5>Offered Seats : 75</h5>",
    1.6,
    "<h4>2017</h4><h5>Registered Seats : 50</h5><h5>Offered Seats : 75</h5>"
  ],

  [
    "2014",
    5.6,
    "<h4>2014</h4><h5>Registered Seats : 65</h5><h5>Offered Seats : 75</h5>",
    0,
    "<h4>2016</h4><h5>Registered Seats : 65</h5><h5>Offered Seats : 75</h5>"
  ],

  [
    "2015",
    6.0,
    "<h4>2015</h4><h5>Registered Seats : 80</h5><h5>Offered Seats : 100</h5>",
    1.6,
    "<h4>2015</h4><h5>Registered Seats : 80</h5><h5>Offered Seats : 100</h5>"
  ],

  [
    "2016",
    6.8,
    "<h4>2016</h4><h5>Registered Seats : 90</h5><h5>Offered Seats : 100</h5>",
    0.8,
    "<h4>2016</h4><h5>Registered Seats : 90</h5><h5>Offered Seats : 100</h5>"
  ],

  [
    "2017",
    7.4,
    "<h4>2017</h4><h5>Registered Seats : 100</h5><h5>Offered Seats : 100</h5>",
    0,
    "<h4>2017</h4><h5>Registered Seats : 100</h5><h5>Offered Seats : 100</h5>"
  ]
];

const ReductionCandidate = [
  [
    "",
    "Seats",
    { type: "string", role: "tooltip", p: { html: true } },
    "Offered",
    { type: "string", role: "tooltip", p: { html: true } }
  ],
  [
    "2013",
    7.4,
    "<h4>2013</h4><h5>Registered Seats : 100</h5><h5>Offered Seats : 100</h5>",
    0,
    "<h4>2013</h4><h5>Registered Seats : 100</h5><h5>Offered Seats : 100</h5>"
  ],

  [
    "2014",
    6.8,
    "<h4>2014</h4><h5>Registered Seats : 90</h5><h5>Offered Seats : 100</h5>",
    0.8,
    "<h4>2014</h4><h5>Registered Seats : 90</h5><h5>Offered Seats : 100</h5>"
  ],

  [
    "2015",
    6.0,
    "<h4>2015</h4><h5>Registered Seats : 80</h5><h5>Offered Seats : 100</h5>",
    1.6,
    "<h4>2015</h4><h5>Registered Seats : 80</h5><h5>Offered Seats : 100</h5>"
  ],

  [
    "2016",
    5.6,
    "<h4>2016</h4><h5>Registered Seats : 65</h5><h5>Offered Seats : 75</h5>",
    0,
    "<h4>2016</h4><h5>Registered Seats : 65</h5><h5>Offered Seats : 75</h5>"
  ],

  [
    "2017",
    4,
    "<h4>2017</h4><h5>Registered Seats : 50</h5><h5>Offered Seats : 75</h5>",
    1.6,
    "<h4>2017</h4><h5>Registered Seats : 50</h5><h5>Offered Seats : 75</h5>"
  ]
];

const HistoryGraph = ({ candidateType }) => (
  <div className="App">
    <Chart
      chartType="ColumnChart"
      width="150px"
      height="70px"
      data={
        candidateType === "Addition Candidate"
          ? AdditionCandidate
          : ReductionCandidate
      }
      options={{
        tooltip: { isHtml: true },
        isStacked: true,
        legend: { position: "none" },
        bars: "horizontal",
        chartArea: { width: "90%", height: "80%", right: 5 },
        bar: { groupWidth: "80%" },
        vAxis: {
          textColor: "#fff",
          gridlines: {
            count: 0
          },
          baselineColor: "#fff",
          viewWindowMode: "maximized",
          minValue: 0
        },
        hAxis: {
          textColor: "#999",
          baselineColor: "#fff",
          gridlines: {
            count: 0
          }
        },
        backgroundColor: {
          fill: "none"
        },
        series: {
          0: {
            color: "#3590DC"
          },
          1: { color: "#D6DBE1" }
        }
      }}
    />
  </div>
);

export default HistoryGraph;
