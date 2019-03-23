import React from "react";
import RoundedButton from "../../customMaterialComponents/RoundedButton";

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
  justify-content: space-between;
  color: var(--highlight-color);
  padding-top: 10px;
  padding-bottom: 5px;
  width: 100%;
`;

const ItemTools = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ItemTitleWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const buttonStyle = {
  marginRight: 10,
  left: 20
};

const badgeStyle = {
  marginLeft: 10,
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
    <ItemTitleWrapper>
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
    </ItemTitleWrapper>
    <ItemTools>
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
      {/* <Badge
        style={badgeStyle}
        color="secondary"
        badgeContent={Math.floor(Math.random() * 5)}
      >
        <RoundedButton
          circled
          style={buttonStyle}
          variant="outlined"
          color="primary"
          onClick={handleMessageOpen}
        >
          <i class="material-icons ">comment</i>
        </RoundedButton>
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
      </IconButton> */}
    </ItemTools>
  </ListItemHeader>
);

export default ItemHeader;
