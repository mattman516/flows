import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withStyles } from "@material-ui/core/styles";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

const StyledListItem = withStyles({
  root: {
    backgroundColor: "#ddd",
    minWidth: 300
  }
})(ListItem);

const StyledNotificationIcon = withStyles({
  root: {
    height: 30,
    width: 30
  }
})(NotificationImportant)

const SidebarList = ({ notification, key }) => (
  <StyledListItem key={key}>
    <ListItemIcon>
      <div class={"notification-read-color"}>
        <StyledNotificationIcon />
      </div>
    </ListItemIcon>
    <ListItemText
      secondary={
        <div>
          <Typography color="inherit">{notification.message}</Typography>
          <Typography color="inherit">
            {notification.time.toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              hour: "numeric",
              minute: "numeric"
            })}
          </Typography>
        </div>
      }
    />
  </StyledListItem>
);

export default SidebarList;
