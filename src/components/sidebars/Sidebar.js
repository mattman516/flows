import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import logo from "../.././IMG/ad_astra-color.svg";
import { withStyles } from "@material-ui/core";

const StyledDrawer = withStyles({
  paperAnchorRight: {
    width: 350
  },
})(Drawer);

const SidebarTemplate = ({
  variant,
  anchor,
  open,
  handleSidebarClose,
  components
}) => (
  <StyledDrawer variant={variant} anchor={anchor} open={open}>
    <div class="sidebar-header">
      <IconButton onClick={handleSidebarClose}>
        <i class="material-icons">clear</i>
      </IconButton>
      <img class="sidebar-logo" src={logo} alt="Ad Astra" />
    </div>
    <div>{components}</div>
  </StyledDrawer>
);

export default SidebarTemplate;
