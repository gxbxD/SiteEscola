import React from "react";
import styles from '../styles/NewsCard.module.css'

function Newscard ({Titulo, img, Resumo, imgwidth = 500}) {
    return (
        <div className={styles.newscard} >
            <h1>{Titulo}</h1>
            <img className={styles.previewimg} alt='preview' src= {img} width={imgwidth}></img>
            <p>{Resumo}</p>
        </div>
    )
}

export default Newscard;