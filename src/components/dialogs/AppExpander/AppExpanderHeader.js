import React from "react";
import styled from "styled-components";
import {  Typography, Button } from "@material-ui/core";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-top: 10px;
  padding-right: 20px;
  justify-content: space-between;
`;


export const AppExpanderHeader = ({ title }) => (
  <div>
    <StyledDiv>
      <Typography variant="h6">{title}</Typography>
    </StyledDiv>
  </div>
);