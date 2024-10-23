import React from 'react';
import styles from '../pages_styles/Home.module.css'
import Carrossel from '../components/Carrossel';
import CalendarioEventos from '../components/CalendarioEventos';
import preview1 from '../assets/aboutpreview.jpeg';
import preview2 from '../assets/metodopreview.jpeg';
import preview3 from '../assets/contactpreview.jpeg';
import Servicos from '../components/Servicos';
import NiveisEnsino from '../components/NiveisEnsino';
import Diferenciais from '../components/Diferenciais';

const posts = [
  {
    title: "Quem Nós somos",
    description: "Somos uma escola focada no desenvolvimento...",
    link: "/about",
    image: preview1,
  },
  {
    title: "Nosso método",
    description: "Nosso método se diferencia dos demais pois...",
    link: "/metodo",
    image: preview2,
  },
  {
    title: "Matricule-se já",
    description: "Fale agora mesmo com nossa equipe e agende uma visita",
    link: "/contact",
    image: preview3,
  },
];


function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.firstsec}>
        <Carrossel posts={posts} />
      </section>
      <section className={styles.secondsec}>
        <NiveisEnsino />
      </section>
      <section className={styles.stylesec1} />
      <section className={styles.thirdsec} >
        <Diferenciais />
      </section>
      <section className={styles.stylesec2} />
      <section className={styles.fourthsec}>
        <Servicos/>
      </section>
    </div>
  );
}

export default Home;
