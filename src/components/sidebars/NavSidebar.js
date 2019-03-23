import React from "react";
import Sidebar from "./Sidebar";
import SidebarList from "./SidebarComponents/SidebarList";
import MobileSidebarContainer from "../../apps/platform/containers/MobileNavSidebarContainer";
import { Hidden } from "@material-ui/core";

const NavSidebar = ({
  open,
  handleSidebarClose,
  handleNavChange,
  pagesInfo,
  appPath
}) => (
  <div>
    <Hidden xsDown>
      <Sidebar
        variant="persistent"
        anchor="left"
        open={open}
        handleSidebarClose={handleSidebarClose}
        components={
          <SidebarList
            items={pagesInfo}
            handleNavChange={handleNavChange}
            appPath={appPath}
          />
        }
      />
    </Hidden>
    <Hidden smUp>
      <MobileSidebarContainer
        open={open}
        handleSidebarClose={handleSidebarClose}
        handleNavChange={handleNavChange}
        pagesInfo={pagesInfo}
        appPath={appPath}
      />
    </Hidden>
  </div>
);

export default NavSidebar;
