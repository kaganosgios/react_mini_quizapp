import React, { useState, useEffect } from "react";
import "./question.css";

const Question = ({ questions, score, setScore, counter, setCounter, modal, setModal }) => {
  const [timeLeft, setTimeLeft] = useState(20);
  
  const decodeHTML = (html) => {
         const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  
  const currentQuestion = questions[counter];
  
  useEffect(() => {
    setTimeLeft(20);
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
              if (counter + 1 < questions.length) {
             } else {
                setModal(true);
          }
          return 20;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [counter, questions.length, setCounter, setModal]);
  
  if (!currentQuestion) {
    return <div className="question">Soru yükleniyor...</div>;
  }
  
  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    
    if (counter + 1 < questions.length) {
      setCounter(counter + 1);
    } else {
      setModal(true);
    }
  };
  
  return (
    <div className="question">
             <div className="question-header">
        <span>Soru {counter + 1}/{questions.length}</span>
                 <span className="timer">{timeLeft}s</span>
         </div>
      
      <div className="question-text">
          {decodeHTML(currentQuestion.question)}
      </div>
      
      <div className="answers">
        {currentQuestion.answers?.map((answer, index) => (
          <button 
            key={index}
            className="answer-btn"
            onClick={() => handleAnswer(answer)}
          >
            {decodeHTML(answer)}
          </button>
        ))}
      </div>
      
      <div className="score">Puan: {score}</div>
    </div>
  );
};

export default Question;