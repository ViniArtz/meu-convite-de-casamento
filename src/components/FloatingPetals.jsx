import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PETAL_SHAPES = [
  'M12 2 C16 2 20 6 20 10 C20 16 12 22 12 22 C12 22 4 16 4 10 C4 6 8 2 12 2Z',
  'M12 3 C18 3 21 9 21 12 C21 15 18 21 12 21 C6 21 3 15 3 12 C3 9 6 3 12 3Z',
  'M12 1 C15 4 17 8 17 12 C17 18 15 22 12 23 C9 22 7 18 7 12 C7 8 9 4 12 1Z',
]

function Petal({ x, delay, duration, size, opacity, drift, shape, color }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: '-30px',
        width: size,
        height: size,
        opacity,
        pointerEvents: 'none',
      }}
      animate={{
        y: ['0px', `${window.innerHeight + 80}px`],
        x: [0, drift * 0.4, drift * -0.2, drift],
        rotate: [0, 180 + Math.random() * 180],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        repeatDelay: Math.random() * 3,
      }}
    >
      <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
        <path d={shape} />
      </svg>
    </motion.div>
  )
}

export default function FloatingPetals() {
  const petals = useMemo(() => {
    const colors = ['#bea56c', '#e8d5a3', '#d4b896', '#bea56c', '#b89060']
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 14 + Math.random() * 14,
      size: 8 + Math.random() * 14,
      opacity: 0.12 + Math.random() * 0.22,
      drift: (Math.random() - 0.5) * 160,
      shape: PETAL_SHAPES[Math.floor(Math.random() * PETAL_SHAPES.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {petals.map(p => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  )
}
