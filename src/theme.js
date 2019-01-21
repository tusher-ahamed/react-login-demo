import { createMuiTheme } from "@material-ui/core/styles";

/**
 *  To customize Material UI component we need to overwrite the style with its name and class. this can be found in the API docs:
 *  https://material-ui.com/api/button/#css
 **/

export default createMuiTheme({
  body: {
    margin: 0
  },
  palette: {
    type: "dark"
    // primary: {
    //   main: "#222a35",
    //   light: "#546377"
    // },
    // secondary: { main: "#2196f3" }
  },
  typography: {
    useNextVariants: true // Migration to new typography. old typography will be removed in v4.0 Q1 2019.
  }
});
