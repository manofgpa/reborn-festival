import { Box } from "@chakra-ui/react";
import FeaturesSection from "components/FeaturesSection";
import { HeroSection } from "components/HeroSection";
import { LineupSection } from "components/LinupSection";
import { LocalSection } from "components/LocalSection";
import { PartySection } from "components/PartySection";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <HeroSection />
      <PartySection />
      <FeaturesSection />
      <LocalSection />
      <LineupSection />
    </Box>
  );
};

export default Home;
