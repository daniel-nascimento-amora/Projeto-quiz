import QuizLogo from "../components/quizlogo";
import Card from "../components/Card";
import pageStyles from "../page.module.css";
import { Footer } from "../components/Footer";
import config from "../../config.json";  

const questions = config.questions;



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
      <form>
        {question.alternatives.map((alternative, Index) => (
        <label>
          {alternative}
          <input type="radio" 
                 id={"alternative-${Index}"}
                 name="alternative"/>
        </label>
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