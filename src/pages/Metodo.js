import React from "react";
import styles from '../pages_styles/Metodo.module.css';
import Card from "../components/Card";
import Card2 from '../components/Card2';
import sampleImage1 from '../assets/about.jpeg';
import sampleImage2 from '../assets/uniformespreview.jpeg';
import Diferenciais from "../components/Diferenciais";
import Contacts from "../components/Contacts";

function Metodo() {
    return (
        <div className={styles.main}>
        <Card 
                image={sampleImage1}
                title="Título do Primeiro Card"
                text="Este é o texto do primeiro card. Ele é totalmente personalizável."
            />
            <Card2 
                image={sampleImage2}
                title="Título do Primeiro Card"
                text="Este é o texto do primeiro card. Ele é totalmente personalizável."
            />
            <Card 
                image={sampleImage1}
                title="Título do Primeiro Card"
                text="Este é o texto do primeiro card. Ele é totalmente personalizável."
            />
            <Card2 
                image={sampleImage2}
                title="Título do Primeiro Card"
                text="Este é o texto do primeiro card. Ele é totalmente personalizável."
            />
            <Diferenciais />
            <Contacts />
        </div>
    )
}

export default Metodo;