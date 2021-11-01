import Confetti from "react-confetti";
import { useBreakpointValue } from "@chakra-ui/react";

const ConfettiComponent = ({
  confettiQuantity = 200,
  isConfettiRunning = false,
}) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (typeof window !== "undefined") {
    return (
      <Confetti
        width={window.innerWidth}
        height={isWideVersion ? window.innerHeight : window.innerHeight + 400}
        numberOfPieces={confettiQuantity}
        opacity={0.8}
        run={isConfettiRunning}
      />
    );
  }
  return <></>;
};

export default ConfettiComponent;
