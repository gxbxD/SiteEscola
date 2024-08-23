import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/Logo Colégio SousaeSousa.png";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.logo} alt='logo'></img>
    <nav>
      <ul>
        <li>
          <Link to="/contact">Fale conosco</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/">Início</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Header;
