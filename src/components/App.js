//import _ from '../env'
import React, { Component } from "react";
import Login from "./login";
import { CssBaseline } from "@material-ui/core";
import theme from "../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Router, Route } from "react-router-dom";
import Home from "./home";
import history from "./history";
import Amplify from 'aws-amplify';



console.log(process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID)

Amplify.configure({
  Auth: {
      identityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
      region: process.env.REACT_APP_AWS_AUTH_REGION,
      userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_CLIENT_ID,
      mandatorySignIn: true
    },
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_API_ENDPOINT,//process.env.REACT_APP_API_ENDPOINT,
  aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE
});


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
