import React from "react";
import GraphHolder from "./GraphHolder";
import ItemHeader from "./ItemHeader";
import MobileGraphHolder from "./MobileGraphHolder";
import MobileItemHeader from "./MobileItemHeader";

import { Hidden, Paper } from "@material-ui/core";

const buttonStyle = {
  width: "100%"
};

const CourseItem = ({
  item,
  candidateType,
  changed,
  handleValueChange,
  handleMessageOpen
}) => (
  <div>
    <Hidden xsDown>
      <Paper elevation={15}>
        <Paper style={buttonStyle} elevation={0} squared="true">
          <ItemHeader
            check={false}
            title={"Change Candidate"}
            item={item}
            isItemSelected={false}
            candidateType={candidateType}
            handleCourseOpen={false}
            handleValueChange={handleValueChange}
            handleCheckClick={null}
            changed={changed}
            handleMessageOpen={handleMessageOpen}
          />
        </Paper>
        <Paper style={buttonStyle} elevation={0} squared="true">
          <div class="list-item">
            <GraphHolder candidateType={candidateType} item={item} />
          </div>
        </Paper>
      </Paper>
    </Hidden>
    <Hidden smUp>
      <Paper elevation={15}>
        <Paper style={buttonStyle} elevation={0} squared="true">
          <MobileItemHeader
            check={false}
            title={"Change Candidate"}
            item={item}
            isItemSelected={false}
            candidateType={candidateType}
            handleCourseOpen={false}
            handleValueChange={handleValueChange}
            handleCheckClick={null}
            changed={changed}
            handleMessageOpen={handleMessageOpen}
          />
        </Paper>
        <Paper style={buttonStyle} elevation={0} squared="true">
          <div class="list-item">
            <MobileGraphHolder candidateType={candidateType} item={item} />
          </div>
        </Paper>
      </Paper>
    </Hidden>
  </div>
);

export default CourseItem;
