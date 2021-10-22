import { Box } from "@chakra-ui/react";
import { HeroSection } from "components/HeroSection";
import PartySection from "components/PartySection";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <HeroSection />
      <PartySection />
    </Box>
  );
};

export default Home;
