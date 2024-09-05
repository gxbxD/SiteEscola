import React from "react";
import styles from '../styles/NewsCard.module.css'

function Newscard ({Titulo, img, Resumo, imgwidth = 500}) {
    return (
        <div className={styles.newscard} >
            <div className={styles.info}>
            <h1>{Titulo}</h1>
            <p>{Resumo}</p>
            </div>
            <div className={styles.previewimgcontainer}>
            <img className={styles.previewimg} alt='preview' src= {img} width={imgwidth}></img>
            </div>
        </div>
    )
}

export default Newscard;