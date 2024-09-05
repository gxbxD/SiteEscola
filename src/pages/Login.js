import { useState } from 'react';
import React from "react";
import styles from '../pages_styles/Login.module.css'
import { Link } from 'react-router-dom';
import back from '../assets/arrow-left.svg'


function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar o login pode ser adicionada aqui
    console.log('Login:', login, 'Senha:', senha);
  };

  return (
    <div className={styles.main}>
      <div className={styles.backdiv}>
        <Link to='/'>
            <img src={back} className={styles.back} alt='back'></img>
        </Link>
      </div>
      <div className={styles.login_container}>
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <h2>Login</h2>
          <div className={styles.form_group}>
            <label htmlFor="login">Login:</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;