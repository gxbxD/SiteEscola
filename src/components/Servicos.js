import React, { useState } from "react";
import styles from '../styles/Servicos.module.css';
import uniformes from '../assets/uniformespreview.jpeg';
import horarios from '../assets/horarios.jpeg';
import { Link } from "react-router-dom";

function Servicos() {

    const [conteudo, setConteudo] =useState (
        {
            titulo: 'Uniformes',
            subtitulo: 'Escola SS EducArt',
            texto: 'Rua xxx, Conjunto x - Próximo ao mercado x',
            subtexto: '(61) xxxx-xxxx',
            subtitulo2: 'Malharia Fantasia',
            texto2: 'Rua xxx, Conjunto x, loja x',
            subtexto2: '(61) xxxx-xxxx',
            link: '/uniformes',
            image: uniformes
        }
    );

    const handleUniformesClick = () => {
        setConteudo (
            {
                titulo: 'Uniformes',
                subtitulo: 'Escola SS EducArt',
                texto: 'Rua xxx, Conjunto x - Próximo ao mercado x',
                subtexto: '(61) xxxx-xxxx',
                subtitulo2: 'Malharia Fantasia',
                texto2: 'Rua xxx, Conjunto x, loja x',
                subtexto2: '(61) xxxx-xxxx',
                link: '/uniformes',
                image: uniformes
            }
        );
    };

    const handleHorariosClick = () => {
        setConteudo (
            {
                titulo: 'Horários das Aulas',
                subtitulo: 'Educação infantil até o 2° ano',
                texto: 'Matutino: das 7h30 às 12:20',
                subtexto: 'Vespertino: das 13:30 às 18:20',
                subtitulo2: '',
                texto2: 'Integral Matutino: das 8h às 13:15',
                subtexto2: 'Integral Vespertino: das 12:30 às 18h',
                link: '/grade',
                image: horarios
            }
        );
    };

    return (
        <div className={styles.main}>
            <h1>Conheça nossos serviços disponíveis.</h1>
            <div className={styles.navbtn}>
                <button onClick={handleUniformesClick}>Uniformes</button>
                <button onClick={handleHorariosClick}>Horários das aulas</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <h1>{conteudo.titulo}</h1>
                        <section>
                            <h1>{conteudo.subtitulo}</h1>
                            <p>
                                {conteudo.texto}<br/>
                                {conteudo.subtexto}
                            </p>
                        </section>
                        <section>
                            <h1>
                                {conteudo.subtitulo2}
                            </h1>
                            <p>{conteudo.texto2} <br />
                                {conteudo.subtexto2}
                            </p>
                        </section>
                        <button><Link to={conteudo.link}>Veja mais</Link></button>
                    </div>
                    <div className={styles.imgdiv}>
                        <img src={conteudo.image}>
                        </img>
                    </div>
                </div>
        </div>
    )
}

export default Servicos;