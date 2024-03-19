import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/ubuntu";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  textStyles: {
    h1: {
      fontFamily: "heading",
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontFamily: "heading",
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
});

export default theme;
