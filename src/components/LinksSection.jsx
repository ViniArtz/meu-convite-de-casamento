import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Gift, List } from 'lucide-react'

const RSVP_URL = 'https://noivos.casar.com/eloizy-e-vinicius'
const GIFTS_URL = 'https://www.querodecasamento.com.br/lista-de-casamento/eloizy-e-Vinicius'
const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1VOO1JuIstW1pMg4d1ZoG0rWtf6ULYk-40fT8ALPqJd8/edit?gid=0#gid=0'

function ActionCard({ href, icon: Icon, title, subtitle, filled, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(44,24,16,0.15)' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '18px',
        padding: '52px 44px',
        background: filled ? '#2c1810' : '#ffffff',
        border: filled ? '1px solid #2c1810' : '1px solid rgba(190,165,108,0.35)',
        color: filled ? '#faf8f5' : '#2c1810',
        textDecoration: 'none',
        flex: '1 1 220px',
        maxWidth: '280px',
        minWidth: '220px',
        transition: 'box-shadow 0.3s, transform 0.3s',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 0.06 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, #bea56c, transparent)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: `1px solid ${filled ? 'rgba(190,165,108,0.5)' : '#bea56c'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#bea56c',
        }}
      >
        <Icon size={22} strokeWidth={1.2} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.25rem',
            fontWeight: 400,
            marginBottom: '8px',
            color: filled ? '#faf8f5' : '#2c1810',
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: filled ? 'rgba(232,213,163,0.7)' : '#8b7355',
            letterSpacing: '0.05em',
          }}
        >
          {subtitle}
        </p>
      </div>
    </motion.a>
  )
}

export default function LinksSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      style={{
        padding: '100px 24px',
        background: '#faf8f5',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          ref={ref}
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
          Participe
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#2c1810',
            marginBottom: '12px',
          }}
        >
          Sua presença é o maior presente que poderíamos receber.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.05rem',
            color: '#8b7355',
            fontStyle: 'italic',
            marginBottom: '16px',
          }}
        >
          Mas, se desejarem nos presentear de outra forma, ficaremos imensamente gratos.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, #bea56c, transparent)',
            maxWidth: '280px',
            margin: '0 auto 60px',
          }}
        />

        <div
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ActionCard
            href={RSVP_URL}
            icon={Heart}
            title="Confirmar Presença"
            subtitle="Confirme sua participação"
            filled={true}
            index={0}
          />
          <ActionCard
            href={GIFTS_URL}
            icon={Gift}
            title="Lista de Presentes"
            subtitle="Presenteie os noivos"
            filled={false}
            index={1}
          />
          <ActionCard
            href={SPREADSHEET_URL}
            icon={List}
            title="Nossa Lista"
            subtitle="Lista personalizada do casal"
            filled={false}
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
