import React from "react";
import styled from "styled-components";
import { Button, withStyles, Badge, Typography } from "@material-ui/core";
import CheveronLeft from "@material-ui/icons/ChevronLeft";
import CheveronRight from "@material-ui/icons/ChevronRight";

const InnerSpinnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const SpinnerWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BadgeWrapper = styled.div`
  margin-left: 5px;
  color: #1b77b7;
`;

const RoundedButton = withStyles({
  root: {
    borderRadius: 20,
    border: "2px solid",
    height: 40,
    width: 100
  },
  contained: {
    border: "0px solid",
    boxShadow: "none"
  }
})(Button);

const getUpShift = (event, item) => {
  if (
    event.shiftKey &&
    item.sectionA !== item.sectionAOriginal &&
    item.sectionA !== item.sectionB &&
    item.sectionA < item.sectionAOriginal &&
    item.sectionB < item.sectionAOriginal
  )
    return item.sectionB - item.sectionA;
  else if (
    event.shiftKey &&
    item.sectionA !== item.sectionAOriginal &&
    item.sectionA < item.sectionAOriginal
  )
    return item.sectionAOriginal - item.sectionA;
  else if (
    event.shiftKey &&
    item.sectionA !== item.sectionB &&
    item.sectionA < item.sectionB
  )
    return item.sectionB - item.sectionA;
  else return 1;
};

const getDownShift = (event, item) => {
  if (
    event.shiftKey &&
    item.sectionA !== item.sectionAOriginal &&
    item.sectionA !== item.sectionB &&
    item.sectionA > item.sectionAOriginal &&
    item.sectionB > item.sectionAOriginal
  )
    return item.sectionB - item.sectionA;
  else if (
    event.shiftKey &&
    item.sectionA !== item.sectionAOriginal &&
    item.sectionA > item.sectionAOriginal
  )
    return item.sectionAOriginal - item.sectionA;
  else if (
    event.shiftKey &&
    item.sectionA !== item.sectionB &&
    item.sectionA > item.sectionB
  )
    return item.sectionB - item.sectionA;
  else return -1;
};

const Spinner = ({ item, handleValueChange, changed }) => (
  <SpinnerWrapper>
    <RoundedButton
      disableRipple
      variant={changed ? "contained" : "outlined"}
      color="primary"
    >
      <InnerSpinnerWrapper>
        <CheveronLeft
          color="inherit"
          onClick={event => {
            handleValueChange(event, item, getDownShift(event, item));
          }}
        />
        <span class="button-lbl">{item.sectionA}</span>
        <CheveronRight
          color="inherit"
          onClick={event => {
            handleValueChange(event, item, getUpShift(event, item));
          }}
        />
      </InnerSpinnerWrapper>
    </RoundedButton>
    <BadgeWrapper>
      {item.sectionA === item.sectionAOriginal
        ? null
        : item.sectionA > item.sectionAOriginal
        ? <Typography color='inherit'>{"+" + (item.sectionA - item.sectionAOriginal)}</Typography>
        : <Typography color='inherit'>{item.sectionA - item.sectionAOriginal}</Typography>
      }
    </BadgeWrapper>
  </SpinnerWrapper>
);

export default Spinner;
