import React from "react";
import styles from '../styles/Matriculese.module.css';
import ico from '../assets/matriculaicon.png';

function Matriculese () {
    return (
        <div className={styles.matriculese}>
            <a href="https://api.whatsapp.com/send?phone=5561985863634&text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20uma%20matr%C3%ADcula." target='_blank'>
            <img src={ico} alt="Matricule-se"></img>
            <h1>Faça já sua matrícula!</h1>
            </a>
        </div>
    )
}

export default Matriculese;