import React from 'react';
import './Header.css'; // Make sure to create this CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" /> {/* Replace with your logo path */}
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
