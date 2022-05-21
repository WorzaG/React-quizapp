import { useState } from "react";
import questions from "../data/questions.json";

export default function Questioncards() {
  const [current, setcurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showScore, setshowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (current < questions.length - 1) {
      setcurrent(current + 1);
    } else {
      setshowScore(true);
    }
    if (isCorrect === true) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="Content">
      <div className="Card">
        {showScore ? (
          <div className="showScore">
            <h2>
              Your scored {correct} out of {questions.length}
            </h2>
          </div>
        ) : (
          <div className="Card-content">
            <div className="Info">
              <h2>
                Quesiton {current + 1} / {questions.length}
              </h2>
              <h3>{questions[current].questionText}</h3>
            </div>
            <ul>
              {questions[current].answerOptions.map((items) => (
                <li onClick={() => handleAnswer(items.isCorrect)}>
                  {items.answerText}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
