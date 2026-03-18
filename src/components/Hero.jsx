import { motion } from 'framer-motion'
import { Github, Linkedin, FileDown, ArrowDown, MapPin } from 'lucide-react'
import { personalInfo } from '../data/data'

/* Stagger container */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

/**
 * Animation "masque" : chaque mot glisse vers le haut depuis derrière un overflow-hidden.
 * Donne un effet typographique moderne façon editorial.
 */
const AnimatedName = ({ name }) => {
  const words = name.split(' ')
  return (
    <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-bold leading-[1.08] tracking-tight mb-6">
      {words.map((word, i) => (
        <span key={word} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block gradient-text"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.3 + i * 0.14,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

/** Formes géométriques flottantes en fond */
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    {/* Blobs couleur */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.10]
                   bg-cyan-500 blur-[110px] animate-blob" />
    <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full opacity-[0.09]
                   bg-violet-600 blur-[100px] animate-blob animation-delay-4000" />
    <div className="absolute -bottom-20 left-1/3 w-[320px] h-[320px] rounded-full opacity-[0.07]
                   bg-cyan-400 blur-[90px] animate-blob animation-delay-2000" />

    {/* Cercles filaires animés */}
    <motion.div
      className="absolute top-[15%] right-[8%] w-48 h-48 rounded-full border border-cyan-400/10"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute top-[15%] right-[8%] w-36 h-36 m-6 rounded-full border border-purple-400/10"
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute bottom-[20%] left-[6%] w-32 h-32 rounded-full border border-cyan-400/8"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
    />

    {/* Points décoratifs */}
    {[
      { top: '20%', left: '20%', delay: 0 },
      { top: '60%', left: '85%', delay: 1 },
      { top: '80%', left: '25%', delay: 2 },
      { top: '35%', left: '70%', delay: 0.5 },
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
        style={{ top: pos.top, left: pos.left }}
        animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
        transition={{ duration: 3, delay: pos.delay, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
)

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B]"
  >
    <FloatingShapes />

    {/* Ligne top */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

    {/* Contenu principal */}
    <motion.div
      className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Badge dispo */}
      {personalInfo.available && (
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <motion.span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium
                       bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 cursor-default"
            whileHover={{ scale: 1.04 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible pour de nouvelles opportunités
          </motion.span>
        </motion.div>
      )}

      {/* Localisation */}
      <motion.div variants={fadeUp} className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
          <MapPin size={11} />
          {personalInfo.location}
        </span>
      </motion.div>

      {/* Nom — animation masque mot par mot */}
      <AnimatedName name={personalInfo.name} />

      {/* Titre */}
      <motion.div variants={fadeUp} className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-white/[0.04] border border-white/[0.08] text-slate-300
                         text-sm sm:text-base font-medium tracking-wide">
          {personalInfo.title}
        </span>
      </motion.div>

      {/* Accroche */}
      <motion.p
        variants={fadeUp}
        className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
      >
        {personalInfo.tagline}
      </motion.p>

      {/* Boutons CTA */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {[
          { href: personalInfo.github,   icon: Github,   label: 'GitHub',   variant: 'ghost' },
          { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn', variant: 'ghost' },
        ].map(({ href, icon: Icon, label, variant }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                       bg-white/[0.05] border border-white/[0.08] text-zinc-300
                       hover:bg-white/[0.09] hover:border-white/[0.16] hover:text-white
                       text-sm font-medium transition-all duration-200"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Icon size={15} />
            {label}
          </motion.a>
        ))}

        <motion.a
          href={personalInfo.cv}
          download
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                     bg-cyan-500 hover:bg-cyan-400 text-zinc-900
                     text-sm font-semibold transition-all duration-200
                     shadow-lg shadow-cyan-500/25"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <FileDown size={15} />
          Télécharger CV
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp}
        className="mt-20 flex flex-col items-center gap-2 text-zinc-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Ligne bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
  </section>
)

export default Hero
