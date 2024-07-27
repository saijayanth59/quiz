import { useState } from "react";
import completedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnwsers, setUserAnswers] = useState([]); // to store user answers
  const activeQIdx = userAnwsers.length; // current question
  const isComplete = activeQIdx == QUESTIONS.length;

  if (isComplete) {
    return (
      <>
        <div id="summary">
          <img src={completedImg} alt="" />
          <h2>Quiz Completed</h2>
        </div>
      </>
    );
  }

  const shuffleAnswers = [...QUESTIONS[activeQIdx].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  function handleSelect(answer) {
    console.log(userAnwsers);
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }

  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTIONS[activeQIdx].text}</h2>
          <ul id="answers">
            {shuffleAnswers.map((option) => (
              <li key={option} className="answer">
                <button onClick={() => handleSelect(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
