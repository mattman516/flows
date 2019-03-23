import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography, Divider, Paper, Grid } from "@material-ui/core";
import { appInfo } from "../data";
import { AppExpanderContent } from "./dialogs/AppExpander/AppExpanderContent";

const HeaderWrapper = styled.div`
  padding: 25px 0;
`;
const SubHeaderWrapper = styled.div`
  padding: 15px 0;
`;

var iconStyle = {
  height: 100,
  margin: 10,
  textAlign: "center"
  // lineHeight: 2
};
var paperStyle = {
  marginTop: 30
};
const today = new Date();
const timeOfDay = today => {
  var hour = today.getHours();
  if (hour > 2 && hour < 12) return "Morning";
  else if (hour >= 12 && hour < 16) return "Afternoon";
  else if (hour >= 16) return "Evening";
};
var linkStyle = { textDecoration: "none", color: "black" };

const LandingPage = ({}) => (
  <div class="content-wrapper" style={{ minHeight: 2000 }}>
    <HeaderWrapper>
      <Typography style={{ lineHeight: 1.2 }} variant="h2" color="primary">
        Good {timeOfDay(today)}!
      </Typography>
    </HeaderWrapper>
    <Divider />
    <SubHeaderWrapper>
      <Typography style={{ lineHeight: 1.2 }} variant="h4">
        Welcome to Ad Astra
      </Typography>
    </SubHeaderWrapper>
    <Paper style={paperStyle}>
      <AppExpanderContent appInfo={appInfo}/>
    </Paper>
  </div>
);

export default LandingPage;
