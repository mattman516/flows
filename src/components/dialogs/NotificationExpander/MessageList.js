import React from "react";
import { NotificationListItem } from "./NotificationListItem";
import MessageListItem from "../../sidebars/SidebarComponents/MessageSidebarMessageItem";
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
export const MessageList = ({
    messageInfo,
}) => (
  <StyledDiv>
    {Object.keys(messageInfo).length > 0 && (
      <List style={listStyle}>
        {Object.keys(messageInfo).map((index, count) => (
          <div>
            {count !== 0 && <Divider />}
            <MessageListItem
              key={count}
              message={messageInfo[index]}
            />
          </div>
        ))}
      </List>
    )}

    {Object.keys(messageInfo).length === 0 && (
      <div>
        <NotificationsEmpty />
      </div>
    )}
  </StyledDiv>
);
