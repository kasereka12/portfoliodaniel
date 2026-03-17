import { motion } from 'framer-motion'

/**
 * En-tête de section uniforme : numéro, titre, sous-titre optionnel.
 */
const SectionHeader = ({ number, title, subtitle }) => (
  <motion.div
    className="mb-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Numéro + ligne décorative */}
    <div className="flex items-center gap-3 mb-3">
      <span className="font-mono text-cyan-400 text-sm tracking-[0.2em]">
        {number}
      </span>
      <div className="h-px w-20 bg-gradient-to-r from-cyan-400/60 to-transparent" />
    </div>

    {/* Titre */}
    <h2 className="text-4xl md:text-5xl font-mono font-bold text-white leading-tight">
      {title}
    </h2>

    {/* Sous-titre */}
    {subtitle && (
      <p className="mt-3 text-slate-400 text-base md:text-lg max-w-xl">
        {subtitle}
      </p>
    )}
  </motion.div>
)

export default SectionHeader
