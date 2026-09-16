import QuizLogo from "../components/quizlogo";
import Card from "../components/Card";
import pageStyles from "../page.module.css";
import { Footer } from "../components/Footer";


const questions = [
  {
  image: "https://sharpmindlogic.com/wp-content/uploads/2026/09/bgproje.jpg",
  title: "Qual é a capital da França?",
  description: "Escolha a resposta correta entre as opções abaixo.",
  alternatives: ["Paris", "Londres", "Berlim", "Madrid"]
}

  
];

export default function GameScreen() {
  const currentQuestion = 0;
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
      </Card>
      <Footer />
      </section>
    </main>
  );
}