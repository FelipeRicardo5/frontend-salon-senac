import React from 'react';
import styles from './services.module.css';

const TratamentosHasteCapilar = () => {
    return (
        <div className={styles.container}>
            <h1 style={{fontSize:'20px'}}>Tratamentos da Haste Capilar</h1>

            <div id="servico" className={styles.ul}>
                <div className={styles.serviceCategory}>Hidratação e Nutrição</div>
                <ul>
                    <li>Argiloterapia/Detox Capilar + hidratação + alta frequência | R$ 100 (curto) / R$ 120 (médio) / R$ 130 (longo) / R$ 140 (extralongo)</li>
                    <li>Cauterização | R$ 80 (curto) / R$ 90 (médio) / R$ 100 (longo) / R$ 110 (extralongo)</li>
                    <li>Hidratação Capilar | R$ 60 (curto) / R$ 70 (médio) / R$ 80 (longo) / R$ 90 (extralongo)</li>
                    <li>Hidratação Matizadora | R$ 55 (curto) / R$ 65 (médio) / R$ 75 (longo) / R$ 85 (extralongo)</li>
                </ul>

                <div className={styles.serviceCategory}>Tratamentos de Reestruturação</div>
                <ul>
                    <li>Nutrição Capilar | R$ 80 (curto) / R$ 90 (médio) / R$ 100 (longo) / R$ 110 (extralongo)</li>
                    <li>Nutrição Capilar c/Ampola | R$ 80 (curto) / R$ 90 (médio) / R$ 100 (longo) / R$ 110 (extralongo)</li>
                    <li>Reestruturação / Reposição de Massa | R$ 100 (curto) / R$ 110 (médio) / R$ 120 (longo) / R$ 130 (extralongo)</li>
                </ul>
            </div>
        </div>
    );
};

export default TratamentosHasteCapilar;
