import React from "react";
import styled from "styled-components";
import { NotificationListItem } from "./NotificationListItem";
import { NotificationsEmpty } from "./NotificationsEmpty";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";

const listStyle = {
  overflow: "auto",
  maxHeight: 500
};
const StyledDiv = styled.div`
  width: 95vw;
  max-width: 400px;
`;

const getExpandIcon = open => {
  return open ? (
    <i class="material-icons">expand_less</i>
  ) : (
    <i class="material-icons">expand_more</i>
  );
};
export const NotificationList2 = ({
  notificationInfo,
  toggleRead,
  readNotificationsOpen,
  toggleReadNotifications,
  toggleOpen
}) => (
  <StyledDiv>
    {Object.keys(notificationInfo).length > 0 && (
      <div>
        <ListSubheader disableSticky>{"Unread"}</ListSubheader>
        <List style={listStyle}>
          {Object.keys(notificationInfo).map(index => (
            <div>
              {notificationInfo[index].read === false && (
                <div>
                  <Divider variant="middle" />
                  <NotificationListItem
                    notificationKey={notificationInfo[index].id}
                    notification={notificationInfo[index]}
                    toggleRead={toggleRead}
                    toggleOpen={toggleOpen}
                  />
                </div>
              )}
            </div>
          ))}
        </List>
        <ListSubheader
          disableSticky
          style={{ display: "flex", alignItems: "center", width: 500 }}
          onClick={toggleReadNotifications}
        >
          Read {getExpandIcon(readNotificationsOpen)}
        </ListSubheader>
        <Collapse in={readNotificationsOpen} timeout="auto" unmountOnExit>
          <List style={listStyle}>
            {Object.keys(notificationInfo).map((index, count) => (
              <div>
                {notificationInfo[index].read === true && (
                  <div>
                    <Divider variant="middle" />
                    <NotificationListItem
                      notificationKey={notificationInfo[index].id}
                      notification={notificationInfo[index]}
                      toggleRead={toggleRead}
                      toggleOpen={toggleOpen}
                    />
                  </div>
                )}
              </div>
            ))}
          </List>
        </Collapse>
      </div>
    )}

    {Object.keys(notificationInfo).length === 0 && (
      <div>
        <NotificationsEmpty />
      </div>
    )}
  </StyledDiv>
);
