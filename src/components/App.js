import React, { Component } from "react";
import Login from "./login";
import { CssBaseline } from "@material-ui/core";
import theme from "../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Router, Route } from "react-router-dom";
import Home from "./home";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
