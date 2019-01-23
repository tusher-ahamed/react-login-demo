import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Email from "./Email";
import Password from "./Password";
import history from "./history";
import { Auth } from "aws-amplify";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 450,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  paper: {
    marginTop: theme.spacing.unit * 8,
    width: "130%",
    // height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },

  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: "#f5f5f5"
  }
});

class SignIn extends Component {
  state = {
    passwords: {
      "xyz@example.com": 1234,
      "uvw@example.com": 2345,
      "abc@example.com": 3456
    },
    emails: ["xyz@example.com", "abc@example.com", "uvw@example.com"],
    IsEmailSubmitted: false,

    submittedEmail: "",
    submittedPassword: ""
  };

  handleEmailSubmission = async submittedEmail => {
    let code = "000000";
    let userExists = false;

    try {
      await Auth.confirmSignUp(submittedEmail, code, {
        // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
        forceAliasCreation: false
      });
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "UserNotFoundException":
          userExists = false;
          break;
        case "NotAuthorizedException":
          userExists = true;
          break;
        default:
          break;
      }
    }

    /*Auth.confirmSignUp(submittedEmail, code, {
        // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
        forceAliasCreation: false
    }).then(data => console.log(data))
      .catch( err => {
            console.log(err);
            switch ( err.code ) {
                case 'UserNotFoundException':
                    return true;
                case 'NotAuthorizedException':
                    return false;
                case 'AliasExistsException':
                    // Email alias already exists
                    return false;
                case 'CodeMismatchException':
                    return false;
                case 'ExpiredCodeException':
                    return false;
                default:
                    return false;
            }
        } )*/

    if (userExists || this.state.emails.includes(submittedEmail)) {
      this.setState({
        submittedEmail: submittedEmail,
        IsEmailSubmitted: true
      });
    } else alert("Email is not found. Please, provide correct email");
  };

  handlePasswordSubmission = async submittedPassword => {
    let user;

    try {
      user = await Auth.signIn(this.state.submittedEmail, submittedPassword);
      console.log(user);
    } catch (error) {
      console.log(error);
    }

    if (
      user ||
      this.state.passwords[this.state.submittedEmail] === submittedPassword
    ) {
      console.log("Authentication successful!!");
      history.push("/home");
    }
  };

  render() {
    const { classes } = this.props;

    let renderForm;

    if (!this.state.IsEmailSubmitted) {
      renderForm = <Email handleEmailSubmission={this.handleEmailSubmission} />;
    } else {
      renderForm = (
        <Password
          value={this.state.submittedEmail}
          handlePasswordSubmission={this.handlePasswordSubmission}
        />
      );
    }

    return (
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {renderForm}
        </Paper>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const componentWithStyles = withStyles(styles, { withTheme: true })(SignIn);

export default componentWithStyles;
