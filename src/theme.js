import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#fafafa",
      light: "#546377"
    },
    secondary: { main: "#2196f3" },
    background: { default: "#222a35", paper: "#212121" },
    text: { primary: "#fafafa", secondary: "#fafafa" }
  },
  typography: {
    useNextVariants: true
  }
});
