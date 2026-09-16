//tentei vetorizar a logo no figma, porém na versão paga não foi possível, 
// então criei uma imagem no Canva, removi o fundo, mandei ela para o gemini 
// e pedi para ele gerar o código svg para colocar no Typescript. Futuramente corrigir isso,
//criar imagem no figma e mudar o return imporvisado abaixo, para o correto
import Link from "next/link";



export default function QuizLogo() {
  return (
    <Link href="/">
    <div className="quiz-logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="300" height="350">
        <style>
          {`
            .text-main {
              font-family: 'Impact', 'Arial Black', sans-serif;
              font-weight: 900;
              font-size: 110px;
            }
          `}
        </style>
        
        {/* SUPER Text Background/Border (Red) */}
        <text x="200" y="190" textAnchor="middle" className="text-main" fill="#f72e05" stroke="#f72e05" strokeWidth="28" strokeLinejoin="round">SUPER</text>
        {/* SUPER Text Foreground (Yellow) */}
        <text x="200" y="190" textAnchor="middle" className="text-main" fill="#ffd700">SUPER</text>

        {/* QUIZ Text Background/Border (Blue) */}
        <text x="200" y="370" textAnchor="middle" className="text-main" fill="#2b4cb0" stroke="#2b4cb0" strokeWidth="24" strokeLinejoin="round">QUIZ</text>
        {/* QUIZ Text Foreground (Yellow) */}
        <text x="200" y="370" textAnchor="middle" className="text-main" fill="#ffd700">QUIZ</text>
      </svg>
      
    </div>
    </Link>
  );
}