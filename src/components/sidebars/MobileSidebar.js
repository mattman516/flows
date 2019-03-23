import React from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
  max-height: 25px;
  max-width: 25px;
`;

const MobileSidebarHeader = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #f1f3f4;
  border-top: 3px solid #3590dc;
  min-height: 55px;
  min-width: 90vw;
`;


const SidebarTemplate = ({
  variant,
  anchor,
  open,
  handleSidebarClose,
  components,
  title,
  avatarSrc
}) => (
    <Drawer  variant="temporary" anchor={anchor} open={open}>
      <MobileSidebarHeader>
        <IconButton onClick={handleSidebarClose}>
          <i class="material-icons">clear</i>
        </IconButton>
        {avatarSrc ? (
          <StyledAvatar alt="User" src={avatarSrc} />
        ) : (
          <IconButton>
            <i class="material-icons">face</i>
          </IconButton>
        )}
        <Typography> {title || "User"} </Typography>
      </MobileSidebarHeader>
      <div>{components}</div>
    </Drawer>
);

export default SidebarTemplate;
