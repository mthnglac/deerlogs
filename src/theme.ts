import * as React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    cyan: Palette["primary"];
  }
  interface PaletteOptions {
    cyan: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    cyan: {
      main: "#08fdd8",
    },
    background: {
      default: "#1d1d1d",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
