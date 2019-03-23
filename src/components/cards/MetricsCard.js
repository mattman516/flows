import React from "react";
import styled from "styled-components";
import CardTemplate from "./CardTemplate";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowRight from "@material-ui/icons/ArrowForward";

const MetricsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MetricsCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6c717b;
`;

const SisenseCardTemplate = ({ degreeVelocity, newVelocity }) => (
  <CardTemplate
    title={"Metrics"}
    content={
      <Grid container spacing={40}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <MetricsCell>
            <MetricsRow>
              <Typography variant="h4" color="inherit">
                {Math.round(degreeVelocity * 1000) / 10}
              </Typography>
              <Typography variant="h5" color="inherit">
                %
              </Typography>
              <ArrowRight color="primary" />
              <Typography variant="h3" color="primary">
                {Math.round(newVelocity * 1000) / 10}
              </Typography>
              <Typography variant="h5" color="primary">
                %
              </Typography>
            </MetricsRow>
            <Typography color="inherit">Degree Velocity</Typography>
          </MetricsCell>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <MetricsCell>
            <MetricsRow>
              <Typography variant="h4" color="inherit">
                {Math.round((4 / degreeVelocity) * 100) / 100}
              </Typography>
              <ArrowRight color="primary" />
              <Typography variant="h3" color="primary">
                {Math.round((4 / newVelocity) * 100) / 100}
              </Typography>
            </MetricsRow>
            <Typography color="inherit">Years to Degree</Typography>
          </MetricsCell>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <MetricsCell>
            <MetricsRow>
              <Typography variant="h4" color="inherit">
                {Math.round(degreeVelocity * 30 * 100) / 100}
              </Typography>
              <ArrowRight color="primary" />
              <Typography variant="h3" color="primary">
                {Math.round(newVelocity * 30 * 100) / 100}
              </Typography>
            </MetricsRow>
            <Typography color="inherit">Credits per Year</Typography>
          </MetricsCell>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <MetricsCell>
            <MetricsRow>
              <Typography variant="h4" color="inherit">
                {Math.round((120 / degreeVelocity) * 10) / 10}
              </Typography>
              <ArrowRight color="primary" />
              <Typography variant="h3" color="primary">
                {Math.round((120 / newVelocity) * 10) / 10}
              </Typography>
            </MetricsRow>
            <Typography color="inherit">Years to Degree</Typography>
          </MetricsCell>
        </Grid>
      </Grid>
    }
  />
);

export default SisenseCardTemplate;
