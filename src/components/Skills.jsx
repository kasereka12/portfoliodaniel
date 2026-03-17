import { motion } from 'framer-motion'
import { Monitor, Server, Database, Wrench, Code2 } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { skills } from '../data/data'

// ── Correspondances couleurs par thème ──────────────────────────
const COLORS = {
  cyan: {
    text:        'text-cyan-400',
    border:      'border-cyan-400/20',
    hoverBorder: 'hover:border-cyan-400/50',
    bg:          'bg-cyan-400/5',
    bar:         'bg-cyan-400',
    dot:         'bg-cyan-400',
    shadow:      'hover:shadow-cyan-400/10',
  },
  purple: {
    text:        'text-purple-400',
    border:      'border-purple-400/20',
    hoverBorder: 'hover:border-purple-400/50',
    bg:          'bg-purple-400/5',
    bar:         'bg-purple-400',
    dot:         'bg-purple-400',
    shadow:      'hover:shadow-purple-400/10',
  },
  green: {
    text:        'text-emerald-400',
    border:      'border-emerald-400/20',
    hoverBorder: 'hover:border-emerald-400/50',
    bg:          'bg-emerald-400/5',
    bar:         'bg-emerald-400',
    dot:         'bg-emerald-400',
    shadow:      'hover:shadow-emerald-400/10',
  },
  yellow: {
    text:        'text-yellow-400',
    border:      'border-yellow-400/20',
    hoverBorder: 'hover:border-yellow-400/50',
    bg:          'bg-yellow-400/5',
    bar:         'bg-yellow-400',
    dot:         'bg-yellow-400',
    shadow:      'hover:shadow-yellow-400/10',
  },
  rose: {
    text:        'text-rose-400',
    border:      'border-rose-400/20',
    hoverBorder: 'hover:border-rose-400/50',
    bg:          'bg-rose-400/5',
    bar:         'bg-rose-400',
    dot:         'bg-rose-400',
    shadow:      'hover:shadow-rose-400/10',
  },
}

const ICON_MAP = { Monitor, Server, Database, Wrench, Code2 }

// Classes bento selon l'index (pour varier les tailles sur desktop)
const BENTO_CLASSES = [
  'md:col-span-2 lg:col-span-2', // 0 — large
  '',                             // 1 — normal
  '',                             // 2 — normal
  '',                             // 3 — normal
  'md:col-span-2 lg:col-span-1', // 4 — normal
]

/** Barre de progression animée */
const SkillBar = ({ name, level, colorKey, index }) => {
  const c = COLORS[colorKey] ?? COLORS.cyan
  return (
    <motion.div
      className="space-y-1"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between">
        <span className="font-mono text-xs text-slate-300">{name}</span>
        <span className={`font-mono text-xs ${c.text}`}>{level}%</span>
      </div>
      <div className="h-[3px] bg-slate-700/60 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${c.bar}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.1, delay: index * 0.07 + 0.25, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}

/** Carte de compétence */
const SkillCard = ({ skill, extraClass = '' }) => {
  const Icon = ICON_MAP[skill.icon] ?? Code2
  const c    = COLORS[skill.color] ?? COLORS.cyan

  return (
    <motion.div
      className={`relative bg-[#0B1120] rounded-2xl p-6 border ${c.border} ${c.hoverBorder} ${c.bg}
        transition-all duration-300 hover:shadow-xl ${c.shadow} overflow-hidden ${extraClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
    >
      {/* Pastille décorative */}
      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${c.dot} opacity-70`} />

      {/* En-tête */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`p-2.5 rounded-xl ${c.bg} border ${c.border}`}>
          <Icon className={c.text} size={18} />
        </div>
        <div>
          <h3 className={`font-mono font-bold text-sm ${c.text}`}>{skill.category}</h3>
          <p className="text-slate-500 text-xs mt-0.5">{skill.description}</p>
        </div>
      </div>

      {/* Barres */}
      <div className="space-y-3">
        {skill.techs.map((tech, i) => (
          <SkillBar
            key={tech.name}
            name={tech.name}
            level={tech.level}
            colorKey={skill.color}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => (
  <section id="skills" className="py-24 px-4 bg-[#050B18] relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

    <div className="max-w-7xl mx-auto relative">
      <SectionHeader
        number="02."
        title="Skills"
        subtitle="Les outils de mon atelier — et comment je les utilise."
      />

      {/*
        Bento grid 3 colonnes :
          row 1 → [Frontend ×2] [Backend ×1]
          row 2 → [Languages] [Database] [Cloud]
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            extraClass={BENTO_CLASSES[i] ?? ''}
          />
        ))}
      </div>

      {/* Certifications highlight */}
      <motion.div
        className="mt-6 p-5 bg-[#0B1120] border border-slate-700/50 rounded-2xl
          flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono text-xs text-slate-500 shrink-0">// Certifications Coursera 2024</span>
        {[
          'IBM Software Engineer',
          'Machine Learning with Python',
          'Python for Everybody',
          'Git and GitHub',
        ].map((cert) => (
          <span
            key={cert}
            className="px-3 py-1.5 font-mono text-xs bg-[#141F35] text-cyan-300
              border border-cyan-400/20 rounded-lg"
          >
            {cert}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
)

export default Skills
