import React from 'react';
import maracana from '../assets/maracana.webp'; 
import './Home.css';

const Home = () => (
    <div className="home-container">
        <h2>Bem-vindo ao site sobre o Clube de Regatas do Flamengo</h2>
        <p>Você verá um pouco sobre o que é O Flamengo!</p>
        <img src={maracana} alt="Flamengo" className="imagem-home" />
    </div>
);

export default Home;