import React from 'react';
import styles from './services.module.css';

const ServicosBarba = () => {
    return (
        <div className={styles.container}>
            <h1 style={{fontSize:'20px'}}>Serviços de Barba</h1>

            <div id="servico" className={styles.ul}>
                <div className={styles.serviceCategory}>Modelagem de Barba</div>
                <ul>
                    <li>Barba Clássica | R$ 40</li>
                    <li>Barba Completa com Navalha | R$ 50</li>
                    <li>Barba e Cabelo | R$ 80</li>
                </ul>

                <div className={styles.serviceCategory}>Tratamentos de Barba</div>
                <ul>
                    <li>Hidratação de Barba | R$ 30</li>
                    <li>Alinhamento e Modelagem | R$ 40</li>
                </ul>
            </div>
        </div>
    );
};

export default ServicosBarba;
