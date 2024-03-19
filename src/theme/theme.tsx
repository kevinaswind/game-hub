import { extendTheme } from "@chakra-ui/react";
import "@fontsource/ubuntu";

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
});

export default theme;
