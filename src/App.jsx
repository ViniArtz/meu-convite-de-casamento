import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import OpeningScreen from './components/OpeningScreen'
import FloatingPetals from './components/FloatingPetals'
import PhotoSection from './components/PhotoSection'
import HeroSection from './components/HeroSection'
import CountdownSection from './components/CountdownSection'
import DetailsSection from './components/DetailsSection'
import LocationSection from './components/LocationSection'
import LinksSection from './components/LinksSection'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 1500))
    const windowLoad = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', resolve, { once: true })
    })
    Promise.all([minDelay, windowLoad]).then(() => setLoaded(true))
  }, [])

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && !opened && (
          <OpeningScreen key="opening" onComplete={() => setOpened(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {opened && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloatingPetals />
            <PhotoSection />
            <HeroSection />
            <CountdownSection />
            <DetailsSection />
            <LocationSection />
            <LinksSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
