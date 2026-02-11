import React, { use } from "react";
import "./introduce.css";
import Dropdown from "../../components/dropdown.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Introduce = () => {
    const diffucilties = ["easy", "medium", "hard"];
    
    const [diffuciltyChanged, setDiffuciltyChanged] = useState('');
    const navigate = useNavigate();
    const totalQuestion = 10;
    const startQuiz = () => {
        if(diffuciltyChanged){
            navigate(`/quiz/${diffuciltyChanged}/${totalQuestion}`);
        } else {
            alert('Lütfen bir zorluk seviyesi seçin!');
        }
    }
console.log(diffuciltyChanged);  
    return (
    <div className="introduce">
      <div className="introduce-container">
        <img src="https://st5.depositphotos.com/49078592/63930/i/450/depositphotos_639303912-stock-illustration-handwriting-text-trivia-conceptual-photo.jpg" alt="" />
        <Dropdown data ={diffucilties} setDiffuciltyChanged={setDiffuciltyChanged} />
        <div onClick={startQuiz} className="introduce-btn">Quizze başla</div>
      </div>
    </div>
  );
};

export default Introduce;