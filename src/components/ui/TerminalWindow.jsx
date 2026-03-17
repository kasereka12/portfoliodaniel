import { motion } from 'framer-motion'

/**
 * Wrapper stylisé "fenêtre terminal" avec barre de titre macOS-style.
 * @param {string}    title     - Titre affiché dans la barre
 * @param {ReactNode} children  - Contenu du terminal
 * @param {string}    className - Classes CSS additionnelles
 * @param {boolean}   animate   - Active l'animation d'entrée (défaut true)
 */
const TerminalWindow = ({
  title = 'terminal',
  children,
  className = '',
  animate = true,
}) => {
  const Wrapper = animate ? motion.div : 'div'
  const motionProps = animate
    ? {
        initial:    { opacity: 0, y: 20 },
        whileInView:{ opacity: 1, y: 0  },
        transition: { duration: 0.5 },
        viewport:   { once: true },
      }
    : {}

  return (
    <Wrapper
      className={`rounded-xl overflow-hidden bg-[#0B1120] border border-slate-700/60 shadow-2xl ${className}`}
      {...motionProps}
    >
      {/* Barre de titre */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#141F35] border-b border-slate-700/60">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80   block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80  block" />
        </div>
        <span className="ml-2 font-mono text-slate-500 text-xs tracking-wide">
          {title}
        </span>
      </div>

      {/* Contenu */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </Wrapper>
  )
}

export default TerminalWindow
