import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import sofa2 from '../../assets/images/sofa2.jpeg'
import sofa3 from '../../assets/images/sofa3.jpeg'
import sofa4 from '../../assets/images/sofa4.jpeg'
import sofa5 from '../../assets/images/sofa5.jpeg'
import sofa6 from '../../assets/images/sofa6.jpeg'

import styles from './styles.module.css'


export const ImgCarousel = () => {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textCarousel}>
              <h3 className={styles.carouselH}>Confira nossas TRANSFORMAÇÕES</h3>
              <p className={styles.carouselP}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        <div className={styles.carouselContainer}>
        <Carousel className={styles.images}>
          <Carousel.Item className={styles.item}>
            <img 
              src={sofa2}
              alt="One"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa3}
              alt="Two"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa4}
              alt="Three"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa5}
              alt="Four"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa6}
              alt="Five"
            />
          </Carousel.Item>
        </Carousel>
        </div>
        </div>
      </div>
    );
  }