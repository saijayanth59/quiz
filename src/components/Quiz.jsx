import { useState, useCallback, act } from "react";
import completedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Progress from "./Progress";

export default function Quiz() {
  const [userAnwsers, setUserAnswers] = useState([]); // to store user answers
  const activeQIdx = userAnwsers.length; // current question
  const isComplete = activeQIdx == QUESTIONS.length;

  function handleSelect(answer) {
    console.log(userAnwsers);
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }

  let render = (
    <>
      <div id="summary">
        <img src={completedImg} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    </>
  );

  if (!isComplete) {
    const shuffleAnswers = [...QUESTIONS[activeQIdx].answers];
    shuffleAnswers.sort(() => Math.random() - 0.5);
    render = (
      <div id="question">
        <Progress TIMER={3000} onTimeOut={handleSelect} key={activeQIdx} />
        <h2>{QUESTIONS[activeQIdx].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((option) => (
            <li key={option} className="answer">
              <button onClick={() => handleSelect(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div id="quiz">{render}</div>
    </>
  );
}
