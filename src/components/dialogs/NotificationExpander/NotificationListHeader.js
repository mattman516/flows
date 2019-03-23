import React from "react";
import styled from "styled-components";
import { Paper, Tabs, Typography, Tab, Button } from "@material-ui/core";

const StyledPopperTitle = styled(Typography)``;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-top: 10px;
  padding-right: 20px;
  justify-content: space-between;
`;

export const NotificationListHeader = ({
  title,
  tabTitles,
  handleReadAll,
  mobile,
  tabValue,
  onTabChange
}) => (
  <div>
    <StyledDiv>
      <StyledPopperTitle variant="h6">{title}</StyledPopperTitle>
      <Button onClick={handleReadAll}>Read All</Button>
    </StyledDiv>
    <Paper elevation={0} square>
      <Tabs
        value={tabValue}
        indicatorColor="primary"
        centered={mobile}
        onChange={onTabChange}
        action={event => onTabChange(event, 0)}
      >
        <Tab label={tabTitles[0]} />
        <Tab label={tabTitles[1]} />
      </Tabs>
    </Paper>
  </div>
);
