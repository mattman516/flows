import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const src1 =
  "https://news.artnet.com/app/news-upload/2018/02/image-256x256.jpg";
const src2 =
  "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/bc/ba/16/bcba16f8-49ce-c6b9-6226-d7d85a8556ea/source/256x256bb.jpg";
let flip = true;
const getSrc = () => {
  flip = !flip;
  return flip ? src1 : src2;
};

const StyledListItem = withStyles({
  root: {
    maxWidth: 350,
    width: 350
  }
})(ListItem);
const StyledType = withStyles({
  root: {
    paddingLeft: 10
  }
})(Typography);

const MessageInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledMessageAvatar = withStyles({
  root: {
    height: 30,
    width: 30
  }
})(Avatar);


const MessageItem = ({ message, key }) => (
  <StyledListItem key={key}>
    <ListItemIcon>
      <StyledMessageAvatar src={getSrc()} />
    </ListItemIcon>
    <ListItemText
      primary={<Typography color="inherit">{message.message}</Typography>}
      secondary={
        <div>
          <Typography noWrap color="inherit">
            {message.title}
          </Typography>
          <MessageInfoRow>
            <Typography noWrap color="inherit">
              {message.courseCode}
            </Typography>
            <StyledType noWrap color="inherit">
              {message.time.toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                hour: "numeric",
                minute: "numeric"
              })}
            </StyledType>
          </MessageInfoRow>
        </div>
      }
    />
  </StyledListItem>
);

export default MessageItem;
