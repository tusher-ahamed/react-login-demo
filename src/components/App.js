import React, { Component } from "react";
import Login from "./login";
import { CssBaseline } from "@material-ui/core";
import theme from "../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </MuiThemeProvider>
    );
  }
}

export default App;
