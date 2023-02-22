import { Button } from "../Button";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <div>
                    HIG LIMP    
                </div>
                <nav>
                    <Button background='green' title='Início'></Button>
                    <Button background='green' title='Serviços'></Button>
                    <Button background='green' title='Sobre nós'></Button>
                    <Button background='green' title='Contato'></Button>
                </nav>
            </div>
        </header>
    )
}