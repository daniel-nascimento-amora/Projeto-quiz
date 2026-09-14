import { QuizLogoBottom } from "../quizlogobottom"
import footerStyles from "./footer.module.css"



export function Footer() {
  return (<footer className={footerStyles.footer}>
    <div ><QuizLogoBottom />
    </div>
    
    <p>
        <br/>
      Desenvolvedor <br/>Daniel Amora.
    </p>
  </footer>
  )
}