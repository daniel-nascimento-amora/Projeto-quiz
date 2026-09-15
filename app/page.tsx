import homeStyles from "./home.module.css";
import QuizLogo from "./components/quizlogo";
import { QuizLogoBottom } from "./components/quizlogobottom";
import { Footer } from "./components/Footer";
import Card from "./components/Card";






//quando mudar o svg, mudar de right para center


export default function Page() {
  return (
    
     
<main className={homeStyles.homeScreen} style={{ flex: 1 }}>
  <section className={homeStyles.container}>
   <div
  style={{
    display: "flex",
    justifyContent: "right",
    marginBottom: "24px"
  }}
>
  <QuizLogo />
</div>
   
   
  <Card />
  <Footer/>
  </section>
</main>

         
  );
}
