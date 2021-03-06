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
    justifyContent: "center",
    backgroundColor: "#424242"
  }
});

class Email extends Component {
  state = {
    submittedEmail: ""
  };

  handleChange = event => {
    this.setState({
      submittedEmail: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleEmailSubmission(this.state.submittedEmail);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <Typography variant="h4" color="primary" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
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
            className={classes.input}
            autoFocus
          />
        </FormControl>
        <Grid container justify="center">
          <Button type="submit" size="large" className={classes.submit}>
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
