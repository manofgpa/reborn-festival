import Confetti from "react-confetti";

const ConfettiComponent = () => {
  if (typeof window !== "undefined") {
    return <Confetti width={window.innerWidth} height={window.innerHeight} />;
  }
  return <></>;
};

export default ConfettiComponent;
