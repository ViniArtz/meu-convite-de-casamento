import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import fundoCapa from '../assets/fundo-capa-otimizado.png'
import styles from './PhotoSection.module.css'

export default function PhotoSection() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${fundoCapa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.6) 70%, #faf8f5 100%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className={styles.cta}
      >
        <p
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '1rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#bea56c',
            margin: 0,
            textShadow: 'none',
          }}
        >
          Ver o convite
        </p>
        <div
          style={{
            width: '1px',
            height: '32px',
            background: 'linear-gradient(to bottom, #bea56c, transparent)',
          }}
        />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'none' }}
        >
          <ChevronDown size={26} strokeWidth={2} color="#bea56c" />
        </motion.div>
      </motion.div>
    </div>
  )
}
