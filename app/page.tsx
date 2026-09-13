import homeStyles from "./home.module.css";
import cardStyles from "./card.module.css";
import Quizlogo from "./components/quizlogo";
import QuizLogo from "./components/quizlogo";




//quando mudar o svg, mudar de right para center


export default function Page() {
  return (
    
     
<main className={homeStyles.homeScreen} style={{ flex: 1 }}>
   <div
  style={{
    maxWidth: "350px",
    display: "flex",
    justifyContent: "right",
    marginBottom: "24px"
  }}
>
  <QuizLogo />
</div>
   
   
       <div className={cardStyles.card}>
    <header className={cardStyles.cardHeader}>
      <h1 className={cardStyles.cardHeaderTitle}>Teste suas habilidades</h1>
    </header>
    <section className={cardStyles.cardBody}>
      <p>
        Teste os seus conhecimentos sobre os mais variados temas.
      </p>
      <p>
        FORMULÁRIO / BOTÃO
      </p>
    </section>
  </div>
  <footer>
    <p>
      Desenvolvedor Daniel Amora.
    </p>
  </footer>
</main>

         
  );
}
