import React from "react";
import BarGraph from "./BarGraph";
import HistoryGraph from "./HistoryGraph";
import Typography from "@material-ui/core/Typography";

const GraphHolder = ({ item, candidateType }) => (
  <div class="chart-wrapper">
    {/* <div class="chart">
            <Typography color="inherit">SEATS</Typography>
            <BarGraph offered={item.seatA} needed={item.seatB} registered={(item.seatB * .1)} name="Seats"/>
        </div> */}
    <div class="chart">
      <Typography color="inherit">SECTIONS</Typography>
      <BarGraph
        offered={item.sectionA}
        needed={item.sectionB}
        registered={item.sectionB * 0.1}
        name="Sections"
      />
    </div>
    {/* <div class="chart">
            <Typography color="inherit">ENROLLMENT</Typography>
            <HistoryGraph  candidateType={candidateType}/>
        </div> */}
  </div>
);

export default GraphHolder;
