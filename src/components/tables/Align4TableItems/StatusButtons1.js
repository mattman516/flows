import React from "react";
import styled from "styled-components";
import {
  Fab,
  Button,
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
    border: "2px solid",
    borderColor: "#8ebb42",
    borderRadius: 15,
    marginRight: 2,
    minWidth: 0,
    width: 30,
    height: 30,
    backgroundColor: "#8ebb42",
    "&:hover": {
      backgroundColor: (0, _colorManipulator.fade)("#779833", 1),
      borderColor: "#779833"
    }
  },
  label: {
    color: "#e9eef2"
  }
})(Button);

const BlockedTB = withStyles({
  root: {
    border: "2px solid",
    borderColor: "#ef3c29",
    borderRadius: 5,
    marginRight: 2,
    minWidth: 0,
    width: 30,
    height: 30,
    backgroundColor: "#ef3c29",
    "&:hover": {
      backgroundColor: (0, _colorManipulator.fade)("#ce2a18", 1),
      borderColor: "#ce2a18"
    }
  },
  label: {
    color: "#e9eef2"
  }
})(Button);

const PendingTB = withStyles({
  root: {
    border: "2px solid",
    borderRadius: 15,
    marginRight: 2,
    minWidth: 0,
    width: 30,
    height: 30,
    "&:hover": {
      backgroundColor: (0, _colorManipulator.fade)("#6c717b", 0.12),
      border: "2px solid"
    }
  }
})(Button);

const CellRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LineItem = ({ item, handleStateChange }) => (
  <CellRow>
    {/* <Tooltip
      enterDelay={1000}
      title={
        item.status > 0
          ? item.status < 3 && item.status % 3 === 2
            ? "Open : Blocked"
            : "Open: Approved"
          : "Open : Pending"
      }
    > */}
      {item.status > 0 ? (
        item.status < 3 && item.status % 3 === 2 ? (
          <BlockedTB
            variant="outlined"
            size="small"
            onClick={event => handleStateChange(event, item, "O")}
          >
            A
          </BlockedTB>
        ) : (
          <ApprovedTB
            variant="outlined"
            size="small"
            onClick={event => handleStateChange(event, item, "O", true)}
          >
            A
          </ApprovedTB>
        )
      ) : (
        <PendingTB
          variant="outlined"
          size="small"
          color="primary"
          onClick={event => handleStateChange(event, item, "O")}
        >
          A
        </PendingTB>
      )}
    {/* </Tooltip>
    <Tooltip
      enterDelay={1000}
      title={
        item.status > 3
          ? item.status < 6 && item.status % 3 === 2
            ? "Reviewed : Blocked"
            : "Reviewed: Approved"
          : "Reviewed : Pending"
      }
    > */}
      {item.status > 3 ? (
        item.status < 6 && item.status % 3 === 2 ? (
          <BlockedTB
            variant="outlined"
            size="small"
            onClick={event => handleStateChange(event, item, "R")}
          >
            S
          </BlockedTB>
        ) : (
          <ApprovedTB
            variant="outlined"
            size="small"
            onClick={event => handleStateChange(event, item, "R", true)}
          >
            S
          </ApprovedTB>
        )
      ) : (
        <PendingTB
          variant="outlined"
          size="small"
          color="primary"
          onClick={event => handleStateChange(event, item, "R")}
        >
          S
        </PendingTB>
      )}
    {/* </Tooltip>
    <Tooltip
      title={
        item.status > 6
          ? item.status < 9 && item.status % 3 === 2
            ? "Approved : Blocked"
            : "Approved: Approved"
          : "Approved : Pending"
      }
    > */}
      {/* <div>
        {item.status > 6 ? (
          item.status < 9 && item.status % 3 === 2 ? (
            <BlockedTB
              variant="outlined"
              size="small"
              onClick={event => handleStateChange(event, item, "A")}
            >
              S
            </BlockedTB>
          ) : (
            <ApprovedTB
              variant="outlined"
              size="small"
              onClick={event => handleStateChange(event, item, "A", true)}
            >
              S
            </ApprovedTB>
          )
        ) : (
          <PendingTB
            variant="outlined"
            size="small"
            color="primary"
            onClick={event => handleStateChange(event, item, "A")}
          >
            S
          </PendingTB>
        )}
      </div> */}
    {/* </Tooltip> */}
  </CellRow>
);

export default LineItem;
