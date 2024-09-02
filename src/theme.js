import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Set the default color mode to dark
    useSystemColorMode: false, // Disable automatic system color mode detection
  },
});

export default theme;