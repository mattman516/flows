import React from "react";
import styled from "styled-components";
import SignIn from "./SignInForm";
import { UserSettings } from "./UserSettings";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import MobileSidebar from "../../sidebars/MobileSidebar";
import Popover from "@material-ui/core/Popover";
import { ClickAwayListener, Dialog } from "@material-ui/core";
var count;

const StyledPopper = styled(Popover)`
  min-width: 360px;
  z-index: 1100;
`;

const FormWrapper = styled.div`
  // margin: 50px;
`;

const StyledSignInDialog = styled(Dialog)`
  width: 50%;
`;

export const SignInExpander = ({
  anchorEl,
  signInOpen,
  emailChange,
  passwordChange,
  closeSignIn,
  submitForm,
  userInfo,
  logOut
}) => (
  <div>
    <Hidden xsDown>
      <div>
        <StyledPopper
          open={signInOpen}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        >
          <ClickAwayListener onClickAway={closeSignIn}>
            {!userInfo.loggedIn ? (
              <SignIn
                onSubmit={submitForm}
                passwordChange={passwordChange}
                emailChange={emailChange}
              />
            ) : (
              <UserSettings userInfo={userInfo} logout={logOut} />
            )}
          </ClickAwayListener>
        </StyledPopper>
      </div>
    </Hidden>
    <Hidden smUp>
      <MobileSidebar
        variant="persistent"
        anchor="left"
        open={signInOpen}
        handleSidebarClose={closeSignIn}
        components={
          !userInfo.loggedIn ? (
            <SignIn
              onSubmit={submitForm}
              passwordChange={passwordChange}
              emailChange={emailChange}
            />
          ) : (
            <UserSettings userInfo={userInfo} logout={logOut} />
          )
        }
      />
    </Hidden>
  </div>
);
