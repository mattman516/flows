import React from "react";
import RoundedButton from "../../customMaterialComponents/RoundedButton";

import {
  Badge,
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

const buttonStyle = {
  marginRight: 10,
  left: 20
};

const badgeStyle = {
  marginLeft: 10,
  left: -20
};

const ItemHeader = ({
  item,
  handleResetValue,
  handleValueChange,
  handleMessageOpen,
  changed
}) => (
  <ListItemHeader>
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
    </ItemTools>
  </ListItemHeader>
);

export default ItemHeader;
