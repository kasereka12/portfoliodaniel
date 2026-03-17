import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact  from './components/Contact'

/**
 * Application principale.
 * La classe `scanlines` ajoute l'overlay CRT sur toute la page.
 */
const App = () => (
  <div className="scanlines">
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
