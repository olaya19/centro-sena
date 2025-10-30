import React from 'react';

const programas = [
  "ADSO",
  "Redes de datos",
  "Animación 3D",
  "Logística",
  "Mercadeo",
  "Sistemas"
];

export default function Programas() {
  return (
    <section className="programas" id="programas">
      <div className="container">
        <h2>Nuestros Programas</h2>
        <div className="grid">
          {programas.map((prog, index) => (
            <div className="card" key={index}>
              <div style={{ fontSize: '3rem', color: '#003366' }}>📚</div>
              <h3>{prog}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}