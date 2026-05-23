import { useState } from 'react'
import { motion } from 'framer-motion'
import fundoCapa from '../assets/fundo-capa-2.png'
import styles from './OpeningScreen.module.css'

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
      className={styles.wrapper}
      onClick={handleOpen}
    >
      <div className={styles.bgPhoto} style={{ '--bg-url': 'url(' + fundoCapa + ')' }} />
      <div className={styles.bgOverlay} />

      <svg className={styles.corner + ' ' + styles.cornerTL} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>
      <svg className={styles.corner + ' ' + styles.cornerTR} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>
      <svg className={styles.corner + ' ' + styles.cornerBL} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>
      <svg className={styles.corner + ' ' + styles.cornerBR} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M4 56 L4 4 L56 4" stroke="#bea56c" strokeWidth="0.8" opacity="0.5" />
        <circle cx="4" cy="4" r="3" fill="#bea56c" opacity="0.4" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={styles.content}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className={styles.tagline}
        >
          Você recebeu um convite especial
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={styles.title}
        >
          Eloizy <span className={styles.titleAmpersand}>&amp;</span> Vinicius
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className={styles.date}
        >
          16 de Julho de 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className={styles.cta}
        >
          <div className={styles.ctaLine} />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className={styles.ctaText}
          >
            <span className={styles.ctaStar}>✦</span>
            Toque para abrir
            <span className={styles.ctaStar}>✦</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
