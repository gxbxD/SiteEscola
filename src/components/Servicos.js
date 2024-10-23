import React from "react";
import styles from '../styles/Servicos.module.css';
import uniformes from '../assets/uniformespreview.jpeg';

function Servicos() {
    return (
        <div className={styles.main}>
            <h1>Serviços</h1>
            <h2>Conheça nossos serviços disponíveis.</h2>
            <div className={styles.navbtn}>
                <button>Uniformes</button>
                <button>Horários das aulas</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <h1>Uniformes</h1>
                        <section>
                            <h1></h1>
                            <p>

                            </p>
                        </section>
                        <section>
                            <h1>
                            </h1>
                            <p></p>
                        </section>
                        <button>Veja mais</button>
                    </div>
                    <div className={styles.imgdiv}>
                        <img src={uniformes} alt='uniformes'>
                        </img>
                    </div>
                </div>
        </div>
    )
}

export default Servicos;