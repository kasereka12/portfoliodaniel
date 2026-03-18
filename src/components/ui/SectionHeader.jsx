import { motion } from 'framer-motion'

const SectionHeader = ({ number, title, subtitle }) => (
  <motion.div
    className="mb-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Numéro */}
    <span className="font-mono text-xs text-cyan-500 tracking-[0.25em] uppercase block mb-3">
      {number}
    </span>

    {/* Titre */}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
      {title}
    </h2>

    {/* Sous-titre */}
    {subtitle && (
      <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
)

export default SectionHeader
