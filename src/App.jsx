import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact  from './components/Contact'

/** Barre de progression de scroll en haut de page */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}

const App = () => (
  <div>
    <ScrollProgress />
    <Navbar />
    <main>
      <Hero     />
      <About    />
      <Skills   />
      <Projects />
      <Timeline />
      <Contact  />
    </main>
  </div>
)

export default App
