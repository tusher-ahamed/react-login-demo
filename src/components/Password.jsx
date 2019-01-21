import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  form: {
    width: "80%",
    marginTop: theme.spacing.unit
  },

  submit: {
    marginTop: theme.spacing.unit * 3,
    justifyContent: "center"
  }
});

class Password extends Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form}>
        <FormControl margin="dense" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>
        <Grid container justify="center">
          <Button
            type="submit"
            size="large"
            variant="outlined"
            className={classes.submit}
            onClick={this.props.handleClick}
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
