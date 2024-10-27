import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Supondo que você use react-router-dom para navegação
import styles from '../styles//NiveisEnsino.module.css';
import preview4 from '../assets/niveispreview.jpeg';

function NiveisEnsino() {
    // Definindo o estado inicial com o conteúdo para o lado direito
    const [conteudo, setConteudo] = useState({
        titulo: 'Níveis de Ensino',
        texto: 'Nós ofertamos Ensino Fundamental I, atendendo crianças a partir de 2 anos etc etc...',
        link: '/niveis'
    });

    // Funções para mudar o conteúdo da direita com base nos cliques dos botões
    const handleNiveisEnsinoClick = () => {
        setConteudo({
            titulo: 'Níveis de Ensino',
            texto: 'Nós ofertamos Ensino Fundamental I, atendendo crianças a partir de 2 anos etc etc...',
            link: '/niveis'
        });
    };

    const handleInfraestruturaClick = () => {
        setConteudo({
            titulo: 'Infraestrutura',
            texto: 'Nossa escola conta com quadras, laboratórios, salas de informática etc...',
            link: '/infraestrutura'
        });
    };

    const handleHistoriaClick = () => {
        setConteudo({
            titulo: 'História',
            texto: 'Nossa escola foi fundada em 1990 com o objetivo de proporcionar educação de qualidade...',
            link: '/about'
        });
    };

    return (
        <div className={styles.niveis}>
            <img src={preview4} alt='Preview' className={styles.niveispreview} />
            <ul>
                <li><button onClick={handleNiveisEnsinoClick}>Níveis de Ensino</button></li>
                <li><button onClick={handleInfraestruturaClick}>Infraestrutura</button></li>
                <li><button onClick={handleHistoriaClick}>História</button></li>
            </ul>
            <div className={styles.niveis1}>
                <h1>{conteudo.titulo}</h1>
                <p>{conteudo.texto}</p>
                <button>
                    <Link to={conteudo.link}>Saiba mais</Link>
                </button>
            </div>
        </div>
    );
}

export default NiveisEnsino;
