import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import logoCasal from '../assets/SVG/Logo do Casal.svg'
import styles from './HeroSection.module.css'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.content}>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className={styles.tagline}
        >
          Com a bênção de Deus<br />e de seus pais
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className={styles.logoWrapper}
        >
          <img src={logoCasal} alt="Logo E&V" className={styles.logoImg} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.3, delay: 0.4, ease }}
          className={styles.nameFirst}
        >
          Eloizy Alves
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className={styles.ampersand}
        >
          &amp;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.3, delay: 1.0, ease }}
          className={styles.nameLast}
        >
          Vinicius Teixeira
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
          className={styles.tagline}
        >
          convidam você para o seu casamento
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.6 }}
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
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className={styles.subtitle}
        >
          Quinta-feira · 17h00 · Fortaleza, CE
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.3 }}
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
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.6 }}
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
