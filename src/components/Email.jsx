import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  submit: {
    marginTop: theme.spacing.unit * 3,
    justifyContent: "center"
  }
});

class Email extends Component {
  state = {
    emailId: ["xyz@example.com", "abc@example.com", "uvw@example.com"],
    submittedEmail: ""
  };

  handleChange = event => {
    this.setState({
      submittedEmail: event.target.value
    });
  };

  handleSubmit = event => {
    // alert("An email was submitted: " + this.state.submittedEmail);
    event.preventDefault();
    if (this.state.emailId.includes(this.state.submittedEmail)) {
      alert("email is found");
      this.props.handleClick(this.state.submittedEmail);
    } else alert("email is not found");
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="h6" gutterBottom>
          to continue to Demo
        </Typography>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Enter email</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            value={this.state.submittedEmail}
            onChange={this.handleChange}
            autoFocus
          />
        </FormControl>
        <Grid container justify="center">
          <Button
            type="submit"
            size="large"
            variant="outlined"
            className={classes.submit}
          >
            Next
          </Button>
        </Grid>
      </form>
    );
  }
}

Email.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Email);
