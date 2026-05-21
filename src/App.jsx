import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import OpeningScreen from './components/OpeningScreen'
import FloatingPetals from './components/FloatingPetals'
import HeroSection from './components/HeroSection'
import CountdownSection from './components/CountdownSection'
import DetailsSection from './components/DetailsSection'
import LocationSection from './components/LocationSection'
import LinksSection from './components/LinksSection'
import Footer from './components/Footer'

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!opened && <OpeningScreen key="opening" onComplete={() => setOpened(true)} />}
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
