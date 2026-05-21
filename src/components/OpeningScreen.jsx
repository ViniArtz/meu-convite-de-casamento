import { useState } from 'react'
import { motion } from 'framer-motion'
import fundoCapa from '../assets/fundo-capa.png'

export default function OpeningScreen({ onComplete }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    if (isOpening) return
    setIsOpening(true)
    setTimeout(onComplete, 900)
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={isOpening ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #faf8f5 0%, #f0e9dc 50%, #faf8f5 100%)',
        cursor: 'pointer',
        userSelect: 'none',
        overflow: 'hidden',
      }}
      onClick={handleOpen}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${fundoCapa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          filter: 'grayscale(10%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(250,248,245,0.58) 0%, rgba(245,240,232,0.62) 100%)',
          pointerEvents: 'none',
        }}
      />

      <svg style={{ position: 'absolute', top: 24, left: 24, zIndex: 1 }} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>
      <svg style={{ position: 'absolute', top: 24, right: 24, transform: 'scaleX(-1)' }} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 24, left: 24, transform: 'scaleY(-1)' }} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 24, right: 24, transform: 'scale(-1)' }} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1 }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#8b7355',
          }}
        >
          Você recebeu um convite especial
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
            fontWeight: 400,
            color: '#2c1810',
            lineHeight: 1.3,
          }}
        >
          Eloizy{' '}
          <span style={{ color: '#bea56c', fontWeight: 400 }}>&amp;</span>
          {' '}Vinicius
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: '#8b7355',
            letterSpacing: '0.12em',
            fontStyle: 'italic',
          }}
        >
          16 de Julho de 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
        >
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, #bea56c, transparent)',
              width: '120px',
            }}
          />

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#bea56c',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>✦</span>
            Toque para abrir
            <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>✦</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
