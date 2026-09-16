import pageStyles from "./page.module.css";
import QuizLogo from "./components/quizlogo";
import { QuizLogoBottom } from "./components/quizlogobottom";
import { Footer } from "./components/Footer";
import Card from "./components/Card";
import Link from "next/link";





//quando mudar o svg, mudar de right para center


export default function Page() {
  return (
    
     
<main className={pageStyles.screen} style={{ flex: 1 }}>
  <section className={pageStyles.container}>
   <div
  style={{
    display: "flex",
    justifyContent: "right",
    marginBottom: "24px"
  }}
>
  <QuizLogo />
</div>
   
   
  <Card
      headerTitle="Teste suas habilidades"
  >
      <p style={{ marginBottom: "32px" }}>
        Teste os seus conhecimentos sobre os mais variados temas.
      </p>
      <p>
        FORMULÁRIO / BOTÃO
      </p>
      <Link href= "/game">JOGAR</Link>
  </Card>
  <Footer/>
  </section>
</main>

         
  );
}
