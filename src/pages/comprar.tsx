import React, { useState } from "react";
import { Form } from "../components/Form";

import { Box, Text } from "@chakra-ui/react";
import { checkout } from "contexts/CookiesContext";

const Ingresso = () => {
  return (
    <Box h="100vh">
      <Form />
    </Box>
  );
};

export default Ingresso;
