import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SnackbarTemplate = ({ content, handleClose, open, appId }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    open={open}
    autoHideDuration={6000}
    onClose={event => handleClose(appId)}
    ContentProps={{
      "aria-describedby": "message-id"
    }}
    message={content}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={event => handleClose(appId)}
      >
        <CloseIcon />
      </IconButton>
    ]}
  />
);

export default SnackbarTemplate;
