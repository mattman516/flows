// // "use strict";

// var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// Object.defineProperty(exports, "default", {
//   enumerable: true,
//   get: function get() {
//     return _Button.default;
//   }
// });

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// var _Button = _interopRequireDefault(require("./Button"));

const RoundedButton = theme => ({
  /* Styles applied to the root element. */
  root: {
    'borderRadius': 48 / 2,
    'border': "2px solid",
    "&:hover": {
      border: "2px solid"
    }
  }
});
export default withStyles(RoundedButton)(Button);
