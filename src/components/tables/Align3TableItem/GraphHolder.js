import React from "react";
import styled from "styled-components";
import BarGraph from "./BarGraph";
import HistoryGraph from "./HistoryGraph";
import Typography from "@material-ui/core/Typography";

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 50px;
`;

const GraphHolder = ({ item, candidateType }) => (
  <ChartWrapper>
    <div class="chart">
      <Typography color="inherit">SEATS</Typography>
      <BarGraph
        offered={item.seatA}
        needed={item.seatB}
        registered={item.seatB * 0.1}
        name="Seats"
      />
    </div>
    <div class="chart">
      <Typography color="inherit">SECTIONS</Typography>
      <BarGraph
        offered={item.sectionA}
        needed={item.sectionB}
        registered={item.sectionB * 0.1}
        name="Sections"
      />
    </div>
    <div class="chart">
      <Typography color="inherit">ENROLLMENT</Typography>
      <HistoryGraph candidateType={candidateType} />
    </div>
  </ChartWrapper>
);

export default GraphHolder;
