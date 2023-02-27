import React from 'react';
import logo from '../../assets/images/logo1.jpeg'
import { FlashyButton } from '../FlashyButton';

 
import styles from "./styles.module.css";


export const HowWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Entre em contato, faça seu orçamento e garanta uma higienização com a qualidade: </h2>
        <img src={logo} className={styles.logo} alt=''></img>
        <FlashyButton />
      </div>
    </div>
  );
};
