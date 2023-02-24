import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import styles from "./styles.module.css";
import {BsWhatsapp, BsCalculatorFill} from "react-icons/bs";
import { GiVacuumCleaner } from 'react-icons/gi'

export const HowWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Como Funciona?</h2>
        {window.screen.width >= 600 ? (
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
                <BsCalculatorFill size={30} className={styles.iconSvg}/>
              </div>
              <h3>Orçamento</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <GiVacuumCleaner  size={30} className={styles.iconSvg}/>
              </div>
              <h3>Limpeza</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
        </div>
        ) : (
          <div className={styles.carouselContainer}>
          <Carousel >
          <Carousel.Item className={styles.cardCarousel}>
            <div className={styles.card}>
              <div className={styles.iconCarousel}>
                <BsWhatsapp size={30} />
              </div>
              <h3>Contato</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.cardCarousel}>
            <div className={styles.card}>
              <div className={styles.iconCarousel}>
                <BsCalculatorFill size={30} />
              </div>
              <h3>Orçamento</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.cardCarousel}>
          <div className={styles.card}>
            <div className={styles.iconCarousel}>
                <GiVacuumCleaner  size={30} />
              </div>
              <h3>Limpeza</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officia, distinctio cumque qui labore quae?
              </p>
            </div>
          </Carousel.Item>
          </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};
