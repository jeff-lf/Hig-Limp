import styles from './styles.module.css'
import logo from '../../assets/images/sofa2.jpeg'

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h2 id='aboutus'>Sobre nós</h2>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <div className={styles.text}>
          <h3>Especilidade em estofados</h3>
          <ul className={styles.list}>
            <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};