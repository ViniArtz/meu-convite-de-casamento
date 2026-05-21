import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, ExternalLink } from 'lucide-react'
import fotoBg from '../assets/Foto- fundo-local.png'

const MAPS_URL = '#'

export default function LocationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${fotoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.55,
          filter: 'grayscale(10%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(245,240,232,0.58) 0%, rgba(250,248,245,0.62) 100%)',
        }}
      />
      <div ref={ref} style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '1px solid rgba(190,165,108,0.5)',
            background: 'rgba(190,165,108,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#bea56c',
            margin: '0 auto 28px',
          }}
        >
          <motion.div
            animate={inView ? { y: [0, -4, 0] } : {}}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <MapPin size={24} strokeWidth={1.2} />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.78rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#bea56c',
            marginBottom: '12px',
          }}
        >
          Localização
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#2c1810',
            marginBottom: '10px',
          }}
        >
          Coco Bambu Meireles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.05rem',
            color: '#8b7355',
            fontStyle: 'italic',
            marginBottom: '6px',
          }}
        >
          Meireles, Fortaleza — Ceará
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.95rem',
            color: '#b0936e',
            marginBottom: '44px',
          }}
        >
          Quinta-feira, 16 de Julho de 2026 às 17h00
        </motion.p>

        <motion.a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          whileHover={{
            backgroundColor: '#bea56c',
            color: '#fff',
            borderColor: '#bea56c',
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 40px',
            border: '1px solid #bea56c',
            color: '#bea56c',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.9rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
        >
          <MapPin size={15} strokeWidth={1.5} />
          Ver no Mapa
          <ExternalLink size={13} strokeWidth={1.5} />
        </motion.a>
      </div>
    </section>
  )
}
