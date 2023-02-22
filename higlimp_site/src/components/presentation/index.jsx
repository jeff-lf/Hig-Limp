import styles from "./styles.module.css";
import {BsWhatsapp, BsCalculatorFill} from "react-icons/bs";
import { GiVacuumCleaner } from 'react-icons/gi'

export const HowWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Como Funciona?</h2>
        <div className={styles.cardlist}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <BsWhatsapp size={30} className={styles.iconSvg}/>
              </div>
              <h3>Contato</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <BsCalculatorFill size={30}/>
              </div>
              <h3>Orçamento</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <GiVacuumCleaner  size={30}/>
              </div>
              <h3>Limpeza</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};
