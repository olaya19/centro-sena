import React from 'react';
import logo from '../assets/sena-logo.png'; // ← Ajusta el nombre

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo SENA" />
        </div>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#programas">Programas</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}