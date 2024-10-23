import React from "react";
import styles from '../styles/NiveisEnsino.module.css';
import preview4 from '../assets/niveispreview.jpeg';
import { Link } from "react-router-dom";

function NiveisEnsino () {
    return (
        <div className={styles.niveis}>
          <img src={preview4} alt='Preview' className={styles.niveispreview} />
          <ul>
            <li><Link to='/niveis'>Niveis de Ensino</Link></li>
            <li><Link to='/infraestrutura'>Infraestrutura</Link></li>
            <li><Link to='/about'>História</Link></li>
          </ul>
          <div className={styles.niveis1}>
            <h1>Níveis de Ensino</h1>
            <p>Nós ofertamos Ensino Fundamental I, atendendo crianças à partir de 2 anos etc etc...</p>
            <button><Link to= '/niveis'>Saiba mais</Link></button>
          </div>
        </div>
    )
}

export default NiveisEnsino;