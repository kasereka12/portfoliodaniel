import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { personalInfo } from '../data/data'

const NAV_LINKS = [
  { href: '#about',    label: '01.about',    short: 'À propos' },
  { href: '#skills',   label: '02.skills',   short: 'Skills'   },
  { href: '#projects', label: '03.projects', short: 'Projets'  },
  { href: '#timeline', label: '04.timeline', short: 'Parcours' },
  { href: '#contact',  label: '05.contact',  short: 'Contact'  },
]

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [activeLink,  setActiveLink]  = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer le menu mobile sur redimensionnement
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Barre de navigation fixe ── */}
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#030712]/85 backdrop-blur-md border-b border-cyan-400/10 shadow-lg shadow-[#000]/30'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo / prompt */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            whileHover={{ scale: 1.04 }}
          >
            <Terminal size={16} />
            <span className="font-mono text-sm tracking-widest">
              {personalInfo.firstName.toLowerCase()}
              <span className="text-slate-500">@nexus</span>
              <span className="animate-blink text-cyan-400">█</span>
            </span>
          </motion.button>

          {/* ── Liens desktop ── */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => (
              <motion.button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`font-mono text-xs tracking-wider transition-colors ${
                  activeLink === href
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-cyan-400'
                }`}
                whileHover={{ y: -2 }}
              >
                {label}
              </motion.button>
            ))}

            <motion.a
              href={personalInfo.cv}
              download
              className="px-4 py-1.5 border border-cyan-400/40 text-cyan-400 font-mono text-xs tracking-wider rounded hover:bg-cyan-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              ./resume.pdf
            </motion.a>
          </div>

          {/* ── Burger mobile ── */}
          <button
            className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Overlay menu mobile ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#030712]/96 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1   }}
            exit={{    opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map(({ href, label, short }, i) => (
              <motion.button
                key={href}
                onClick={() => handleNavClick(href)}
                className="font-mono text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="text-cyan-400 text-sm mr-2">
                  {label.split('.')[0]}.
                </span>
                {short}
              </motion.button>
            ))}

            <motion.a
              href={personalInfo.cv}
              download
              className="mt-4 px-8 py-3 border border-cyan-400/50 text-cyan-400 font-mono text-sm rounded-lg hover:bg-cyan-400/10 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Télécharger CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
