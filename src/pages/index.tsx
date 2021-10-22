import { Box } from "@chakra-ui/react";
import FeaturesSection from "components/FeaturesSection";
import { HeroSection } from "components/HeroSection";
import PartySection from "components/PartySection";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <HeroSection />
      <PartySection />
      <FeaturesSection />
    </Box>
  );
};

export default Home;
