import React from "react";
import styled from "styled-components";
import {
  Button,
  Zoom,
  Typography,
  TableRow,
  Tooltip,
  withStyles
} from "@material-ui/core";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

const ApprovedTB = withStyles({
  root: {
    minWidth: 30,
    backgroundColor: "#8ebb42",
    "&:hover": {
      backgroundColor: (0, _colorManipulator.fade)("#779833", 1)
    }
  },
  label: {
    color: "#e9eef2"
  }
})(ToggleButton);

const BlockedTB = withStyles({
  root: {
    minWidth: 30,
    backgroundColor: "#ef3c29",
    "&:hover": {
      backgroundColor: (0, _colorManipulator.fade)("#ce2a18", 1)
    }
  },
  label: {
    color: "#e9eef2"
  }
})(ToggleButton);

const PendingTB = withStyles({
  root: {
    minWidth: 30,
    "&:hover": {
      backgroundColor: (0, _colorManipulator.fade)("#6c717b", 0.12)
    }
  }
})(ToggleButton);

const ToggleGroup = withStyles({
  root: {
    // border: "2px solid ",
    backgroundColor: "#e9eef2",
    // borderRadius: 15,
    width: 96,
    height: 30
  }
})(ToggleButtonGroup);

const LineItem = ({ item, handleStateChange }) => (
  <ToggleGroup>
    <Tooltip
      enterDelay={1000}
      title={
        item.status > 0
          ? item.status < 3 && item.status % 3 === 2
            ? "Open : Blocked"
            : "Open: Approved"
          : "Open : Pending"
      }
    >
      {item.status > 0 ? (
        item.status < 3 && item.status % 3 === 2 ? (
          <BlockedTB onClick={event => handleStateChange(event, item, "O", true)}>
            R
          </BlockedTB>
        ) : (
          <ApprovedTB onClick={event => handleStateChange(event, item, "O")}>
            R
          </ApprovedTB>
        )
      ) : (
        <PendingTB onClick={event => handleStateChange(event, item, "O")}>
          R
        </PendingTB>
      )}
    </Tooltip>
    <Tooltip
      enterDelay={1000}
      title={
        item.status > 3
          ? item.status < 6 && item.status % 3 === 2
            ? "Reviewed : Blocked"
            : "Reviewed: Approved"
          : "Reviewed : Pending"
      }
    >
      {item.status > 3 ? (
        item.status < 6 && item.status % 3 === 2 ? (
          <BlockedTB onClick={event => handleStateChange(event, item, "R", true)}>
            A
          </BlockedTB>
        ) : (
          <ApprovedTB onClick={event => handleStateChange(event, item, "R")}>
            A
          </ApprovedTB>
        )
      ) : (
        <PendingTB onClick={event => handleStateChange(event, item, "R")}>
          A
        </PendingTB>
      )}
    </Tooltip>
    <Tooltip
      enterDelay={1000}
      title={
        item.status > 6
          ? item.status < 9 && item.status % 3 === 2
            ? "Approved : Blocked"
            : "Approved: Approved"
          : "Approved : Pending"
      }
    >
      {item.status > 6 ? (
        item.status < 9 && item.status % 3 === 2 ? (
          <BlockedTB onClick={event => handleStateChange(event, item, "A", true)}>
            S
          </BlockedTB>
        ) : (
          <ApprovedTB onClick={event => handleStateChange(event, item, "A")}>
            S
          </ApprovedTB>
        )
      ) : (
        <PendingTB onClick={event => handleStateChange(event, item, "A")}>
          S
        </PendingTB>
      )}
    </Tooltip>
  </ToggleGroup>
);

export default LineItem;
