import React from 'react';
import './Contato.css';

const Contato = () => (
    <div className="contato-container">
        <div className="contato-content">
            <div className="formulario">
                <h2>Fale Conosco</h2>
                <form action="#" method="post">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
                    
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(XX) XXXXX-XXXX" required />
                    
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" required />
                    
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem aqui..." required></textarea>
                    
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="mapa">
                <h2>Localização</h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5965991420326!2d-43.223576552470746!3d-22.978330686958817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5af563776af%3A0xd91e3f3bad019e35!2sAv.%20Borges%20de%20Medeiros%2C%20997%20-%20Lagoa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022430-041!5e1!3m2!1spt-BR!2sbr!4v1732199491844!5m2!1spt-BR!2sbr" 
                    width="600" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
);

export default Contato;
