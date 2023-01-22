import styles from "./styles.module.css";

export const HowWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Como Funciona?</h2>
        <div className={styles.cardlist}>
            <div className={styles.card}>
              <img src="" alt="" />
              <h3>Texto 1</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
            <div className={styles.card}>
              <img src="" alt="" />
              <h3>Texto 2</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
            <div className={styles.card}>
              <img src="" alt="" />
              <h3>Texto 3</h3>
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
