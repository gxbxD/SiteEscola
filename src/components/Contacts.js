import React from "react";
import styles from '../styles/Contacts.module.css';
import whats from '../assets/whatsapp-color-svgrepo-com.svg';
import insta from '../assets/instagram-svgrepo-com.svg';
import face from '../assets/facebook-svgrepo-com.svg';


function Contacts () {
    return (
        <div className={styles.main}>
            <h1>Entre em contato conosco:</h1>
            <div className={styles.contacticos}>
                <a href="https://api.whatsapp.com/send?phone=5561985863634&text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20uma%20matr%C3%ADcula." target='_blank'><img className={styles.wpp} src={whats} alt="Whatsapp"></img></a>
                <a href="https://www.instagram.com/sseducart/" target="_blank"><img src={insta} alt="Instagram"></img></a>
                <img src={face} alt="Facebook"></img>
            </div>
        </div>
    )
}

export default Contacts;