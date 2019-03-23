import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
import { Badge } from "@material-ui/core";
// import { appPath } from '../../../data';

const StyledListItem = styled(ListItem)`
  min-width: 300px;
`;

const PlatformSidebarlist = ({ style, items, handleNavChange, count }) => (
  <List style={style}>
    {(items || []).map((page, index) => (
      <StyledListItem
        key={index}
        button
        value={index}
        onClick={() => handleNavChange(page)}
      >
        <ListItemIcon>
          {!page.hasBadges && (
            <i class="material-icons">{page.icon ? page.icon : null}</i>
          )}
          {page.hasBadges && (
            <Badge invisible={count === 0} color="secondary" variant="dot">
              <i class="material-icons">{page.icon ? page.icon : null}</i>
            </Badge>
          )}
        </ListItemIcon>
        <div>
          <ListItemText primary={page.title} />
        </div>
      </StyledListItem>
    ))}
  </List>
);

export default PlatformSidebarlist;
