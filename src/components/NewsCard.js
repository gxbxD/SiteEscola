import React from "react";
import styles from '../styles/NewsCard.css'
import previewimg from '../assets/previewimg.PNG'

function Newscard () {
    return (
        <div className={styles.Newscard} >
            <h1>Título</h1>
            <img className={styles.previewimg} alt='preview' src= {previewimg} width={300}></img>
            <p>Resumo da postagem aqui:</p>
        </div>
    )
}

export default Newscard;