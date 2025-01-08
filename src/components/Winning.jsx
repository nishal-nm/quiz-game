import Confetti from "react-confetti";

function Winning() {
  return (
    <div className="quiz-container">
      <Confetti />
      <div className="congratulations-container">
        <h1>Congratulations! You've completed the quiz.</h1>
      </div>
    </div>
  );
}

export default Winning;
