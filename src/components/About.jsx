import { motion } from 'framer-motion'
import { Rocket, Code2, Calendar, Coffee, MapPin, CheckCircle2, GraduationCap, Award } from 'lucide-react'
import TerminalWindow from './ui/TerminalWindow'
import SectionHeader  from './ui/SectionHeader'
import { personalInfo, aboutStats, aboutDescription } from '../data/data'

// Map nom d'icône → composant Lucide
const ICON_MAP = { Rocket, Code2, Calendar, Coffee, GraduationCap, Award }

/** Carte de statistique individuelle */
const StatCard = ({ stat, index }) => {
  const Icon = ICON_MAP[stat.icon] ?? Code2
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-1.5 p-4 bg-[#0B1120] rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 text-center group"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
    >
      <Icon className="text-cyan-400 group-hover:scale-110 transition-transform" size={18} />
      <span className="font-mono text-2xl font-bold text-white leading-none">{stat.value}</span>
      <span className="text-slate-500 text-xs">{stat.label}</span>
    </motion.div>
  )
}

const About = () => {
  const quickStack = ['React JS', 'Angular', 'Flutter', 'Spring Boot', '.NET', 'Django', 'Oracle', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure']

  return (
    <section id="about" className="py-24 px-4 bg-[#030712] relative overflow-hidden">
      {/* Dégradé décoratif haut-droite */}
      <div className="absolute top-0 right-0 w-1/2 h-full
        bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.05),transparent_65%)]
        pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01."
          title="À propos"
          subtitle="Ce que je suis, ce que je fais."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Colonne gauche : terminal + stats ── */}
          <div className="space-y-5">
            <TerminalWindow title={`~/${personalInfo.firstName.toLowerCase()}.profile`}>
              <div className="space-y-0.5 text-sm">
                <p>
                  <span className="text-cyan-400">const </span>
                  <span className="text-yellow-300">dev</span>
                  <span className="text-white"> = {'{'}</span>
                </p>
                {[
                  ['name',      `"${personalInfo.name}"`],
                  ['role',      `"${personalInfo.title}"`],
                  ['location',  `"${personalInfo.location}"`],
                  ['available', personalInfo.available.toString()],
                ].map(([key, val]) => (
                  <p key={key} className="ml-4">
                    <span className="text-purple-400">{key}</span>
                    <span className="text-white">: </span>
                    <span className={key === 'available' ? 'text-cyan-400' : 'text-emerald-400'}>
                      {val}
                    </span>
                    <span className="text-white">,</span>
                  </p>
                ))}
                <p className="ml-4">
                  <span className="text-purple-400">stack</span>
                  <span className="text-white">: [</span>
                </p>
                {['"Full Stack"', '"Low-Code when smart"', '"Always learning"'].map((s, i, arr) => (
                  <p key={s} className="ml-8">
                    <span className="text-emerald-400">{s}</span>
                    {i < arr.length - 1 && <span className="text-white">,</span>}
                  </p>
                ))}
                <p className="ml-4"><span className="text-white">],</span></p>
                <p><span className="text-white">{'}'}</span></p>
              </div>
            </TerminalWindow>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {aboutStats.map((s, i) => (
                <StatCard key={s.label} stat={s} index={i} />
              ))}
            </div>
          </div>

          {/* ── Colonne droite : bio + stack + dispo ── */}
          <div className="space-y-8">
            {/* Paragraphes bio */}
            <div className="space-y-5">
              {aboutDescription.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-slate-300 leading-relaxed text-base"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  viewport={{ once: true }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Stack badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-cyan-400 text-xs tracking-wider mb-3">
                // Stack principale
              </p>
              <div className="flex flex-wrap gap-2">
                {quickStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 font-mono text-xs bg-[#0B1120] text-slate-300 border border-slate-700/50 rounded-lg hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Localisation + disponibilité */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                <MapPin size={13} className="text-cyan-400 shrink-0" />
                {personalInfo.location}
              </span>

              {personalInfo.available && (
                <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                  <CheckCircle2 size={13} className="shrink-0" />
                  Disponible pour missions / CDI
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
