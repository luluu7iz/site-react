import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <nav>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/historia">HISTÓRIA</a></li>
        <li><a href="/galeria">GALERIA</a></li>
        <li><a href="/contato">CONTATO</a></li>
      </ul>
    </nav>
  );
}

export default Menu;