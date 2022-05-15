// Main Imports
import PropTypes from "prop-types";
// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
// Components
import Header from "./header/Header";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ce1717",
    },
    secondary: {
      main: "#000",
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      },
    },
  },
});

const Layout = ({ locale = "en", children }) => {
  theme = { ...theme, direction: locale === "en" ? "ltr" : "rtl" };
  const cacheRtl = createCache({
    key: theme.direction === "rtl" ? "muirtl" : "muiltr",
    stylisPlugins: theme.direction === "rtl" && [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Layout;

Layout.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.element.isRequired,
};
