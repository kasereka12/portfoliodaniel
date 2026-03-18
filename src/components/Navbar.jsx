import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '../data/data'

const NAV_LINKS = [
  { href: '#about',    label: 'À propos'  },
  { href: '#skills',   label: 'Skills'    },
  { href: '#projects', label: 'Projets'   },
  { href: '#timeline', label: 'Parcours'  },
  { href: '#contact',  label: 'Contact'   },
]

const Navbar = () => {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active,     setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const go = (href) => {
    setActive(href)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60'
            : 'bg-transparent'
        }`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo — initiales dans un badge */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <span className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center
                             text-zinc-900 text-xs font-bold tracking-tight select-none">
              {personalInfo.firstName[0]}{personalInfo.name.split(' ')[1]?.[0]}
            </span>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors hidden sm:block">
              {personalInfo.name}
            </span>
          </button>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active === href
                    ? 'text-white bg-white/[0.08]'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.cv}
              download
              className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm
                         bg-cyan-500 hover:bg-cyan-400 text-zinc-900 font-semibold
                         transition-all duration-200"
            >
              CV
            </a>
            <button
              className="md:hidden p-1.5 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.button
                key={href}
                onClick={() => go(href)}
                className="text-2xl font-semibold text-zinc-300 hover:text-white transition-colors px-8 py-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ delay: i * 0.05 }}
              >
                {label}
              </motion.button>
            ))}
            <motion.a
              href={personalInfo.cv}
              download
              className="mt-6 px-8 py-3 bg-cyan-500 text-zinc-900 font-semibold rounded-xl text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
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
