import React from 'react';
import logo from '../../assets/images/logo1.jpeg'
import { FlashyButton } from '../FlashyButton';

 
import styles from "./styles.module.css";


export const HowWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Entre em contato e faça seu orçamento. Basta enviar a foto e o cep da residência! </h2>
        <img src={logo} className={styles.logo} alt=''></img>
        <FlashyButton />
      </div>
    </div>
  );
};
