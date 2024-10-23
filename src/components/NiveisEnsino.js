import React from "react";
import styles from '../styles/NiveisEnsino.module.css';
import preview4 from '../assets/niveispreview.jpeg';

function NiveisEnsino () {
    return (
        <div className={styles.niveis}>
          <img src={preview4} alt='Preview' className={styles.niveispreview} />
          <ul>
            <li>Niveis de Ensino</li>
            <li>Infraestrutura</li>
            <li>História</li>
          </ul>
          <div className={styles.niveis1}>
            <h1>Níveis de Ensino</h1>
            <p>Nós ofertamos Ensino Fundamental I, atendendo crianças à partir de 2 anos etc etc...</p>
            <button>Saiba mais</button>
          </div>
        </div>
    )
}

export default NiveisEnsino;