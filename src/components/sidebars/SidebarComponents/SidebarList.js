import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
// import { appPath } from '../../../data';

const StyledListItem = styled(ListItem)`
  min-width: 300px;
`;

const SidebarList = ({ style, items, handleNavChange, appPath }) => (
  <List style={style}>
    {(items || []).map((page, index) => (
      <StyledListItem
        key={index}
        button
        value={index}
        onClick={() => handleNavChange(page)}
      >
        <ListItemIcon>
          <i class="material-icons">{page.icon ? page.icon : null}</i>
        </ListItemIcon>
        <StyledLink to={appPath + page.path}>
          <ListItemText primary={page.title} />
        </StyledLink>
      </StyledListItem>
    ))}
  </List>
);

export default SidebarList;
