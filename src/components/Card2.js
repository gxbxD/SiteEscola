import React from "react";
import styles from '../styles/Card2.module.css';

function Card2({image, title, text}) {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            </div>
            <img src={image} alt={title} className={styles.image} />
        </div>
    );
}

export default Card2;