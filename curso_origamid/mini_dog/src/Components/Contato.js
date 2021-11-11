import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} + animeLeft`}>
      <Head description="Tela de contato" title="Contato" />
      <div className={styles.foto}>
        <img src={foto} alt="Máquina de escrever" />
      </div>

      <div className={styles.dados}>
        <h1>Entre em contato.</h1>
        <ul>
          <li>rospielberg@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua rospielberg@gmail.com, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
