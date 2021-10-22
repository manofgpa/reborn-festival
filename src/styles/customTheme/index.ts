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
        bg: "gray.900",
        // color: "gray.900",
      },
    },
  },
});

export default customTheme;
