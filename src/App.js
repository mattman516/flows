import React from "react";
import FlowPaneContainer from "./apps/flows/FlowPaneContainer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";


const flowTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#7f2982",
    },
    secondary: {
      main: "#f7717d",
    },
    error: {
      main: "#e53935",
    }
  },
  typography: {
    fontFamily: '"Helvetica Neue"',
    color: "#16001E",
    button: {
      textTransform: "none"
    }
  }
});


const App = () => (
  <MuiThemeProvider theme={flowTheme}>
    <FlowPaneContainer />
  
   {/* Hi Jack */}
  </MuiThemeProvider>
);

export default App;
