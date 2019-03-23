import React from "react";
import SidebarList from "./SidebarComponents/SidebarList";
import PlatformSidebarList from "./SidebarComponents/PlatformSidebarList";
import MobileSidebar from "./MobileSidebar";

const MobileNavSidebar = ({
  open,
  handleSidebarClose,
  handleNavChange,
  pagesInfo,
  toolInfo,
  appPath,
  handlePlatformNavChange,
  username,
  avatarSrc,
  count
}) => (
  <MobileSidebar
    variant="persistent"
    anchor="left"
    open={open}
    handleSidebarClose={handleSidebarClose}
    title={username}
    avatarSrc={avatarSrc}
    components={
      <div>
        <SidebarList
          style={{ backgroundColor: "#fff" }}
          items={pagesInfo}
          handleNavChange={handleNavChange}
          appPath={appPath}
        />
        <PlatformSidebarList
          style={{ backgroundColor: "#eee" }}
          items={toolInfo}
          handleNavChange={handlePlatformNavChange}
          count={count}
        />
      </div>
    }
  />
);
export default MobileNavSidebar;
