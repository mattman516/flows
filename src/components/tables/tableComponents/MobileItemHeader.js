import React from "react";
import RoundedButton from "../../customMaterialComponents/RoundedButton";
import styled from "styled-components";

import {
  Typography,
  Tooltip,
  Checkbox,
  Badge,
  Zoom,
  IconButton
} from "@material-ui/core";

const ListItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--highlight-color);
  padding-top: 20px;
`;

const TitleContainer = styled.div`
  width: 50vw;
`;

const ItemTools = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  right: 5px;
`;

const SpinnerContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: center !important;
`;

const buttonStyle = {
  marginRight: 10,
  left: 20
};

const badgeStyle = {
  left: -20
};

const noCheckStyle = {
  width: 10
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
  <div>
    <ListItemHeader>
      {check && (
        <Checkbox
          checked={isItemSelected}
          onClick={event => handleCheckClick(event, item.id)}
        />
      )}
      {!check && <span style={noCheckStyle} />}

      <TitleContainer
        onClick={event => handleCourseOpen && handleCourseOpen(event, item)}
      >
        <Typography
          variant="h5"
          color="inherit"
          onClick={event => handleCourseOpen && handleCourseOpen(event, item)}
          noWrap
        >
          {item.code}
        </Typography>
        <Typography noWrap variant="h6" color="inherit" noWrap>
          {item.name}
        </Typography>
      </TitleContainer>
      <ItemTools>
        <Badge
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
        <IconButton onClick={event => handleResetValue(event, item)}>
          <i class="material-icons">more_vert</i>
        </IconButton>
      </ItemTools>
    </ListItemHeader>
    <ListItemHeader>
      <span style={noCheckStyle} />
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
    </ListItemHeader>
    <ListItemHeader>
      <SpinnerContainer>
        <RoundedButton
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
          <a
            color="inherit"
            onClick={event => handleValueChange(event, item, 1)}
          >
            <i class="material-icons ">chevron_right</i>
          </a>
        </RoundedButton>
      </SpinnerContainer>
    </ListItemHeader>
  </div>
);

export default ItemHeader;
