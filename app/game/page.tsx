"use client";
import React from "react";
import QuizLogo from "../components/quizlogo";
import Card from "../components/Card";
import pageStyles from "../page.module.css";
import { Footer } from "../components/Footer";
import config from "../../config.json"; 
import styles from './style.module.css';
import { Alternative } from "../components/alternative"; 

const questions = config.questions;

const answerStates = {
  DEFAULT: "DEFAULT",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS"
} as const;  

export default function GameScreen() {
  const [answerState, setAnswerState] = React.useState<keyof typeof answerStates>(answerStates.DEFAULT);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  // 1. Proteção de segurança: se o índice passar do tamanho do array, mostra um ecrã final ou de carregamento
  const question = questions?.[currentQuestion];

  if (!question) {
    return (
      <main className={pageStyles.screen} style={{ flex: 1 }}>
        <section className={pageStyles.container}>
          <QuizLogo />
          <Card headerTitle="Fim do Jogo!">
            <p style={{ textAlign: "center" }}>Parabéns por concluiu o quiz!</p>
          </Card>
          <Footer />
        </section>
      </main>
    );
  }

  const questionNumber = currentQuestion + 1;

  return (
    <main className={pageStyles.screen} style={{ 
      flex: 1,
      // 2. Usar template string para prevenir erros de concatenação de strings
      backgroundImage: `url("${question.image}")`,
    }}>
      <section className={pageStyles.container}>

        <div
          style={{
            display: "flex",
            // 3. Corrigido de "right" para o valor padrão do Flexbox "flex-end"
            justifyContent: "flex-end",
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
              } else { // 4. Alterado de dois "if" separados para "else" mais limpo
                setAnswerState(answerStates.ERROR);
              }
              
              setTimeout(() => {
                // 5. Uso de callback para atualizar o estado com segurança baseada no valor anterior
                setCurrentQuestion((prevIndex) => prevIndex + 1);
                setAnswerState(answerStates.DEFAULT);
              }, 1 * 2000);
            }}
          >
            {question.alternatives.map((alternative, Index) => (
              //aqui

              <div 
               style= {{

                marginBottom: "8px",
               }}
              >
                <Alternative 
                key={alternative + Index}
                label={alternative}
                order={Index}
              />

              </div>
              
            ))}
           
            {answerState === "DEFAULT" && (
              <button>
                Confirmar
              </button>
            )}
            <p style={{ textAlign: "center" }}>
              {answerState === "ERROR" && "❌"}
              {answerState === "SUCCESS" && "✅"}
            </p>  
          </form>
        </Card>
        <Footer />
      </section>
    </main>
  );
}