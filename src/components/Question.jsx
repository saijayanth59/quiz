import QUESTIONS from "../questions";
import Progress from "./Progress";

export default function Question({
  handleSelect,
  activeQIdx,
  answers,
  className,
}) {
  return (
    <div id="question">
      <Progress TIMER={5000} onTimeOut={handleSelect} key={activeQIdx} />
      <h2>{QUESTIONS[activeQIdx].text}</h2>
      <ul id="answers">
        {answers.map((option) => (
          <li key={option} className="answer">
            <button
              onClick={() => handleSelect(option)}
              className={
                className.class &&
                (className.selected === null) | (option === className.selected)
                  ? className.class
                  : ""
              }
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
