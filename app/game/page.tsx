"use client";
import React from "react";
import QuizLogo from "../components/quizlogo";
import Card from "../components/Card";
import pageStyles from "../page.module.css";
import { Footer } from "../components/Footer";
import config from "../../config.json"; 
import styles from './style.module.css';
import { Alternative } from "../components/alternative"; 

//mudar de questão funcional
// limitador de segurança
//1:28:12
//ponto de segurança 2, 1:30
//1:31

const questions = config.questions;

const answerStates = {
  DEFAULT: "DEFAULT",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS"
}as const;  



export default function GameScreen() {
   const [answerState, setAnswerState] = React.useState<keyof typeof answerStates>(answerStates.DEFAULT);

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
  if (isCorrectAnswer) {
    setAnswerState(answerStates.SUCCESS);
  }
  if (!isCorrectAnswer) {
  setAnswerState(answerStates.ERROR);
}
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
       
        {answerState === "DEFAULT" && (
              <button>
            Confirmar
          </button>
            
        )}

        {answerState === "ERROR" && (
            "❌"
            
        )}
         {answerState === "SUCCESS" && (
            "✅"
            
        )}
          


      </form>
      </Card>
      <Footer />
      </section>
    </main>
  );
}