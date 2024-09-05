import React from 'react';
import styles from '../pages_styles/Home.module.css'
import previewimg from '../assets/previewimg.PNG'
import Newscard from '../components/NewsCard';
import CalendarioEventos from '../components/CalendarioEventos';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.firstsec}>
      <Newscard className={styles.newscard}
      Titulo=<Link to='/about'>Quem nós somos:</Link>
      img={previewimg}
      Resumo='Nós somos uma escola focada em...'
      />

      <CalendarioEventos />
      </section>
    </div>
  );
}

export default Home;
