import "@fontsource/poppins";
import { extendTheme, theme as base, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      "html, body": {
        fontFamily: `'Poppins', ${base.fonts?.body}, sans-serif !important`,
      },
      "h1, h2, h3, h4, h5, h6": {
        fontFamily: `'Proppins', ${base.fonts?.heading}, sans-serif !important`,
      },
    }),
  },
});

export default theme;
