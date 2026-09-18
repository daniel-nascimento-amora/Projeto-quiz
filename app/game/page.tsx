"use client";
import QuizLogo from "../components/quizlogo";
import React from "react";
import Card from "../components/Card";
import pageStyles from "../page.module.css";
import { Footer } from "../components/Footer";
import config from "../../config.json"; 
import styles from './style.module.css';
import { Alternative } from "../components/alternative"; 

const questions = config.questions;



export default function GameScreen() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion];
  return (
    <main className={pageStyles.screen} style={{ flex: 1,
      backgroundImage: "url(" + question.image + ")",
     }}>
      <section className={pageStyles.container}>

        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginBottom: "24px"
          }}
        >
          
        </div>
        <QuizLogo />
      <Card
        headerTitle={"Pergunta " + questionNumber + " de " + questions.length}
      >
        <h1>{question.title}</h1>
        <p>{question.description}</p>
      <form
        onSubmit={(event) => {
  event.preventDefault();
  const $questionInfo = event.target as HTMLFormElement;
  const formData = new FormData($questionInfo);
  const { alternative } = Object.fromEntries(formData.entries());
  const isCorrectAnswer = alternative === question.answer;
  setCurrentQuestion(currentQuestion + 1);
}}


      
      >
        {question.alternatives.map((alternative, Index) => (
          <Alternative 
          key={alternative+Index}
          label={alternative}
          order={Index}

          />
        ))}
       
        
          <button>
            Confirmar
          </button>

      </form>
      </Card>
      <Footer />
      </section>
    </main>
  );
}