import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombres: '',
    correo: '',
    mensaje: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    emailjs.send(
      'YOUR_SERVICE_ID',    // ← Reemplaza con tu Service ID
      'YOUR_TEMPLATE_ID',   // ← Reemplaza con tu Template ID
      formData,
      'YOUR_USER_ID'        // ← Reemplaza con tu Public Key
    )
    .then((result) => {
      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ nombres: '', correo: '', mensaje: '' });
    }, (error) => {
      setStatus('Error al enviar. Intenta de nuevo.');
    });
  };

  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <h2>Contáctanos</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombres</label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Correo</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Enviar</button>
            {status && <p className={status.includes('éxito') ? 'success' : 'error'}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}