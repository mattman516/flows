import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
import MessageSidebarNotificationItem from "./MessageSidebarNotificationItem";
import MessageSidebarMessageItem from "./MessageSidebarMessageItem";
import { withStyles } from "@material-ui/core";
import styled from "styled-components";

const listStyle = {
  minWidth: 300
};

const StyledList = withStyles({
  root: {
    overflow: 'auto',
    maxHeight: '78vh',
  }
})(List);

const src1 =
  "https://news.artnet.com/app/news-upload/2018/02/image-256x256.jpg";
const src2 =
  "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/bc/ba/16/bcba16f8-49ce-c6b9-6226-d7d85a8556ea/source/256x256bb.jpg";
let flip = true;
const getSrc = () => {
  flip = !flip;
  return flip ? src1 : src2;
};

const SidebarList = ({ items }) => (
  <StyledList>
    {(items || []).map((item, key) =>
      item.type === "notification" ? (
        <MessageSidebarNotificationItem notification={item} key={key} />
      ) : (
        <MessageSidebarMessageItem message={item} key={key} />
      )
    )}
  </StyledList>
);

export default SidebarList;
