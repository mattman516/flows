import React from "react";
// import RoundedButton from "../../customMaterialComponents/RoundedButton";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
  Typography,
  Tooltip,
  Checkbox,
  Badge,
  Zoom,
  IconButton
} from "@material-ui/core";
import styled from "styled-components";

const ListItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--highlight-color);
  padding: 20px 0;
  padding-bottom: 0px;
`;
const RoundedButton = withStyles({
  root: {
    borderRadius: 48 / 2,
    border: "2px solid",
    height: 48,
    "&:hover": {
      border: "2px solid"
    }
  },
  contained: {
    border: "2px solid",
    borderColor: "#3590dc",
    boxShadow: "none"
  }
})(Button);
const CircledButton = withStyles({
  root: {
    border: "2px solid",
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 48,
    height: 48,
    "&:hover": {
      border: "2px solid"
    }
  },
  contained: {
    border: "2px solid",
    borderColor: "#3590dc",
    boxShadow: "none"
  }
})(Button);

const buttonStyle = {
  marginRight: 10,
  left: 20
};

const badgeStyle = {
  left: -20
};

const noCheckStyle = {
  width: 50
};

const ItemHeader = ({
  check,
  title,
  item,
  isItemSelected,
  candidateType,
  handleCheckClick,
  handleResetValue,
  handleCourseOpen,
  handleValueChange,
  handleMessageOpen,
  changed
}) => (
  <ListItemHeader>
    {check && (
      <Checkbox
        checked={isItemSelected}
        onClick={event => handleCheckClick(event, item.id)}
      />
    )}
    {!check && <span style={noCheckStyle} />}
    <Typography
      variant="h5"
      color="inherit"
      onClick={event => handleCourseOpen && handleCourseOpen(event, item)}
    >
      {item.code + " / " + item.name}
    </Typography>
    <div class="item-tools">
      <Tooltip
        title={
          candidateType === "Addition Candidate"
            ? "Reduced seats offered this term have made this materially optional and historically underfilled course an Addition Candidate"
            : "Ongoing over-supply of seats in this course have led to low historical fill rates and section Efficiency Candidate(s)"
        }
        TransitionComponent={Zoom}
      >
        <div>
          <i class="material-icons needs-padding">info_outline</i>
        </div>
      </Tooltip>
      <Typography class="needs-padding" color="inherit">
        {candidateType}
      </Typography>
      <Badge
        style={badgeStyle}
        color="secondary"
        badgeContent={item.messages ? item.messages.length : Math.floor(Math.random() * 5)}
      >
        <CircledButton
          style={buttonStyle}
          variant="outlined"
          color="primary"
          onClick={event => handleMessageOpen(event, item)}
        >
          <i class="material-icons ">comment</i>
        </CircledButton>
      </Badge>
      <RoundedButton
        disableRipple
        variant={changed ? "contained" : "outlined"}
        color="primary"
      >
        <a
          color="inherit"
          onClick={event => handleValueChange(event, item, -1)}
        >
          <i class="material-icons ">chevron_left</i>
        </a>

        <span class="button-lbl">{item.sectionA} Sections</span>
        <a color="inherit" onClick={event => handleValueChange(event, item, 1)}>
          <i class="material-icons ">chevron_right</i>
        </a>
      </RoundedButton>
      <IconButton onClick={event => handleResetValue(event, item)}>
        <i class="material-icons">more_vert</i>
      </IconButton>
    </div>
  </ListItemHeader>
);

export default ItemHeader;
