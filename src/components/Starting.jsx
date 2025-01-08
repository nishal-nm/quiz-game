function Starting(props) {
  return (
    <div className="quiz-container">
      <h1>Welcome to the Quiz!</h1>
      <div className="start-container">
        <p>Number of Questions: {props.totalQues}</p>
        <button
          onClick={() => {
            props.setStatus("going");
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Starting;
