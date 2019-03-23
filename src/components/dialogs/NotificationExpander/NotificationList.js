import React from "react";
import { NotificationListItem } from "./NotificationListItem";
import { NotificationsEmpty } from "./NotificationsEmpty";
import { Divider, List } from "@material-ui/core";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 95vw;
  max-width: 400px;
`;
const listStyle = {
  overflow: "auto",
  maxHeight: 500
};
export const NotificationList = ({
  notificationInfo,
  toggleRead,
  toggleOpen
}) => (
  <StyledDiv>
    {Object.keys(notificationInfo).length > 0 && (
      <List style={listStyle}>
        {Object.keys(notificationInfo).map((index, count) => (
          <div>
            {count !== 0 && <Divider />}
            <NotificationListItem
              notificationKey={notificationInfo[index].id}
              notification={notificationInfo[index]}
              toggleRead={toggleRead}
              toggleOpen={toggleOpen}
            />
          </div>
        ))}
      </List>
    )}

    {Object.keys(notificationInfo).length === 0 && (
      <div>
        <NotificationsEmpty />
      </div>
    )}
  </StyledDiv>
);
