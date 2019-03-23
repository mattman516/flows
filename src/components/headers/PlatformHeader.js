import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../.././IMG/ad_astra-color.svg";
import IconButton from "@material-ui/core/IconButton";
import { AppBar, Toolbar, Badge, Hidden } from "@material-ui/core";
import { Face, Search, Apps, NotificationsNone } from "@material-ui/icons";
import SlackFeedback from "../customMaterialComponents/Slack"; //comment out for bit
import Avatar from "@material-ui/core/Avatar";

const StyledAvatar = styled(Avatar)`
  max-height: 25px;
  max-width: 25px;
`;

export const StyledToolbarPlatform = styled(Toolbar)`
  // background-color: var(--off-white);
  // border-top: 4px solid var(--highlight-color);
  background-color: #f1f3f4;
  border-top: 4px solid #3590dc;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlatformBrand = styled.img`
  height: 24px;
  width: 96px;
  line-height: 0;
  padding: 30px;
`;

export const PlatformTools = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
`;

export const PlatformToolsWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
`;
export const StyledMaterialAppBar = styled(AppBar)`
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
`;

var anchorElApp, anchorElNoti1, anchorElNoti2, anchorElSignIn;

const PlatformHeader = ({
  handleSidebarClose,
  appOpen,
  toggleAppOpen,
  countNoti,
  noti1Open,
  toggleNoti1Open,
  noti2Open,
  toggleNoti2Open,
  signInOpen,
  toggleSignIn,
  AppExpander,
  NotificationExpander,
  NotificationExpander2,
  SearchBarContainer,
  SignInExpander,
  userInfo
}) => (
  <div>
    <Hidden xsDown>
      <SearchBarContainer />
      <StyledMaterialAppBar position="relative" color="default">
        <StyledToolbarPlatform>
          <Link to="/">
            <PlatformBrand src={logo} alt="Ad Astra" />
          </Link>
          <PlatformTools>
            <PlatformToolsWrapper>
              <IconButton onClick={() => handleSidebarClose()}>
                <Search />
              </IconButton>
              <IconButton
                buttonRef={node => {
                  anchorElApp = node;
                }}
                aria-owns={appOpen ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={toggleAppOpen}
              >
                <Apps />
              </IconButton>

              <IconButton
                buttonRef={node => {
                  anchorElNoti1 = node;
                }}
                aria-owns={noti1Open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={toggleNoti1Open}
              >
                <Badge badgeContent={countNoti} color="secondary">
                  <NotificationsNone />
                </Badge>
              </IconButton>
              <IconButton
                buttonRef={node => {
                  anchorElNoti2 = node;
                }}
                aria-owns={noti2Open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={toggleNoti2Open}
              >
                <Badge badgeContent={countNoti} color="secondary">
                  <NotificationsNone />
                </Badge>
              </IconButton>
              <IconButton
                buttonRef={node => {
                  anchorElSignIn = node;
                }}
                aria-owns={signInOpen ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={toggleSignIn}
              >
                {userInfo.loggedIn ? <StyledAvatar src={userInfo.avatarSrc}/>  : <Face />}
              </IconButton>
            </PlatformToolsWrapper>
            <SlackFeedback user={userInfo.email} />
          </PlatformTools>
        </StyledToolbarPlatform>
      </StyledMaterialAppBar>
      <AppExpander anchorEl={anchorElApp} />
      <NotificationExpander anchorEl={anchorElNoti1} />
      <NotificationExpander2 anchorEl={anchorElNoti2} />
      <SignInExpander anchorEl={anchorElSignIn} />
    </Hidden>
    <Hidden smUp>
      {/*mobile version*/}
      <NotificationExpander2 />
      <NotificationExpander />
      <AppExpander />
      <SignInExpander />
      <SearchBarContainer />
    </Hidden>
  </div>
);

export default PlatformHeader;
