import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: { main: "#8B201D" },
    secondary: { main: "#c62e2b" },
  },
  components: {
    MuiButton: { defaultProps: { disableRipple: true } },
  },
});

export default theme;
