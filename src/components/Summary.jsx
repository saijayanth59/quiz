import completedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ answers }) {
  const skipped = answers.filter((answer) => answer === null);
  const corrected = answers.filter(
    (answer, idx) => answer === QUESTIONS[idx].answers[0]
  );

  const skippedPercentage = Math.round(
    (skipped.length / answers.length) * 100,
    1
  );
  const correctedPercentage = Math.round(
    (corrected.length / answers.length) * 100,
    1
  );

  return (
    <>
      <div id="summary">
        <img src={completedImg} alt="" />
        <h2>Quiz Completed</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{skippedPercentage}%</span>
            <span className="text">Skipped</span>
          </p>{" "}
          <p>
            <span className="number">{correctedPercentage}%</span>
            <span className="text">Correctly Answered</span>
          </p>{" "}
          <p>
            <span className="number">
              {100 - skippedPercentage - correctedPercentage}%
            </span>
            <span className="text">Wrongly Answered</span>
          </p>
        </div>
        <ol>
          {answers.map((answer, idx) => {
            let isCorrect = answer === QUESTIONS[idx].answers[0];
            return (
              <li key={idx}>
                <h3>{idx + 1}</h3>
                <p className="question">{QUESTIONS[idx].text}</p>
                <p className={`user-answer ${isCorrect ? "correct" : "wrong"}`}>
                  {answer}
                </p>
                {!isCorrect && (
                  <p className="user-answer correct">
                    {QUESTIONS[idx].answers[0]}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
