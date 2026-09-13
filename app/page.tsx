import homeStyles from "./home.module.css";
import cardStyles from "./card.module.css";





export default function Page() {
  return (
    
     <main className = {homeStyles.homeScreen} style={{flex: 1}}>
  <div className={cardStyles.card}>
    <header className={cardStyles.cardHeader}>
      <h1 className={cardStyles.cardHeaderTitle}>Teste suas habilidades</h1>
    </header>
    <p>
      Teste os seus conhecimentos sobre os mais variados temas.
    </p>
    <p>
      FORMULÁRIO / BOTÃO
    </p>
    <footer>
      <p>
        Desenvolvedor Daniel Amora.
      </p>
    </footer>
  </div>
</main>


         
  );
}
