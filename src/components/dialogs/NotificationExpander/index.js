import React from "react";
import styled from "styled-components";
import { NotificationList } from "./NotificationList";
import { NotificationList2 } from "./NotificationList2";
import { MessageList } from "./MessageList";
import { NotificationListHeader } from "./NotificationListHeader";
import MobileSidebar from "../../sidebars/MobileSidebar";
import { Paper, Popover, ClickAwayListener, Hidden } from "@material-ui/core";

var anchorEl, paperEl;

const StyledPopper = styled(Popover)`
  z-index: 100;
`;

export const NotificationExpander = ({
  anchorEl,
  open,
  toggleOpen,
  toggleRead,
  notificationInfo,
  messageInfo,
  toggleReadNotifications,
  readNotificationsOpen,
  handleReadAll,
  tabValue,
  onTabChange
}) => (
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
        {/* <StyledArrow ref={anchorEl} /> */}
        <ClickAwayListener onClickAway={toggleOpen}>
          <Paper>
            <NotificationListHeader
              title="Notifications"
              tabTitles={["Notifications", "Messages"]}
              handleReadAll={handleReadAll}
              mobile={false}
              tabValue={tabValue}
              onTabChange={onTabChange}
            />
            {tabValue === 0 && (
              <NotificationList
                toggleRead={toggleRead}
                notificationInfo={notificationInfo}
                readNotificationsOpen={readNotificationsOpen}
                toggleReadNotifications={toggleReadNotifications}
                toggleOpen={toggleOpen}
              />
            )}
            {tabValue === 1 && <MessageList messageInfo={messageInfo} />}
          </Paper>
        </ClickAwayListener>
      </StyledPopper>
    </Hidden>
    <Hidden smUp>
      <MobileSidebar
        anchor="left"
        open={open}
        handleSidebarClose={toggleOpen}
        components={
          <div>
            <NotificationListHeader
              title="Notifications"
              tabTitles={["Notifications", "Messages"]}
              handleReadAll={handleReadAll}
              mobile={true}
              tabValue={tabValue}
              onTabChange={onTabChange}
            />
            {tabValue === 0 && (
              <NotificationList
                toggleRead={toggleRead}
                notificationInfo={notificationInfo}
                readNotificationsOpen={readNotificationsOpen}
                toggleReadNotifications={toggleReadNotifications}
                toggleOpen={toggleOpen}
              />
            )}
            {tabValue === 1 && <MessageList messageInfo={messageInfo} />}
          </div>
        }
      />
    </Hidden>
  </div>
);

export const NotificationExpander2 = ({
  anchorEl,
  open,
  toggleOpen,
  toggleRead,
  notificationInfo,
  toggleReadNotifications,
  readNotificationsOpen,
  handleReadAll,
  messageInfo,
  tabValue,
  onTabChange
}) => (
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
            <NotificationListHeader
              title="Notifications"
              tabTitles={["Notifications", "Messages"]}
              handleReadAll={handleReadAll}
              mobile={false}
              tabValue={tabValue}
              onTabChange={onTabChange}
            />
            {tabValue === 0 && (
              <NotificationList2
                toggleRead={toggleRead}
                notificationInfo={notificationInfo}
                readNotificationsOpen={readNotificationsOpen}
                toggleReadNotifications={toggleReadNotifications}
                toggleOpen={toggleOpen}
              />
            )}
            {tabValue === 1 && <MessageList messageInfo={messageInfo} />}
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
          <div>
            <NotificationListHeader
              title="Notifications"
              tabTitles={["Notifications", "Messages"]}
              handleReadAll={handleReadAll}
              mobile={true}
              tabValue={tabValue}
              onTabChange={onTabChange}
            />
            {tabValue === 0 && (
              <NotificationList2
                toggleRead={toggleRead}
                notificationInfo={notificationInfo}
                readNotificationsOpen={readNotificationsOpen}
                toggleReadNotifications={toggleReadNotifications}
                toggleOpen={toggleOpen}
              />
            )}
            {tabValue === 1 && <MessageList messageInfo={messageInfo} />}
          </div>
        }
      />
    </Hidden>
  </div>
);
