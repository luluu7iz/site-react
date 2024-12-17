import React from 'react';
import inter from '../assets/inter.png';
import liberta from '../assets/liberta.png';
import brasileirao from '../assets/brasileirao.png';
import copadobrasil from '../assets/copadobrasil.png';
import recopa from '../assets/recopa.png';
import supercopa from '../assets/supercopa.png';
import mercosul from '../assets/mercosul.png';
import carioca from '../assets/carioca.png';
import './Galeria.css';

const Galeria = () => (
    <div className="galeria-container">
        <h2>Galeria de Títulos</h2>
        <div className="grid">
            <a href="#img1"><img src={inter} alt="Intercontinental" /></a>
            <a href="#img2"><img src={liberta} alt="Libertadores" /></a>
            <a href="#img3"><img src={brasileirao} alt="Brasileirão" /></a>
            <a href="#img4"><img src={copadobrasil} alt="Copa do Brasil" /></a>
        </div>
        <div className="grid">
            <a href="#img5"><img src={recopa} alt="Recopa Sul-americana" /></a>
            <a href="#img6"><img src={supercopa} alt="Supercopa do Brasil" /></a>
            <a href="#img7"><img src={mercosul} alt="Copa Mercosul" /></a>
            <a href="#img8"><img src={carioca} alt="Campeonato Carioca" /></a>
        </div>
        <div id="img1" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={inter} alt="Intercontinental" />
                <figcaption>Taça Intercontinental, ou Mundial de Clubes, conquistada em 1981 pelo Flamengo em uma vitória por 3x0 em cima do Liverpool, da Inglaterra.</figcaption>
            </figure>
        </div>
        <div id="img2" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={liberta} alt="Libertadores" />
                <figcaption>Taça Conmebol Libertadores conquistada pelo Flamengo em 1981, 2019 e 2022.</figcaption>
            </figure>
        </div>
        <div id="img3" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={brasileirao} alt="Brasileirão" />
                <figcaption>Campeonato Brasileiro conquistado pelo Flamengo em 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020.</figcaption>
            </figure>
        </div>
        <div id="img4" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={copadobrasil} alt="Copa do Brasil" />
                <figcaption>Copa do Brasil conquistada pelo Flamengo em 1990, 2006, 2013, 2022 e 2024. O clube é o atual campeão da competição.</figcaption>
            </figure>
        </div>
        <div id="img5" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={recopa} alt="Recopa Sul-americana" />
                <figcaption>Recopa Sul-americana conquistada pelo Flamengo em 2020.</figcaption>
            </figure>
        </div>
        <div id="img6" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={supercopa} alt="Supercopa do Brasil" />
                <figcaption>Supercopa do Brasil conquistada pelo Flamengo em 2020 e 2021.</figcaption>
            </figure>
        </div>
        <div id="img7" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={mercosul} alt="Copa Mercosul" />
                <figcaption>Copa Mercosul conquistada pelo Flamengo em 1999.</figcaption>
            </figure>
        </div>
        <div id="img8" className="modal">
            <a href="#" className="close">&#215;</a>
            <figure>
                <img src={carioca} alt="Campeonato Carioca" />
                <figcaption>Campeonato Carioca conquistada mais de 38 vezes pelo Flamengo, sendo o maior campeão da competição.</figcaption>
            </figure>
        </div>
    </div>
);

export default Galeria;