import { useState } from 'react';
import React from "react";
import styles from '../pages_styles/Login.module.css'


function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para processar o login pode ser adicionada aqui
      console.log('Login:', login, 'Senha:', senha);
    };
  
    return (
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="login">Login:</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
  
  export default Login;