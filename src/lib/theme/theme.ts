import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#008e48",
    },
    secondary: {
      main: "#333333",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
  typography: {
    body1: {
      color: "#0F2920",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
