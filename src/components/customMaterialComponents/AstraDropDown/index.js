
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

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
  select: {
    padding: "15px 12px 15px"
  },
  disabled: {
    backgroundColor: "#bfc6cb",
  }
});

const AstraSelect = withStyles(styles)(Select);

export default AstraSelect;