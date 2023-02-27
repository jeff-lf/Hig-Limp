import footerImg from '../../assets/layout/FooterImg3.jpg'
import styles from './styles.module.css'
import { BsWhatsapp, BsFillTelephoneFill, BsFacebook } from "react-icons/bs";

export const FooterImg = () => {
    return (
        <div className={styles.container}>
            <img src={footerImg} className={styles.backImg} alt=''></img>
            <div className={styles.content}>
                <h2>
                    Localização e Contatos:
                </h2>
                <p>Rua das Giestas - Vila Prudente - São Paulo - SP</p>
                <p>Telefone: (11) 98447-5160</p>
                <a href="tel:11984475160" className={styles.buttonLG}><BsFillTelephoneFill /> Ligue agora</a>
                <div className={styles.socialBox}>
                    <button onClick={() => window.open("https://www.facebook.com/Higlimpestofado/")} className={styles.buttonFB}> <BsFacebook size={30}/></button>
                    <button 
                        className={styles.buttonFB}
                        onClick={() => window.open("https://api.whatsapp.com/send?phone=5511984475160&text=Ol%C3%A1,%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento!")}
                    >
                        <BsWhatsapp size={30}/>
                    </button>
                </div>
            </div>
        </div>
    )
        
}