import styles from './styles.module.css';
import FooterImg from '../../assets/layout/FooterImg3.jpg'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <img src={FooterImg}></img>
        </div>
    )
}