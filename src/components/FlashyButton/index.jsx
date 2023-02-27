import styles from './styles.module.css'
import { BsWhatsapp } from "react-icons/bs";

export const FlashyButton = () => {
    return (
        <button 
        onClick={() => window.open("https://api.whatsapp.com/send?phone=5511984475160&text=Ol%C3%A1,%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento!")}
            className={styles.FlashyButton}> 
            <BsWhatsapp />
            &nbsp; Faça seu orçamento clicando aqui!
        </button>
    )
}