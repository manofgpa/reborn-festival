import Confetti from "react-confetti";

const ConfettiComponent = ({
  confettiQuantity = 200,
  isConfettiRunning = false,
}) => {
  if (typeof window !== "undefined") {
    return (
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight + 400}
        numberOfPieces={confettiQuantity}
        opacity={0.8}
        run={isConfettiRunning}
      />
    );
  }
  return <></>;
};

export default ConfettiComponent;
