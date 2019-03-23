import React from "react";
import styled from "styled-components";
import { StyledLink } from "../../customMaterialComponents/StyledLink";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const StyledPaper = withStyles({
  root: {
    maxWidth: "300px",
    padding: "50px"
  }
})(Paper);

const SignupWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SignUpRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ForgotRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledCheckbox = withStyles({
  root: {
    left: "-15px"
  }
})(Checkbox);

const StyledRemember = styled.div`
  margin-left: -15px;
`;

const StyledSignUp = styled.div`
  margin-left: 10px;
`;

const StyledButton = withStyles({
  root: {
    "border": "2px solid",
    "&:hover": {
      border: "2px solid"
    }
  }
})(Button);

const styles = theme => ({
  root: {
    borderRadius: "5px",
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.13)"
    },
    "&$disabled": {
      backgroundColor: "rgba(0, 0, 0, 0.13)"
    }
  },
  input: {
    padding: "12px 12px 10px"
  },
  focused: {
    borderBottom: "2px solid #3590dc",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    transition: theme.transitions.create("border", {
      duration: 100,
      easing: theme.transitions.easing.sharp
    })
  }
});

const AstraInput = withStyles(styles)(Input);

const SignInForm = ({ onSubmit, emailChange, passwordChange }) => (
  <StyledPaper elevation={0}>
    <Typography variant="h4">
      <strong>Sign into Ad Astra</strong>
    </Typography>
    {/* <form onSubmit={onSubmit}> */}
    <SignupWrapper>
      <SignUpRow>
        <Typography>Don't have an account? </Typography>
        <StyledSignUp>
          <Typography color="primary">
            <StyledLink to="/"> Sign up... </StyledLink>
          </Typography>
        </StyledSignUp>
      </SignUpRow>
    </SignupWrapper>
    <SignupWrapper>
      <AstraInput
        fullWidth
        disableUnderline
        onChange={emailChange}
        placeholder="Email Address"
        type="email"
        variant="filled"
      />
    </SignupWrapper>
    <SignupWrapper>
      <AstraInput
        fullWidth
        disableUnderline
        onChange={passwordChange}
        placeholder="Password"
        type="password"
        variant="filled"
      />
    </SignupWrapper>
    <SignupWrapper>
      <ForgotRow>
        <SignUpRow>
          <StyledCheckbox color="primary" />
          <StyledRemember>
            <Typography>Remember me</Typography>
          </StyledRemember>
        </SignUpRow>
        <StyledLink to="/">
          <Typography color="primary">Forgot Password</Typography>
        </StyledLink>
      </ForgotRow>
    </SignupWrapper>
    <Button
      fullWidth
      size="medium"
      type="submit"
      onClick={onSubmit}
      color="primary"
      variant="contained"
    >
      Done
    </Button>
    {/* </from> */}
    <SignupWrapper>
      <Divider />
    </SignupWrapper>
    <SignupWrapper>
      <StyledButton fullWidth size="medium" color="primary" variant="outlined">
        {/*onClick=TODO*/}
        Connect with Social Media
      </StyledButton>
      <SignupWrapper />
      <StyledButton fullWidth size="medium" color="primary" variant="outlined">
        {/*onClick=TODO*/}
        Connect with SSO
      </StyledButton>
    </SignupWrapper>
  </StyledPaper>
);

export default SignInForm;
