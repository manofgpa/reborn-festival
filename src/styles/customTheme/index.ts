import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    Button,
  },
  styles: {
    global: {
      body: {
        bg: "black",
        // bg: "yellow.800",
        color: "gray.50",
      },
    },
  },
});

export default customTheme;
