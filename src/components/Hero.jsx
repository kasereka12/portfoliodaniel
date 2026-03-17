import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, FileDown, ArrowDown } from 'lucide-react'
import MatrixRain   from './MatrixRain'
import GlitchText   from './ui/GlitchText'
import { personalInfo } from '../data/data'

// Séquence de boot affichée avant le contenu principal
const BOOT_LINES = [
  '> NEXUS OS v2.4.1 — Initializing system...',
  '> Mounting personality.sys          [  OK  ]',
  '> Loading skills.json               [  OK  ]',
  '> Compiling creativity daemon       [  OK  ]',
  '> Establishing matrix connection    [  OK  ]',
  '> Calibrating pixel renderer        [  OK  ]',
  '> ─────────────────────────────────────────',
  '> SYSTEM READY. Welcome.',
]

/** Composant qui tape une ligne caractère par caractère */
const BootLine = ({ text, onDone }) => {
  const [shown, setShown] = useState('')

  useEffect(() => {
    let i = 0
    const iv = setInterval(() => {
      setShown(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(iv)
        onDone?.()
      }
    }, 18)
    return () => clearInterval(iv)
  }, [text, onDone])

  const isOk   = text.includes('[  OK  ]')
  const isDone = text.includes('SYSTEM READY')

  return (
    <div className="font-mono text-xs sm:text-sm leading-6 flex gap-2">
      <span className={isDone ? 'text-cyan-400' : isOk ? 'text-green-400' : 'text-slate-400'}>
        {shown}
      </span>
      {shown.length < text.length && (
        <span className="animate-blink text-cyan-400">█</span>
      )}
    </div>
  )
}

const Hero = () => {
  const [bootIndex,  setBootIndex]  = useState(0)   // ligne de boot en cours
  const [showMain,   setShowMain]   = useState(false)

  const handleLineDone = () => {
    if (bootIndex < BOOT_LINES.length - 1) {
      setTimeout(() => setBootIndex(i => i + 1), 120)
    } else {
      setTimeout(() => setShowMain(true), 500)
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* ── Arrière-plan ── */}
      <MatrixRain />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(6,182,212,0.07),transparent)]" />

      {/* ── Séquence de boot ── */}
      <AnimatePresence>
        {!showMain && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center p-6"
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45 }}
          >
            <div className="w-full max-w-lg bg-[#0B1120]/90 backdrop-blur-sm border border-slate-700/60 rounded-xl shadow-2xl overflow-hidden">
              {/* Barre titre fenêtre */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#141F35] border-b border-slate-700/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80    block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80  block" />
                <span className="ml-2 font-mono text-slate-500 text-xs">boot.sh — bash</span>
              </div>

              <div className="p-6 space-y-1 min-h-[200px]">
                {BOOT_LINES.slice(0, bootIndex + 1).map((line, i) => (
                  <BootLine
                    key={i}
                    text={line}
                    onDone={i === bootIndex ? handleLineDone : undefined}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Contenu principal ── */}
      <AnimatePresence>
        {showMain && (
          <motion.div
            className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge disponibilité */}
            {personalInfo.available && (
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1,   y: 0   }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponible pour de nouvelles opportunités
              </motion.div>
            )}

            {/* Prompt + Nom */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-cyan-400 text-sm tracking-[0.35em] uppercase mb-4">
                $ whoami
              </p>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-mono font-bold leading-none tracking-tight">
                <GlitchText
                  text={personalInfo.name}
                  glitchOnMount
                  className="text-white text-glow-cyan"
                  as="span"
                />
              </h1>
            </motion.div>

            {/* Titre */}
            <motion.div
              className="mt-6 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2 border border-purple-500/40 bg-purple-500/10 rounded-lg font-mono text-purple-300 text-sm sm:text-base tracking-widest">
                {personalInfo.title}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-2 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#141F35] border border-slate-600/60 hover:border-cyan-400/60 text-slate-300 hover:text-cyan-400 font-mono text-sm rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={15} />
                GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#141F35] border border-slate-600/60 hover:border-purple-400/60 text-slate-300 hover:text-purple-400 font-mono text-sm rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin size={15} />
                LinkedIn
              </motion.a>

              <motion.a
                href={personalInfo.cv}
                download
                className="flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-[#030712] font-mono text-sm font-bold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileDown size={15} />
                Télécharger CV
              </motion.a>
            </motion.div>

            {/* Indicateur de scroll */}
            <motion.div
              className="mt-20 flex flex-col items-center gap-2 text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase">scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              >
                <ArrowDown size={14} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Coins décoratifs ── */}
      {['top-8 left-8 border-l-2 border-t-2', 'top-8 right-8 border-r-2 border-t-2',
        'bottom-8 left-8 border-l-2 border-b-2', 'bottom-8 right-8 border-r-2 border-b-2'
      ].map((cls, i) => (
        <div key={i} className={`absolute w-10 h-10 border-cyan-400/20 ${cls}`} />
      ))}
    </section>
  )
}

export default Hero
