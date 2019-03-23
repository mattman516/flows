
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

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
      backgroundColor: "#bfc6cb"
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
  },
  disabled: {
    backgroundColor: "#bfc6cb",
  }
});

const AstraInput = withStyles(styles)(Input);

export default AstraInput;