import { FlashyButton } from '../FlashyButton';
import styles from './styles.module.css'

export const MyServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 id='services'>Limpeza e Higienização de qualidade</h2>
        <div className={styles.video}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/44JTGE2Ag_s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
          ></iframe>
        </div>
        <FlashyButton />
      </div>
    </div>
  );
};
