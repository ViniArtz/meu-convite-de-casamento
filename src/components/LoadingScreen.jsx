import { motion } from 'framer-motion'
import logoCasal from '../assets/SVG/Logo do Casal.svg'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  return (
    <motion.div
      className={styles.wrapper}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <motion.img
        src={logoCasal}
        alt="Logo E&V"
        className={styles.logo}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: [0.6, 1, 0.6], scale: 1 }}
        transition={{ opacity: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }, scale: { duration: 1, ease: 'easeOut' } }}
      />

      <motion.p
        className={styles.names}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Eloizy <span className={styles.ampersand}>&amp;</span> Vinicius
      </motion.p>

      <motion.div
        className={styles.dots}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={styles.dot}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
