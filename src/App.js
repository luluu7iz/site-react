import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './compo/Header';
import Menu from './compo/Menu/Menu';
import Home from './paginas/Home';
import HistoriaPage from './paginas/Historia';
import Galeria from './paginas/Galeria';
import Contato from './paginas/Contato';
import './App.css'; 

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <footer>
        <p><strong>Informações de Contato</strong></p>
        <p>Email: contato@flamengo.com.br</p>
        <p>Telefone: (21) 3512-1212</p>
        <p>Endereço: Av. Borges de Medeiros, 997 - Gávea, Rio de Janeiro - RJ, 22430-041</p>
      </footer>
    </Router>
  );
}

export default App;