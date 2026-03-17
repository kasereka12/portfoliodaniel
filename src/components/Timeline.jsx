import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { timeline } from '../data/data'

// Styles par type (work / education)
const TYPE_CONFIG = {
  work: {
    icon:        Briefcase,
    label:       'Expérience',
    textColor:   'text-cyan-400',
    borderColor: 'border-cyan-400/20',
    hoverBorder: 'hover:border-cyan-400/50',
    dotBg:       'bg-cyan-400',
    dotShadow:   'shadow-cyan-400/50',
    badgeCls:    'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  },
  education: {
    icon:        GraduationCap,
    label:       'Formation',
    textColor:   'text-purple-400',
    borderColor: 'border-purple-400/20',
    hoverBorder: 'hover:border-purple-400/50',
    dotBg:       'bg-purple-400',
    dotShadow:   'shadow-purple-400/50',
    badgeCls:    'text-purple-400 border-purple-400/30 bg-purple-400/10',
  },
}

/** Entrée individuelle (desktop — deux colonnes alternées) */
const DesktopEntry = ({ entry, index }) => {
  const cfg    = TYPE_CONFIG[entry.type] ?? TYPE_CONFIG.work
  const Icon   = cfg.icon
  const isLeft = index % 2 === 0   // texte à gauche ou à droite de la ligne centrale

  return (
    <div className={`relative grid grid-cols-[1fr_auto_1fr] items-start gap-0`}>

      {/* Colonne gauche */}
      <div className={isLeft ? 'pr-10' : ''}>
        {isLeft && <EntryCard entry={entry} cfg={cfg} index={index} side="left" />}
      </div>

      {/* Point central + ligne verticale */}
      <div className="flex flex-col items-center">
        <motion.div
          className={`w-4 h-4 rounded-full ${cfg.dotBg} shadow-lg ${cfg.dotShadow} border-2 border-[#050B18] z-10`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Colonne droite */}
      <div className={!isLeft ? 'pl-10' : ''}>
        {!isLeft && <EntryCard entry={entry} cfg={cfg} index={index} side="right" />}
      </div>
    </div>
  )
}

/** Contenu d'une carte (partagé desktop/mobile) */
const EntryCard = ({ entry, cfg, index, side = 'left' }) => {
  const Icon = cfg.icon
  return (
    <motion.div
      className={`bg-[#0B1120] border ${cfg.borderColor} ${cfg.hoverBorder}
        rounded-2xl p-5 transition-all duration-300 hover:shadow-xl`}
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {/* Badge type + période */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono border ${cfg.badgeCls}`}>
          <Icon size={10} />
          {cfg.label}
        </span>
        <span className="font-mono text-xs text-slate-500">{entry.period}</span>
      </div>

      {/* Titre + orga */}
      <h3 className="font-mono font-bold text-white text-base mb-0.5">{entry.title}</h3>
      <p className={`font-mono text-sm ${cfg.textColor} mb-3`}>{entry.organization}</p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-3">{entry.description}</p>

      {/* Localisation + techs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1 text-slate-500 text-xs">
          <MapPin size={10} />
          {entry.location}
        </span>
        {entry.techs.map((t) => (
          <span key={t} className="px-2 py-0.5 font-mono text-xs bg-[#141F35] text-slate-400 rounded-md">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Timeline = () => (
  <section id="timeline" className="py-24 px-4 bg-[#050B18] relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

    <div className="max-w-5xl mx-auto relative">
      <SectionHeader
        number="04."
        title="Parcours"
        subtitle="Le commit history de ma carrière."
      />

      {/* ── Version mobile (simple colonne) ── */}
      <div className="md:hidden space-y-0">
        {timeline.map((entry, i) => {
          const cfg  = TYPE_CONFIG[entry.type] ?? TYPE_CONFIG.work
          const Icon = cfg.icon
          return (
            <motion.div
              key={entry.id}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Ligne verticale + point */}
              <div className="flex flex-col items-center pt-1.5">
                <div className={`w-3 h-3 rounded-full ${cfg.dotBg} shrink-0`} />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-slate-700/50 my-1" />
                )}
              </div>

              {/* Carte */}
              <div className="pb-6 flex-1">
                <EntryCard entry={entry} cfg={cfg} index={i} side="right" />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ── Version desktop (deux colonnes) ── */}
      <div className="hidden md:block relative">
        {/* Ligne centrale */}
        <div className="absolute left-1/2 top-2 bottom-2 w-px
          bg-gradient-to-b from-cyan-400/40 via-purple-400/30 to-transparent
          -translate-x-1/2 pointer-events-none" />

        <div className="space-y-10">
          {timeline.map((entry, i) => (
            <DesktopEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Timeline
