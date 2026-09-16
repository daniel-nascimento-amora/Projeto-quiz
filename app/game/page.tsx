import QuizLogo from "../components/quizlogo";
import Card from "../components/Card";
import pageStyles from "../page.module.css";
import { Footer } from "../components/Footer";

export default function GameScreen() {
  return (
    <main className={pageStyles.screen} style={{ flex: 1,
      backgroundImage: "url('https://sharpmindlogic.com/wp-content/uploads/2026/09/bgproje.jpg')",
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
        headerTitle="Pergunta 1 de 5"
      >
        <h1>Qual o maior país do mundo?</h1>
        <p>Teste seus conhecimentos gerais.</p>
      </Card>
      <Footer />
      </section>
    </main>
  );
}