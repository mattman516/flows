import React from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import MessageSidebarList from "./SidebarComponents/MessageSidebarList";
import MessageBar from "./SidebarComponents/MessageBar";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";

const MessageSidebar = ({
  open,
  items,
  handleSidebarClose,
  handleMessageAction,
  item
}) => (
  <div>
  <Hidden xsDown>
    <Sidebar
      variant="persistent"
      anchor="right"
      open={open}
      handleSidebarClose={() => handleSidebarClose()}
      components={
        <div>
          <Divider />
          <div class="messageBar">
          <MessageSidebarList items={items} />
            <MessageBar item={item} handleMessageAction={handleMessageAction} />
          </div>
        </div>
      }
    />
  </Hidden>
  <Hidden smUp>
    <MobileSidebar
      variant="persistent"
      anchor="right"
      open={open}
      handleSidebarClose={() => handleSidebarClose()}
      components={
        <div>
          {/* <Divider /> */}
          <div class="messageBar">
          <MessageSidebarList items={items} />
            <MessageBar item={item} handleMessageAction={handleMessageAction} />
          </div>
        </div>
      }
    />
  </Hidden></div>
);

export default MessageSidebar;
