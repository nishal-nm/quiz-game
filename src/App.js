import React, { useEffect, useState } from "react";
import "./App.css";
import Losing from "./components/Losing";
import Options from "./components/Options";
import Question from "./components/Question";
import Result from "./components/Result";
import Starting from "./components/Starting";
import Winning from "./components/Winning";
import questions from "./questions";

function App() {
  const noOfQuestions = 15;

  const [asked, setAsked] = useState([]); // Array to store asked questions
  const [qNo, setQNo] = useState(null); // Initially set to null
  const [selectedOption, setSelectedOption] = useState(null); // To store the currently selected option
  const [count, setCount] = useState(1); // Score count
  const [quizStatus, setQuizStatus] = useState("start");
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds for each question

  // Ensure to set the first question after component mounts
  useEffect(() => {
    if (qNo === null) {
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

  // Choose new question from the questions as random
  function getRandomQuestion(excludes) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * questions.length);
    } while (excludes.includes(randomNumber));
    setTimeLeft(30);
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

  // Starting card
  if (quizStatus === "start") {
    return <Starting totalQues={noOfQuestions} setStatus={setQuizStatus} />;
  }

  if (quizStatus === "won") {
    return <Winning />; // Winning Card
  } else if (quizStatus === "lost") {
    return <Losing count={count} />; // Losing Card
  }

  if (qNo === null) {
    return <div>Loading...</div>; // Display loading while qNo is null
  }

  // Questioning cards
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
