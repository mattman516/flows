import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popper";
import Hidden from "@material-ui/core/Hidden";
import MobileSidebar from "../../sidebars/MobileSidebar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { AppExpanderContent } from "./AppExpanderContent";

var anchorEl;

const StyledPopper = styled(Popover)`
  width: 360px;
  z-index: 1100;
`;

export const AppExpander = ({ anchorEl, open, toggleOpen, appInfo }) => (
  <div>
    <Hidden xsDown>
      <StyledPopper
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
      >
        <ClickAwayListener onClickAway={toggleOpen}>
          <Paper>
            <AppExpanderContent appInfo={appInfo} toggleOpen={toggleOpen} />
          </Paper>
        </ClickAwayListener>
      </StyledPopper>
    </Hidden>
    <Hidden smUp>
      <MobileSidebar
        variant="persistent"
        anchor="left"
        open={open}
        handleSidebarClose={toggleOpen}
        components={
          <AppExpanderContent appInfo={appInfo} toggleOpen={toggleOpen} />
        }
      />
    </Hidden>
  </div>
);
