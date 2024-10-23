import React from "react";
import { Link } from 'react-router-dom';
import styles from '../styles/Diferenciais.module.css';

function Diferenciais () {
    return (
        <div className={styles.diferenciais}>
          <ul>
            <li>Diferencial 1</li>
            <li>Diferencial 2</li>
            <li>Diferencial 3</li>
            <li>Diferencial 4</li>
          </ul>
          <div className={styles.diferencial}>
            <h1>Diferenciais</h1>
            <h2>Período Integral</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
               <button><Link to='/grade'>Saiba mais</Link></button>
          </div>
        </div>
    )
}

export default Diferenciais;