import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import logoCasal from '../assets/SVG/Logo do Casal.svg'
import fundoCapa from '../assets/fundo-capa.png'
import styles from './HeroSection.module.css'

const Ornament = () => (
  <svg width="240" height="32" viewBox="0 0 240 32" fill="none">
    <line x1="0" y1="16" x2="96" y2="16" stroke="#bea56c" strokeWidth="0.6" />
    <circle cx="104" cy="16" r="3" fill="#bea56c" opacity="0.5" />
    <circle cx="120" cy="16" r="6" fill="none" stroke="#bea56c" strokeWidth="1" />
    <circle cx="120" cy="16" r="2" fill="#bea56c" />
    <circle cx="136" cy="16" r="3" fill="#bea56c" opacity="0.5" />
    <line x1="144" y1="16" x2="240" y2="16" stroke="#bea56c" strokeWidth="0.6" />
  </svg>
)

const ease = [0.25, 0.46, 0.45, 0.94]

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPhoto} style={{ '--bg-url': `url(${fundoCapa})` }} />
      <div className={styles.bgOverlay} />

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className={styles.logoWrapper}
        >
          <img src={logoCasal} alt="Logo E&V" className={styles.logoImg} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={styles.tagline}
        >
          Com a bênção de Deus e de seus pais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4, ease }}
          className={styles.nameFirst}
        >
          Eloizy Alves
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className={styles.ampersand}
        >
          &amp;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.5, ease }}
          className={styles.nameLast}
        >
          Vinicius Teixeira
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1 }}
          className={styles.dateBadge}
        >
          <div className={`${styles.dateDot} ${styles.dotTL}`} />
          <div className={`${styles.dateDot} ${styles.dotTR}`} />
          <div className={`${styles.dateDot} ${styles.dotBL}`} />
          <div className={`${styles.dateDot} ${styles.dotBR}`} />
          <p className={styles.dateText}>16 · 07 · 2026</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className={styles.subtitle}
        >
          Quinta-feira · 17h00 · Fortaleza, CE
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.0 }}
          className={styles.verse}
        >
          <div className={styles.verseLine} />
          <p className={styles.verseText}>
            "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito."
          </p>
          <p className={styles.verseRef}>Colossenses 3:14</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        className={styles.scrollIndicator}
      >
        <div className={styles.scrollLine} />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} strokeWidth={1.2} />
        </motion.div>
      </motion.div>
    </section>
  )
}
