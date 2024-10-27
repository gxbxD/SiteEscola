import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../styles/Diferenciais.module.css';

function Diferenciais () {

  const [conteudo, setConteudo] = useState(
    {
        titulo: 'Diferenciais',
        subtitulo: 'Periodo Integral',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: '/grade'
    }
  );

  const handleIntegralClick = () => {
    setConteudo(
      {
        titulo: 'Diferenciais',
        subtitulo: 'Período Integral',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: '/grade'
      }
    );
  };

  const handleDiferencial2Click = () => {
    setConteudo(
      {
        titulo: 'Diferenciais',
        subtitulo: 'Diferencial 2',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: ''
      }
    );
  };

  const handleDiferencial3Click = () => {
    setConteudo(
      {
        titulo: 'Diferenciais',
        subtitulo: 'Diferencial 3',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: ''
      }
    );
  };

  const handleDiferencial4Click = () => {
    setConteudo(
      {
        titulo: 'Diferenciais',
        subtitulo: 'Diferencial 4',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: ''
      }
    );
  };

    return (
        <div className={styles.diferenciais}>
          <ul>
            <li><button onClick={handleIntegralClick}>Integral</button></li>
            <li><button onClick={handleDiferencial2Click}>Diferencial 2</button></li>
            <li><button onClick={handleDiferencial3Click}>Diferencial 3</button></li>
            <li><button onClick={handleDiferencial4Click}>Diferencial 4</button></li>
          </ul>
          <div className={styles.diferencial}>
            <h1>{conteudo.titulo}</h1>
            <h2>{conteudo.subtitulo}</h2>
            <p>{conteudo.texto}
               </p>
               <button><Link to={conteudo.link}>Saiba mais</Link></button>
          </div>
        </div>
    )
}

export default Diferenciais;