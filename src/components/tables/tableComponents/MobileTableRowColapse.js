import React from "react";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Grid from "@material-ui/core/Grid";
import ExpandMore from "@material-ui/icons/ExpandMore";

const GraphHolder = ({ item, key, rowInfo }) => (
  <div key={key}>
    <ExpansionPanel elevation={0}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography>{item[Object.keys(item)[0]]}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container xl={12} xs={12}>
          {Object.keys(item).map((key, index) => (
            <Grid container xl={12} xs={12} spacing={5}>
              <Grid item xl={4} xs={4}>
                <Typography color="primary">
                  {rowInfo[index].label + ":"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{item[key]}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default GraphHolder;
