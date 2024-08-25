import React from 'react';
import styles from '../pages_styles/Home.module.css'
import previewimg from '../assets/previewimg.PNG'
import Newscard from '../components/NewsCard';

function Home() {
  return (
    <div className={styles.main}>
      <h1>Centro de Ensino Sousa&Sousa EducArt</h1>
      <p>Educando com amor desde 2014.</p>
      <Newscard
      Titulo='Quem nós somos:'
      img={previewimg}
      Resumo='Nós somos uma escola focadas em...'
      />
    </div>
  );
}

export default Home;
