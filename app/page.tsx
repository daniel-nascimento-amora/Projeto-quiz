"use client";

import pageStyles from "./page.module.css";
import QuizLogo from "./components/quizlogo";
import { QuizLogoBottom } from "./components/quizlogobottom";
import { Footer } from "./components/Footer";
import Card from "./components/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  return (
    <main className={pageStyles.screen} style={{ flex: 1 }}>
      <section className={pageStyles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Alterado para center conforme a tua nota
            marginBottom: "24px"
          }}
        >
          <QuizLogo />
        </div>
   
        <Card headerTitle="Teste suas habilidades">
          <p style={{ marginBottom: "32px" }}>
            Teste os seus conhecimentos sobre os mais variados temas.
          </p>
          
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const name = "Daniel";
              router.push(`/game?player=${name}`);
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <input
                placeholder="Diz aí seu nome pra jogar :)"
                name="playerName"
              />
            </div>

            <button>
              Jogar
            </button>
          </form>
        </Card>
        
        <Footer />
      </section>
    </main>
  );
}

//test git
