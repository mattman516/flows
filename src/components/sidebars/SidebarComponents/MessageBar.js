import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const searchBarStyle = {
  minWidth: 300,
  margin: 20
};

const MessageBar = ({ handleMessageAction, item }) => (
  <TextField
    label="Comment"
    style={searchBarStyle}
    onKeyDown={event => handleMessageAction(event, item)}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <i class="material-icons">send</i>
        </InputAdornment>
      )
    }}
  />
);

export default MessageBar;
