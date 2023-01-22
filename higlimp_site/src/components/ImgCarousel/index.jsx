import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import sofa1 from '../../assets/images/sofa1.jpeg'
import sofa2 from '../../assets/images/sofa2.jpeg'
import sofa3 from '../../assets/images/sofa3.jpeg'
import sofa4 from '../../assets/images/sofa4.jpeg'
import sofa5 from '../../assets/images/sofa5.jpeg'
import sofa6 from '../../assets/images/sofa6.jpeg'

import styles from './styles.module.css'


export const ImgCarousel = () => {
    return (
      <div className={styles.container}>
        <Carousel className={styles.content}>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa1}
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img 
              src={sofa2}
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa3}
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa4}
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa5}
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <img
              src={sofa6}
              alt="Image One"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }