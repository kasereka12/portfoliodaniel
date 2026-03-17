import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers, ChevronRight } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { projects, personalInfo } from '../data/data'

const STATUS_STYLES = {
  Production:         'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  'En développement': 'text-yellow-400  border-yellow-400/30  bg-yellow-400/10',
  'Pré-production':   'text-orange-400  border-orange-400/30  bg-orange-400/10',
  Archivé:            'text-slate-400   border-slate-400/30   bg-slate-400/10',
}

/** Carte projet avec révélation au survol */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className={`relative bg-[#0B1120] rounded-2xl overflow-hidden border transition-all duration-300 group flex flex-col h-full ${
        hovered
          ? 'border-cyan-400/40 shadow-xl shadow-cyan-400/5'
          : 'border-slate-700/50'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Numéro fantôme décoratif */}
      <span className="absolute top-4 right-4 font-mono text-6xl font-bold text-slate-800/25 select-none leading-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Corps de la carte */}
      <div className="p-6 flex flex-col flex-1">
        {/* En-tête */}
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
            hovered ? 'bg-cyan-400/15 border border-cyan-400/30' : 'bg-[#141F35] border border-slate-700/50'
          }`}>
            <Layers
              className={`transition-colors duration-300 ${hovered ? 'text-cyan-400' : 'text-slate-400'}`}
              size={18}
            />
          </div>

          <span className={`shrink-0 px-2 py-0.5 rounded-md text-xs font-mono border ${
            STATUS_STYLES[project.status] ?? STATUS_STYLES['Archivé']
          }`}>
            {project.status}
          </span>
        </div>

        {/* Titre */}
        <h3 className={`font-mono font-bold text-lg mb-3 transition-colors duration-300 ${
          hovered ? 'text-cyan-400' : 'text-white'
        }`}>
          {project.title}
        </h3>

        {/* Description — courte au repos, longue au survol */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 min-h-[60px]">
          {hovered ? project.longDescription : project.description}
        </p>

        {/* Badges techno */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 font-mono text-xs bg-[#141F35] text-slate-400 rounded-md border border-slate-700/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens — fade-in au survol */}
        <motion.div
          className="pt-4 border-t border-slate-700/50"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0.3, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              tabIndex={hovered ? 0 : -1}
            >
              <Github size={13} />
              Code source
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              tabIndex={hovered ? 0 : -1}
            >
              <ExternalLink size={13} />
              Démo live
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ligne lumineuse de bas de carte au survol */}
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${
          hovered ? 'opacity-60' : 'opacity-0'
        }`}
      />
    </motion.article>
  )
}

const Projects = () => (
  <section id="projects" className="py-24 px-4 bg-[#030712] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.05),transparent_60%)] pointer-events-none" />

    <div className="max-w-7xl mx-auto relative">
      <SectionHeader
        number="03."
        title="Projets"
        subtitle="Ce que j'ai construit — du concept à la prod."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Lien GitHub global */}
      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 border border-cyan-400/30 hover:border-cyan-400/70 hover:bg-cyan-400/5 px-7 py-3 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.03 }}
        >
          Voir tous mes repos GitHub
          <ChevronRight size={14} />
        </motion.a>
      </motion.div>
    </div>
  </section>
)

export default Projects
