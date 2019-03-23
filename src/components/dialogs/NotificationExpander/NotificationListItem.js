import React from "react";
import { Link } from "react-router-dom";
import { ListItemText, ListItem, ListItemIcon, Typography } from "@material-ui/core";

var linkStyle = { textDecoration: "none", color: "inherit" };

export const NotificationListItem = ({
  notificationKey,
  notification,
  toggleRead,
  toggleOpen
}) => (
  <ListItem
    key={notificationKey}
    onClick={() => toggleRead(notificationKey)}
  >
    <ListItemIcon>
      <div
        class={
          notification.read
            ? "notification-read-color"
            : "notification-unread-color"
        }
      >
        <i class="material-icons">{notification.icon}</i>
      </div>
    </ListItemIcon>
    <ListItemText
      primary={
        <div
          class={
            notification.read
              ? "notification-read-color"
              : "notification-unread-color"
          }
          onClick={toggleOpen}
        >
          <Link style={linkStyle} to={notification.path}>
            {notification.app + " - " + notification.title}
          </Link>
        </div>
      }
      secondary={
        <div>
          <Typography color='inherit'>{notification.message}</Typography>
          <Typography color='inherit'>{notification.time.toLocaleString("en-US", {day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'})}</Typography>
        </div>
      }
    />
  </ListItem>
);
