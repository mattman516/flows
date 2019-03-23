import React from "react";
import styled from "styled-components";
import {
  Divider,
  Paper,
  TableRow,
  Hidden,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GraphHolder from "./GraphHolder";
import ItemHeader from "./ItemHeader";
import ItemActions from "./ItemActions";
import MobileGraphHolder from "./MobileGraphHolder";
import MobileItemHeader from "./MobileItemHeader";

const buttonStyle = {
  width: "100%"
};

const StyledGraphHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--dark-gray);
  padding-top: 10px;
  padding-bottom: 20px;
  width: 100%;
`;

const StyledItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--highlight-color);
  width: 100%;
`;

const ExpandWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // background-color: #eee;
  color: #999;
  padding-bottom: 5px;
`;

export const LineItem = ({
  item,
  candidateType,
  isItemSelected,
  changed,
  handleValueChange,
  handleCheckClick,
  handleCourseOpen,
  handleMessageOpen,
  handleResetValue,
  graphOpen,
  toggleGraph
}) => (
  <div key={item.id}>
    <Hidden xsDown>
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <StyledItemHeader>
            <ItemHeader
              check={true}
              title={item.code + " / " + item.name}
              item={item}
              isItemSelected={isItemSelected}
              candidateType={candidateType}
              handleCourseOpen={handleCourseOpen}
              handleCheckClick={handleCheckClick}
            />
          </StyledItemHeader>
        </ExpansionPanelSummary>
        {/* <ExpansionPanelActions>
        </ExpansionPanelActions> */}
        <ExpansionPanelDetails>
          <StyledGraphHolder>
            <GraphHolder candidateType={candidateType} item={item} />
            <ItemActions
              item={item}
              candidateType={candidateType}
              handleValueChange={handleValueChange}
              changed={changed}
              handleMessageOpen={handleMessageOpen}
              handleResetValue={handleResetValue}
            />
          </StyledGraphHolder>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Hidden>
    <Hidden smUp>
      not implemented
      {/* <Paper style={buttonStyle} elevation={0} squared="true">
        <MobileItemHeader
          check={true}
          // title={item.code + ' / ' + item.name}
          item={item}
          isItemSelected={isItemSelected}
          candidateType={candidateType}
          handleCourseOpen={handleCourseOpen}
          handleValueChange={handleValueChange}
          handleCheckClick={handleCheckClick}
          changed={changed}
          handleMessageOpen={handleMessageOpen}
          handleResetValue={handleResetValue}
        />
      </Paper>
      <Paper style={buttonStyle} elevation={0} squared="true" class="list-item">
        <MobileGraphHolder candidateType={candidateType} item={item} />
      </Paper> */}
    </Hidden>

    <Divider />
  </div>
);

export const LineItem1 = ({ item }) => <div>{item.code}</div>;
