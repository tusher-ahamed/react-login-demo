import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Email from "./Email";
import Password from "./Password";

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
    height: "50vh",
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
    emailSubmitted: false,
    emailId: ""
  };

  handleClick = param => {
    this.setState({
      emailId: param
    });
    this.setState({ emailSubmitted: true });
  };

  render() {
    const { classes } = this.props;

    let renderForm;

    if (!this.state.emailSubmitted) {
      renderForm = <Email handleClick={this.handleClick} />;
    } else {
      renderForm = <Password value={this.state.emailId} />;
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

export default withStyles(styles, { withTheme: true })(SignIn);
