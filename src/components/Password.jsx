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
    width: "80%",
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

class Password extends Component {
  state = {
    submittedPassword: ""
  };

  handleChange = event => {
    this.setState({
      submittedPassword: event.target.value
    });
    event.preventDefault();
  };

  handleSubmit = event => {
    this.props.handlePasswordSubmission(Number(this.state.submittedPassword));
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h6" gutterBottom>
          {this.props.value}
        </Typography>
        <FormControl margin="dense" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            value={this.state.submittedPassword}
            onChange={this.handleChange}
            autoComplete="current-password"
          />
        </FormControl>
        <Grid container justify="center">
          <Button
            type="submit"
            size="large"
            variant="outlined"
            className={classes.submit}
          >
            Submit
          </Button>
        </Grid>
      </form>
    );
  }
}

Password.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Password);
