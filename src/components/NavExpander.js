import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import { StyledLink } from "./customMaterialComponents/StyledLink";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

var anchorEl;

const NavExpander = ({
  open,
  toggleOpen,
  navInfo,
  appPath,
  handleNavClick
}) => (
  <div>
    <IconButton
      buttonRef={node => {
        anchorEl = node;
      }}
      aria-owns={open ? "menu-list-grow" : undefined}
      aria-haspopup="true"
      onClick={toggleOpen}
    >
      <ExpandMoreIcon/>
    </IconButton>
    <Popper open={open} anchorEl={anchorEl}>
      <Paper>
        <ClickAwayListener onClickAway={toggleOpen}>
          <MenuList>
            {navInfo.map((nav, index) => (
              <StyledLink key={index} to={appPath + nav.path}>
                <MenuItem key={index} onClick={() => handleNavClick(index)}>
                  <ListItemIcon>
                    <i class="material-icons">{nav.icon}</i>
                  </ListItemIcon>
                  <ListItemText primary={nav.title} />
                </MenuItem>
                <Divider />
              </StyledLink>
            ))}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  </div>
);

export default NavExpander;
