import React, { useEffect, useState } from "react";
import "./quiz.css";
import * as api from "../../api/api.js";
import { useParams } from "react-router-dom";
import Question from "../../components/question.jsx";

const Quiz = () => {
    const {difficulty, amount} = useParams();
    const [questions, setQuestions] = useState([]);
    const [score , setScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const [modal , setModal] = useState(false);

    useEffect(() => {
      const getdata = async () => {
        try {
          const data = await api.fetchQuizData(difficulty, amount);
          console.log('API Response:', data);
          setQuestions(data);
        } catch (err) {
          console.error('Hata:', err);
        }
      }
      getdata();
    }, [difficulty, amount]);
    
    console.log('Questions:', questions);
    
  return (
    <div className="quiz">
     {questions.length === 0 ? (
       <div className="loading">Yükleniyor...</div>
     ) : modal ? (
       <div className="result">
         <h1>quiz bittihadi gule gule</h1>
         <div className="score-display">
           <p>total puanın </p>
           <h2>{score} / {questions.length}</h2>
           <p className="percentage">{Math.round((score / questions.length) * 100)}%</p>
         </div>
         <button onClick={() => window.location.href = '/'}>ana sayfaya don</button>
       </div>
     ) : (
       <Question
         questions={questions}
         score={score}
         setScore={setScore}
         counter={counter}
         setCounter={setCounter}
         modal={modal} 
         setModal={setModal}
       />
     )}
    </div>
  );
};

export default Quiz;