import React, { useEffect, useState } from "react";
import "./App.css";
import Options from "./components/Options";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./questions";

function App() {
  const noOfQuestions = 5;

  const [asked, setAsked] = useState([]);
  const [qNo, setQNo] = useState(null); // Initially set to null
  const [selectedOption, setSelectedOption] = useState(null);
  const [count, setCount] = useState(1);
  const [quizStatus, setQuizStatus] = useState("start");
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds for each question

  useEffect(() => {
    if (qNo === null) {
      // Ensure to set the first question after component mounts
      setQNo(getRandomQuestion(asked));
    }
  }, [asked, qNo]); // Dependency on 'asked' to reset when needed

  // Set the timer
  useEffect(() => {
    let timer;
    if (quizStatus === "going" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [qNo, timeLeft, quizStatus]); // Include quizStatus in the dependency array

  // Handle the end of the timer
  useEffect(() => {
    if (timeLeft === 0) {
      console.log("Time is up for the current question!");
      // Optional: Move to the next question or handle as needed
      setQuizStatus("lost"); // You would need to implement this function
    }
  }, [timeLeft]); // Run this effect whenever timeLeft changes

  function getRandomQuestion(excludes) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * questions.length);
    } while (excludes.includes(randomNumber));
    setTimeLeft(10);
    return randomNumber;
  }

  function handleClick(optionIndex) {
    const option = questions[qNo].options[optionIndex];
    setSelectedOption(optionIndex);
    const correct = questions[qNo].correctAnswer === option;
    setTimeout(() => {
      if (correct) {
        setAsked((prevAsked) => {
          const newAsked = [...prevAsked, qNo];
          console.log("New asked array:", newAsked);
          if (newAsked.length < noOfQuestions) {
            setQNo(getRandomQuestion(newAsked));
            setCount(count + 1);
          } else {
            setQuizStatus("won");
          }
          return newAsked;
        });
      } else {
        setQuizStatus("lost");
      }
      setSelectedOption(null);
    }, 500);
  }

  if (quizStatus === "start") {
    return (
      <div className="quiz-container">
        <h1>Welcome to the Quiz!</h1>
        <div className="start-container">
          <p>Number of Questions: {noOfQuestions}</p>
          <button
            onClick={() => {
              setQuizStatus("going");
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (quizStatus === "won") {
    return (
      <div className="quiz-container">
        <div className="congratulations-container">
          <h1>Congratulations! You've completed the quiz.</h1>
        </div>
      </div>
    );
  } else if (quizStatus === "lost") {
    return (
      <div className="quiz-container">
        <div className="failed-container">
          <h1>Sorry, you did not pass the quiz. Try again!</h1>
        </div>
        <h2>Your Score: {count - 1}</h2>
      </div>
    );
  }

  if (qNo === null) {
    return <div>Loading...</div>; // Display loading or similar text while qNo is null
  }

  return (
    <div className="quiz-container">
      <h1>Question No: {count}</h1>

      <div className="question-container">
        <Question q={questions[qNo].question} />
      </div>
      <div className="options-container">
        {questions[qNo].options.map((option, index) => {
          return (
            <Options
              key={index}
              values={option}
              onClick={() => handleClick(index)}
              isSelected={selectedOption === index}
              isCorrect={
                questions[qNo].correctAnswer === questions[qNo].options[index]
              }
              isAttempted={selectedOption !== null}
            />
          );
        })}
      </div>
      <h2>{timeLeft}</h2>
      <Result />
    </div>
  );
}

export default App;
