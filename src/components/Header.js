import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/Logo Colégio SousaeSousa.png";
import user from '../assets/user-white.svg'

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
        <li>
          <Link to='/login'><img src={user} className={styles.user} alt='login'></img> </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Header;
