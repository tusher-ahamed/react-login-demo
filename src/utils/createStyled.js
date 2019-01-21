import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/**
 * 
 * This function uses the withStyles function from the material-ui library. 
 * It will be used as a utils function when we need to make changes to material-ui components,
 * or create new custom components. 
 * 
 */

const createStyled = (styles, options) => {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }
  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };
  return withStyles(styles, options)(Styled);
}

export default createStyled;