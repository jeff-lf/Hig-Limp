import styles from './styles.module.css'
import logo from '../../assets/images/logo1.jpeg'
import { FlashyButton } from '../FlashyButton';

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 id='aboutus'>Entre em Contato:</h2>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <FlashyButton />
      </div>
    </div>
  );
};