import React from "react";
import styled from "styled-components";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
import { AppExpanderHeader } from "./AppExpanderHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const StyledGridWrapper = styled.div`
  max-width: 90vw;
`;

const StyledIcon = styled.div`
  font-size: 48px;
  line-height: 0;
  padding: 30px;
`;

const IconWrapper = styled(Paper)`
  height: 100;
  width: 100;
  text-align: center;
  padding: 10px;
  // color: var(--dark-grey);
  color: #6c717b;
`;
export const AppExpanderContent = ({ appInfo, toggleOpen }) => (
  <StyledGridWrapper>
    <AppExpanderHeader title="Applications" />
    <Grid container alignContent="center" spacing={0}>
      {Object.keys(appInfo)
        .sort()
        .map(index => (
          <Grid key={index} item xs={6} xl={4} lg={4} md={4} sm={6}>
            <IconWrapper elevation={0} onClick={toggleOpen}>
              <StyledLink key={index} to={appInfo[index].path}>
                <i class="material-icons">
                  <StyledIcon>{appInfo[index].icon}</StyledIcon>
                </i>
                <Typography>{appInfo[index].name}</Typography>
              </StyledLink>
            </IconWrapper>
          </Grid>
        ))}
    </Grid>
  </StyledGridWrapper>
);
