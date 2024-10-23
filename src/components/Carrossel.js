import React, { useState, useEffect } from "react";
import styles from '../styles/Carrossel.module.css';

const Carrossel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca de post automaticamente a cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [posts.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_content}>
        <a href={posts[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <img src={posts[currentIndex].image} alt={posts[currentIndex].title} className={styles.carousel_image} />
        </a>
        <h2>{posts[currentIndex].title}</h2>
        <p>{posts[currentIndex].description}</p>
      </div>
      <div className={styles.carousel_indicators}>
        {posts.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
