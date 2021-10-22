import { Box } from "@chakra-ui/react";
import { CountdownSection } from "components/CountdownSection";
import FeaturesSection from "components/FeaturesSection";
import { HeroSection } from "components/HeroSection";
import { LineupSection } from "components/LinupSection";
import { LocalSection } from "components/LocalSection";
import { PartySection } from "components/PartySection";
import { TicketsSection } from "components/TicketsSection";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <HeroSection />
      <PartySection />
      <FeaturesSection />
      <LocalSection />
      <LineupSection />
      <CountdownSection />
      <TicketsSection />
    </Box>
  );
};

export default Home;
