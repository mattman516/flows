import React from "react";
import styled from "styled-components";
import SignIn from "./SignInForm";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import MobileSignedOut from "../../headers/MobileSignedOut";

const StyledPaper = styled(Paper)`
  width: 400px;
  margin: 50px;
`;

const MobileWrapper = styled.div`
  max-width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f1f3f4;
`;

export const SignInPage = ({ emailChange, passwordChange, submitForm }) => (
  <div>
    <Hidden xsDown>
      <FormWrapper>
        <StyledPaper>
          <SignIn
            onSubmit={submitForm}
            passwordChange={passwordChange}
            emailChange={emailChange}
          />
        </StyledPaper>
      </FormWrapper>
    </Hidden>
    <Hidden smUp>
      <MobileWrapper>
        <MobileSignedOut />
        <SignIn
          onSubmit={submitForm}
          passwordChange={passwordChange}
          emailChange={emailChange}
        />
      </MobileWrapper>
    </Hidden>
  </div>
);
