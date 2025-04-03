import React, { useState } from 'react';
import '../../Slide.css'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Icône pour ouvrir/fermer la sidebar */}
      <button className="menu-icon" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Barre latérale */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;