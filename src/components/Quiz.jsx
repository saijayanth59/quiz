import { useState, useRef } from "react";

import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

const INITIAL = { class: "", selected: "" };

export default function Quiz() {
  const shuffleAnswers = useRef([]);
  const [userAnswers, setUserAnswers] = useState([]); // to store user answers
  const [className, setClassName] = useState(INITIAL);
  const activeQIdx = userAnswers.length; // current question
  const isComplete = activeQIdx == QUESTIONS.length;

  function handleSelect(answer) {
    setClassName((prev) => {
      const new_class =
        answer === QUESTIONS[activeQIdx].answers[0] ? "correct" : "wrong";
      return { class: new_class, selected: answer };
    });
    setTimeout(() => {
      setUserAnswers((prev) => {
        console.log(prev);
        setClassName(INITIAL);
        shuffleAnswers.current = [];
        return [...prev, answer];
      });
    }, 500);
  }

  if (!isComplete) {
    if (shuffleAnswers.current.length === 0) {
      shuffleAnswers.current = [...QUESTIONS[activeQIdx].answers];
      shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }
  }

  return (
    <>
      <div id="quiz">
        {isComplete ? (
          <Summary answers={userAnswers} />
        ) : (
          <Question
            handleSelect={handleSelect}
            activeQIdx={activeQIdx}
            answers={shuffleAnswers.current}
            className={className}
          />
        )}
      </div>
    </>
  );
}
