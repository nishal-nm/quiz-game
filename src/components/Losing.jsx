function Losing(props) {
  return (
    <div className="quiz-container">
      <div className="failed-container">
        <h1>Sorry, you did not pass the quiz. Try again!</h1>
      </div>
      <h2>Your Score: {props.count - 1}</h2>
    </div>
  );
}

export default Losing;
