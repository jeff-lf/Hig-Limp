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
                    <Button background='green' title='botão'></Button>
                    <Button background='green' title='botão'></Button>
                    <Button background='green' title='botão'></Button>
                    <Button background='green' title='botão'></Button>
                </nav>
            </div>
        </header>
    )
}