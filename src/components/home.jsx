import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.theme.palette);
    return (
      <div>
        <Typography variant="h2" gutterBottom className={classes.text}>
          Hello World
        </Typography>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const componentWithStyles = withStyles(styles, { withTheme: true })(Home);

export default componentWithStyles;
