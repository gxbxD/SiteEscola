import React from "react";
import styles from '../styles/Card.module.css';

function Card({image, title, text}) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
}

export default Card;