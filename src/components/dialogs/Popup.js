import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";

const textFieldStyle = {
  margin: 10
};

const PopupTemplate = ({
  title,
  keys,
  open,
  code,
  name,
  seatA,
  seatB,
  sectionA,
  sectionB,
  id,
  handlePopupClose,
  handleUpdateValue,
  handleTextFieldUpdate
}) => (
  <Dialog onClose={handlePopupClose} open={open} fullWidth>
    <DialogTitle>{title}</DialogTitle>
    <List>
      <FormControl
        style={textFieldStyle}
        aria-describedby="component-helper-text"
      >
        <InputLabel htmlFor="component-helper">{keys[1]}</InputLabel>
        <Input
          id="component-helper"
          value={code}
          onChange={event => handleTextFieldUpdate(event, keys[1], code)}
        />
      </FormControl>
      <FormControl
        style={textFieldStyle}
        aria-describedby="component-helper-text"
      >
        <InputLabel htmlFor="component-helper">{keys[2]}</InputLabel>
        <Input
          id="component-helper"
          value={name}
          onChange={event => handleTextFieldUpdate(event, keys[2], name)}
        />
      </FormControl>
      <FormControl
        style={textFieldStyle}
        aria-describedby="component-helper-text"
      >
        <InputLabel htmlFor="component-helper">{keys[3]}</InputLabel>
        <Input
          id="component-helper"
          value={seatA}
          onChange={event => handleTextFieldUpdate(event, keys[3], seatA)}
        />
      </FormControl>
      <FormControl
        style={textFieldStyle}
        aria-describedby="component-helper-text"
      >
        <InputLabel htmlFor="component-helper">{keys[4]}</InputLabel>
        <Input
          id="component-helper"
          value={seatB}
          onChange={event => handleTextFieldUpdate(event, keys[4], seatB)}
        />
      </FormControl>
      <FormControl
        style={textFieldStyle}
        aria-describedby="component-helper-text"
      >
        <InputLabel htmlFor="component-helper">{keys[5]}</InputLabel>
        <Input
          id="component-helper"
          value={sectionA}
          onChange={event => handleTextFieldUpdate(event, keys[5], sectionA)}
        />
      </FormControl>
      <FormControl
        style={textFieldStyle}
        aria-describedby="component-helper-text"
      >
        <InputLabel htmlFor="component-helper">{keys[6]}</InputLabel>
        <Input
          id="component-helper"
          value={sectionB}
          onChange={event => handleTextFieldUpdate(event, keys[6], sectionB)}
        />
      </FormControl>
    </List>
    <DialogActions>
      <Button onClick={handlePopupClose} color="primary">
        Cancel
      </Button>
      <Button
        onClick={event =>
          handleUpdateValue(event, [
            id,
            code,
            name,
            seatA,
            seatB,
            sectionA,
            sectionB
          ])
        }
        color="primary"
      >
        Submit
      </Button>
    </DialogActions>
  </Dialog>
);

export default PopupTemplate;
