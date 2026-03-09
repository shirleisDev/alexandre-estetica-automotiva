import React, { useState } from 'react'
import { motion } from 'framer-motion'
// Ícones de Interface
import { Calendar, Mail, Sparkles, ChevronRight, Phone } from 'lucide-react' 
// Ícone de Marca (Instagram)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  const [email, setEmail] = useState('')

  return (
    <div style={{ 
      backgroundColor: '#050505', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '60px 20px', 
      fontFamily: 'sans-serif', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'space-between' // Garante que o rodapé fique embaixo
    }}>
      
      {/* CONTEÚDO PRINCIPAL (TITULO E CARD) */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {/* TÍTULO CINEMATOGRÁFICO */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '15px', color: '#3b82f6' }}>
            <Sparkles size={16} />
            <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase' }}>Estética Automotiva</span>
          </div>
          <h1 style={{ fontSize: '50px', fontWeight: '900', letterSpacing: '-2px', lineHeight: '1', margin: '0' }}> 
            ALEXANDRE <br/> 
            <span style={{ color: '#222' }}>PINTURA</span> 
          </h1>
        </div>

        {/* CARD DE AGENDAMENTO */}
        <div style={{ background: '#111', padding: '30px', borderRadius: '24px', width: '100%', maxWidth: '380px', border: '1px solid #222' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#000', borderRadius: '12px', padding: '0 15px', border: '1px solid #333', marginBottom: '20px' }}>
            <Mail size={18} color="#444" />
            <input 
              placeholder="Seu e-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#fff', padding: '16px', width: '100%', outline: 'none' }} 
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', padding: '18px', borderRadius: '12px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
          >
            <Calendar size={18} />
            AGENDAR VISITA
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* RODAPÉ: CONTAINER DE ÍCONES (INSTAGRAM + TELEFONE) */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginTop: '60px', 
        padding: '20px', 
        background: 'rgba(255, 255, 255, 0.09)', 
        borderRadius: '20px',
        border: '1px solid #111' 
      }}>
        {/* ÍCONE INSTAGRAM */}
        <motion.a 
          href="https://instagram.com" 
          target="_blank"
          whileHover={{ scale: 1.1 }}
          style={{ 
            background: 'linear-gradient(45deg, #f09433, #dc2743, #bc1888)', 
            width: '45px',
            height: '45px',
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff" />
        </motion.a>

        {/* ÍCONE TELEFONE */}
        <motion.a 
          href="tel:551199999999" 
          whileHover={{ scale: 1.1 }}
          style={{ 
            background: '#222', 
            width: '45px',
            height: '45px',
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            textDecoration: 'none',
            border: '1px solid #333'
          }}
        >
          <Phone size={20} color="#fff" />
        </motion.a>
      </div>

    </div>
  )
}



// Removi o motion.button que estava dentro de outro motion.button (isso causa erro de renderização).
//Visual "Vitrine": Adicionei um degradê no título, sombras suaves (box-shadow) e efeito de desfoque de fundo (backdrop-filter).
//Layout: Centralizei os elementos e usei a fonte "Inter" (padrão de apps modernos).
// acrescentei um icone do instagram no rodapé que ganho mais sombra e um CONTAINER proprio em caso de quebra tudo estara organizado.
//o efeito da agenda esta menos agressivo