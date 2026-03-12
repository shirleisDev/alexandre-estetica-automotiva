import { useState } from 'react';
import './index.css';

function App() {
  const [email, setEmail] = useState('');

  const handleAgendar = () => {
    if (!email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
    const tel = "5521979072363";
    const texto = "Olá Alexandre! Gostaria de agendar uma estética automotiva. E-mail: " + email;
    const link = "https://wa.me" + tel + "?text=" + encodeURIComponent(texto);
    window.open(link, '_blank');
  };

  return (
    <div className="main-container">
      <header className="header-logo">
        <span className="alexandre">ALEXANDRE</span>
        <span className="pintura">PINTURA</span>
      </header>

      <div className="card-form">
        <input 
          type="email" 
          placeholder="Seu e-mail profissional" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn-agendar" onClick={handleAgendar}>
          AGENDAR VISITA
        </button>
      </div>

      <footer className="footer-social">
        <div className="social-box">
          <button className="social-btn" onClick={() => window.open('https://instagram.com', '_blank')}>📸</button>
          <button className="social-btn" onClick={() => window.location.href = 'tel:+5521979072363'}>📞</button>
        </div>
      </footer>
    </div>
  );
}

export default App;