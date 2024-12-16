import React from 'react';
import styles from './services.module.css';

const ServicosDepilacao = () => {
  return (
    <div className={styles.container}>
      <h1 style={{fontSize:'30px'}}>Serviços de Depilação</h1>

      <div id="servico" className={styles.ul}>
        <div className={styles.serviceCategory}>Depilação Corporal Feminina</div>
        <ul>
          <li>Axila | R$ 30</li>
          <li>Meia Perna | R$ 40</li>
          <li>Perna Completa | R$ 70</li>
          <li>Virilha (completa) | R$ 50</li>
          <li>Virilha (simples) | R$ 35</li>
          <li>Buço | R$ 20</li>
          <li>Costas ou Abdômen | R$ 60</li>
        </ul>

        <div className={styles.serviceCategory}>Depilação Corporal Masculina</div>
        <ul>
          <li>Costas | R$ 70</li>
          <li>Peito | R$ 60</li>
          <li>Abdômen | R$ 60</li>
          <li>Meia Perna | R$ 50</li>
          <li>Perna Completa | R$ 80</li>
          <li>Axila | R$ 35</li>
        </ul>

        <div className={styles.serviceCategory}>Depilação Facial</div>
        <ul>
          <li>Buço | R$ 20</li>
          <li>Sobrancelhas | R$ 25</li>
          <li>Depilação Completa do Rosto | R$ 50</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicosDepilacao;
