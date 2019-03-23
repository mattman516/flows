import React from "react";
import { NotificationListItem } from "./NotificationListItem";
import styled from 'styled-components';
import { Divider, List, Paper, Typography } from "@material-ui/core";

const StyledEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6c717b;
  padding: 30px;
`
export const NotificationsEmpty = () => (
  <StyledEmptyContainer >
    <i style={{ fontSize: 72 }} class="material-icons">
      insert_emoticon
    </i>
    <Typography color="inherit">No Notifications</Typography>
  </StyledEmptyContainer>
);
