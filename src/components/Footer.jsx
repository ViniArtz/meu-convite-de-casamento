import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart } from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <footer
      ref={ref}
      style={{
        padding: '80px 24px 60px',
        background: 'linear-gradient(180deg, #1e120a 0%, #2c1810 100%)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: 'clamp(6rem, 20vw, 14rem)',
          color: 'rgba(190,165,108,0.03)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        E &amp; V
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(190,165,108,0.6)',
            marginBottom: '20px',
          }}
        >
          Com amor
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.35, duration: 1 }}
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
            color: '#e8d5a3',
            lineHeight: 1.4,
            marginBottom: '28px',
            letterSpacing: '0.05em',
          }}
        >
          Eloizy{' '}
          <span style={{ color: '#bea56c' }}>&amp;</span>
          {' '}Vinicius
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <div style={{ height: '1px', width: '80px', background: 'rgba(190,165,108,0.25)' }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Heart size={14} color="#bea56c" fill="#bea56c" />
          </motion.div>
          <div style={{ height: '1px', width: '80px', background: 'rgba(190,165,108,0.25)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.95rem',
            color: 'rgba(232,213,163,0.45)',
            letterSpacing: '0.12em',
            fontStyle: 'italic',
          }}
        >
          16 · 07 · 2026 · Fortaleza, Ceará
        </motion.p>
      </motion.div>
    </footer>
  )
}
