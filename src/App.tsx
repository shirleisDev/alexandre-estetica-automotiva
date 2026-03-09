import { useState, type CSSProperties } from 'react'

import { motion } from 'framer-motion'
import { Phone, MapPin, Calendar, Mail, Lock } from 'lucide-react'

// 2. SUBSTITUIÇÃO DO 'ANY': Usamos Record<string, CSSProperties>
// Isso é o "etiquetamento de caixas" que você viu na sua foto!
const styles: Record<string, CSSProperties> = {
  container: { 
    padding: '20px', 
    backgroundColor: '#121212', 
    color: 'white', 
    minHeight: '100vh', 
    fontFamily: 'Arial, sans-serif' 
  },
  header: { textAlign: 'center', padding: '40px 0' },
  title: { 
    color: '#e81c23', 
    fontSize: '2.5rem', 
    textTransform: 'uppercase', 
    letterSpacing: '2px' 
  },
  card: { 
    background: '#1e1e1e', 
    padding: '30px', 
    borderRadius: '15px', 
    maxWidth: '400px', 
    margin: '0 auto',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
  },
  inputGroup: { 
    display: 'flex', 
    alignItems: 'center', 
    background: '#333', 
    borderRadius: '8px', 
    marginBottom: '15px', 
    padding: '0 10px' 
  },
  icon: { color: '#e81c23' },
  input: { 
    background: 'transparent', 
    border: 'none', 
    color: 'white', 
    padding: '12px', 
    width: '100%', 
    outline: 'none' 
  },
  buttonArea: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '20px', 
    marginTop: '40px' 
  },
  btnPhone: { 
    backgroundColor: '#25d366', 
    padding: '15px', 
    borderRadius: '50%', 
    display: 'flex',
    border: 'none',
    cursor: 'pointer'
  },
  btnRace: { 
    backgroundColor: '#e81c23', 
    color: 'white', 
    padding: '15px 30px', 
    borderRadius: '50px', 
    border: 'none', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center',
    gap: '10px' 
  },
  mapContainer: { marginTop: '50px', textAlign: 'center' }
};

// 3. A FUNÇÃO PRINCIPAL (Onde os dados do Backend vão morar)
export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Alexandre Estética</h1>
        <p>O brilho que seu carro merece</p>
      </header>

      {/* FORMULÁRIO DE ACESSO */}
      <section style={styles.card}>
        <div style={styles.inputGroup}>
          <Mail size={18} style={styles.icon} />
          <input 
            placeholder="Seu e-mail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={styles.input} 
          />
        </div>
        <div style={styles.inputGroup}>
          <Lock size={18} style={styles.icon} />
          <input 
            placeholder="Sua senha" 
            type="password" 
            maxLength={5} 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            style={styles.input} 
          />
        </div>
      </section>

      {/* BOTÕES COM ANIMAÇÃO */}
      <div style={styles.buttonArea}>
        
        {/* BOTÃO QUE TREME */}
        <motion.button 
          whileHover={{ x: [0, -3, 3, -3, 3, 0] }}
          transition={{ repeat: Infinity, duration: 0.3 }}
          style={styles.btnPhone}
        >
          <Phone color="white" />
        </motion.button>

        {/* BOTÃO CARRO DE CORRIDA */}
        <motion.button 
          whileTap={{ x: 800, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.btnRace}
        >
          <Calendar size={20} /> AGENDAR VISITA
        </motion.button>
      </div>

      <div style={styles.mapContainer}>
         <MapPin size={30} color="#e81c23" style={{ marginBottom: '10px' }} />
         <p>Rio de Janeiro - RJ</p>
      </div>
    </div>
  );
}


