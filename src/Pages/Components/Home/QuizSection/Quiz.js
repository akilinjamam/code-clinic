import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  let QB = [
    {
      Question: "What is html?",
      Answers: [
        { Answer: "High level language", isCorrect: false },
        { Answer: "Low level language", isCorrect: false },
        { Answer: "Machine level language", isCorrect: false },
        { Answer: "Mark up language", isCorrect: true },
      ],
    },
    {
      Question: "Which is not a semantic tag ?",
      Answers: [
        { Answer: "div", isCorrect: true },
        { Answer: "article", isCorrect: false },
        { Answer: "section", isCorrect: false },
        { Answer: "main", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QB.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className="main">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You have scored {score} out of {QB.length}
            <>
              <button type="submit" onClick={resetQuiz}>
                Reset Quiz
              </button>
            </>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>/{QB.length}
              </div>
              <div className="question-text">
                {QB[currentQuestion].Question}
              </div>
            </div>
            <div className="answer-section">
              {QB[currentQuestion].Answers.map((answer) => (
                <button onClick={() => handleAnswerResponse(answer.isCorrect)}>
                  {answer.Answer}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
