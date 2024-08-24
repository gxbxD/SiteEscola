import React from 'react';
import styles from '../pages_styles/Home.module.css'
import Newscard from '../components/NewsCard';

function Home() {
  return (
    <div className={styles.main}>
      <h1>Centro de Ensino Sousa&Sousa EducArt</h1>
      <p>Educando com amor desde 2014.</p>
      <Newscard></Newscard>
    </div>
  );
}

export default Home;
