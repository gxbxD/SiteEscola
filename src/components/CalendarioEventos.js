import React from "react";
import styles from '../styles/CalendarioEventos.module.css'

function CalendarioEventos() {
    return (
        <div className={styles.main}>
            <h1>Próximos eventos:</h1>
            <ul className={styles.ul}>
                <li>
                    Halloween
                </li>
                <li>
                    Natal
                </li>
                <li>
                    Etc
                </li>
            </ul>
        </div>
    )
}

export default CalendarioEventos;