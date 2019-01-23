import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({});

class Home extends Component {
  render() {
    return (
      <div>
        <Typography variant="h1" gutterBottom>
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
