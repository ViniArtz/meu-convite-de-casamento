import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, MapPin, Shirt } from 'lucide-react'

const DETAILS = [
  { icon: Calendar, label: 'Data', value: 'Quinta-feira', sub: '16 de Julho de 2026' },
  { icon: Clock, label: 'Horário', value: '17h00', sub: 'Recepção às 17h15' },
  { icon: MapPin, label: 'Local', value: 'Coco Bambu Meireles', sub: 'Fortaleza, Ceará' },
  { icon: Shirt, label: 'Traje', value: 'Sport Fino', sub: 'Para os convidados' },
]

function DetailCard({ icon: Icon, label, value, sub, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.14 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        padding: '36px 28px',
        background: 'rgba(255,255,255,0.85)',
        border: '1px solid rgba(190,165,108,0.18)',
        flex: '1 1 180px',
        maxWidth: '210px',
        backdropFilter: 'blur(4px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      whileHover={{
        borderColor: 'rgba(190,165,108,0.55)',
        boxShadow: '0 8px 32px rgba(190,165,108,0.1)',
        y: -4,
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: '1px solid #bea56c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#bea56c',
        }}
      >
        <Icon size={20} strokeWidth={1.2} />
      </div>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.7rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#8b7355',
        }}
      >
        {label}
      </p>

      <p
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.05rem',
          fontWeight: 400,
          color: '#2c1810',
          textAlign: 'center',
          lineHeight: 1.3,
        }}
      >
        {value}
      </p>

      {sub && (
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.88rem',
            color: '#8b7355',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          {sub}
        </p>
      )}
    </motion.div>
  )
}

export default function DetailsSection() {
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
      <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
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
          Informações
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#2c1810',
            marginBottom: '16px',
          }}
        >
          A Celebração
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35 }}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, #bea56c, transparent)',
            maxWidth: '280px',
            margin: '0 auto 64px',
          }}
        />

        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {DETAILS.map((d, i) => (
            <DetailCard key={d.label} {...d} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            marginTop: '48px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.3rem',
            color: '#8b7355',
            fontStyle: 'italic',
            letterSpacing: '0.06em',
          }}
        >
          ✦ Pedimos gentilmente que as convidadas evitem usar branco no dia da cerimônia ✦
          <br /><br />
          ✦ Para não perder nenhum momento especial, pedimos que os convidados cheguem com antecedência — a cerimônia iniciará pontualmente às 17h00 ✦
        </motion.p>
      </div>
    </section>
  )
}
