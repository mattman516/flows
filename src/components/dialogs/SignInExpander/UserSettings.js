import React from "react";
import styled from "styled-components";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Settings from "@material-ui/icons/Settings";
import Close from "@material-ui/icons/Close";
import { ListItemIcon, ListItemText, List } from "@material-ui/core";

const StyledAvatar = styled(Avatar)`
  max-height: 23px;
  max-width: 23px;
`;

export const UserSettings = ({ userInfo, logout }) => (
  <List>
    <ListItem>
      <ListItemIcon>
        <StyledAvatar alt="User" src={userInfo.avatarSrc} />
      </ListItemIcon>
      <ListItemText> {userInfo.name} </ListItemText>
    </ListItem>
    <StyledLink to="/settings">
      <ListItem >
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText> User settings </ListItemText>
      </ListItem>
    </StyledLink>
    <StyledLink to="/signin">
      <ListItem onClick={logout}>
        <ListItemIcon>
          <Close />
        </ListItemIcon>
        <ListItemText> Log out </ListItemText>
      </ListItem>
    </StyledLink>
  </List>
);
