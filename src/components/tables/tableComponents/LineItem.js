import React from "react";
import { Divider, Paper, TableRow, Hidden } from "@material-ui/core";

import GraphHolder from "./GraphHolder";
import ItemHeader from "./ItemHeader";
import MobileGraphHolder from "./MobileGraphHolder";
import MobileItemHeader from "./MobileItemHeader";

const buttonStyle = {
  width: "100%"
};

const LineItem = ({
  item,
  candidateType,
  isItemSelected,
  changed,
  handleValueChange,
  handleCheckClick,
  handleCourseOpen,
  handleMessageOpen,
  handleResetValue
}) => (
  <TableRow key={item.id}>
    <Hidden xsDown>
      <Paper style={buttonStyle} elevation={0} squared="true">
        <ItemHeader
          check={true}
          title={item.code + " / " + item.name}
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
        <GraphHolder candidateType={candidateType} item={item} />
      </Paper>
    </Hidden>
    <Hidden smUp>
      <Paper style={buttonStyle} elevation={0} squared="true">
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
      </Paper>
    </Hidden>

    <Divider />
  </TableRow>
);

export default LineItem;
