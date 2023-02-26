import { BsWhatsapp } from "react-icons/bs";
import styles from "./styles.module.css";
import { IconContext } from "react-icons";

export const ButtonFloating = () => {      

    return (
    <IconContext.Provider value={{ color: "green", className:"reactIcon"}}    >
        <button 
            className={styles.buttonFloating} 
            onClick={() => window.open("https://api.whatsapp.com/send?phone=5511964308748&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento!",'_blank')}>
            <BsWhatsapp size={60} />
        </button>
    </IconContext.Provider>
    )
    
}