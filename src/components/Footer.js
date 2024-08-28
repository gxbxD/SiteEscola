import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.session}>
                <div className={styles.menu}>
                    <ul>
                        <li>
                        <Link to="/">Início</Link>
                        </li>
                        <li>
                        <Link to="/about">Sobre Nós</Link>
                        </li>
                        <li>
                        <Link to="/contact">Fale conosco</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <ul>
                        <li>
                            Whatsapp: (61) 98586-3634
                        </li>
                        <li>
                            Instagram: <a href="https://www.instagram.com/sseducart/" target='_blank'>@sseducart</a>
                        </li>
                        <li>
                            Facebook:
                        </li>
                        <li>
                            Email:
                        </li>
                        <li>
                            Telefone:
                        </li>
                    </ul>
                </div>
            </div>
            <footer>
                <p>Centro Educacional Sousa&Sousa</p>
                <p>© Gabriel D'angelo 2024.</p>
                </footer>
        </div>
    )
}

export default Footer;