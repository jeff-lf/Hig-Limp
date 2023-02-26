import styles from './styles.module.css'

export const MyServices = () => {
  return (
    <div className={styles.container}>
      <h2 id='services'>Nossos Serviços</h2>
      <div className={styles.content}>
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
        <div className={styles.text}>
          <h3>Limpeza e Higienização</h3>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Veniam, accusantium in magnam 
            temporibus perspiciatis eligendi natus recusandae
            </p>
        </div>
      </div>
    </div>
  );
};
