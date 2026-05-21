import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WEDDING_DATE = new Date('2026-07-16T17:00:00-03:00')

function getTimeLeft() {
  const diff = WEDDING_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function FlipUnit({ value, label, index }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  const displayed = pad(value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
    >
      <div
        style={{
          position: 'relative',
          width: 'clamp(64px, 14vw, 100px)',
          height: 'clamp(72px, 16vw, 112px)',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(190,165,108,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(190,165,108,0.2)',
          zIndex: 2,
        }} />

        <AnimatePresence mode="popLayout">
          <motion.span
            key={displayed}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 6vw, 3.8rem)',
              fontWeight: 600,
              color: '#faf8f5',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {displayed}
          </motion.span>
        </AnimatePresence>
      </div>

      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.7rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#bea56c',
          opacity: 0.85,
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #1e120a 0%, #2c1810 50%, #1e120a 100%)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, #bea56c 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: 'clamp(12rem, 30vw, 22rem)',
          color: 'rgba(190,165,108,0.03)',
          lineHeight: 1,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        E &amp; V
      </div>

      <div ref={ref} style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.78rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#bea56c',
            marginBottom: '12px',
          }}
        >
          Contagem regressiva
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#faf8f5',
            marginBottom: '52px',
          }}
        >
          Faltam apenas…
        </motion.h2>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(12px, 3vw, 32px)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          <FlipUnit value={time.days} label="Dias" index={0} />
          <FlipUnit value={time.hours} label="Horas" index={1} />
          <FlipUnit value={time.minutes} label="Minutos" index={2} />
          <FlipUnit value={time.seconds} label="Segundos" index={3} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            marginTop: '48px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            color: 'rgba(232,213,163,0.5)',
            fontStyle: 'italic',
            letterSpacing: '0.08em',
          }}
        >
          16 de Julho de 2026 · 17h00 · Fortaleza, CE
        </motion.p>
      </div>
    </section>
  )
}
