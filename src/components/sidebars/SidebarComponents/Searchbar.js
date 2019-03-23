import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

const TextStyle = theme => ({
  root: {
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    minWidth: 200,
    maxWidth: "30vw",
    height: 35,
    borderRadius: 18,
    border: "1px solid",
    borderColor: "#d6dbe1"
  },
  focused: {
    color: "#3590dc"
  }
});
const StyledTextField = withStyles(TextStyle)(InputBase);

const StyledSearchIcon = withStyles({
  root: {
    marginLeft: 8,
    color: "#889099" //darkest grey
  }
})(InputAdornment);


const Searchbar = ({ handleSearchAction, appId, placeholder }) => (
  <StyledTextField
    placeholder={placeholder || "Find..."}
    margin="dense"
    onKeyUp={event => {
      handleSearchAction(event, appId);
    }}
    startAdornment={
      <StyledSearchIcon position="start">
        <Search />
      </StyledSearchIcon>
    }
  />
);

export default Searchbar;
