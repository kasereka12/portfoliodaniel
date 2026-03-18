import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'
import SectionHeader  from './ui/SectionHeader'
import TerminalWindow from './ui/TerminalWindow'
import { contactInfo, personalInfo } from '../data/data'

const SOCIAL_LINKS = [
  {
    label:     'Email',
    href:      `mailto:${contactInfo.email}`,
    icon:      Mail,
    command:   `mail -s "Hello" ${contactInfo.email}`,
    colorText: 'text-cyan-400',
    colorBg:   'hover:bg-cyan-400/8 hover:border-cyan-400/50',
  },
  {
    label:     'GitHub',
    href:      contactInfo.github,
    icon:      Github,
    command:   'git remote add origin github.com/...',
    colorText: 'text-slate-300',
    colorBg:   'hover:bg-slate-400/8 hover:border-slate-500/50',
  },
  {
    label:     'LinkedIn',
    href:      contactInfo.linkedin,
    icon:      Linkedin,
    command:   'connect --platform=linkedin',
    colorText: 'text-blue-400',
    colorBg:   'hover:bg-blue-400/8 hover:border-blue-400/50',
  },
  {
    label:     'Twitter',
    href:      contactInfo.twitter,
    icon:      Twitter,
    command:   'tweet @me --say "hello"',
    colorText: 'text-sky-400',
    colorBg:   'hover:bg-sky-400/8 hover:border-sky-400/50',
  },
]

const Contact = () => (
  <section id="contact" className="py-24 px-4 bg-[#09090B] relative overflow-hidden">
    {/* Dégradé radial centré */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_65%)] pointer-events-none" />

    <div className="max-w-5xl mx-auto relative">
      <SectionHeader
        number="05."
        title="Contact"
        subtitle="Travaillons ensemble."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* ── Colonne gauche : message + terminal + CTA ── */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-3">
              {contactInfo.message}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Une idée de projet, une opportunité, ou juste envie d'échanger sur la tech ?
              Mon inbox est toujours ouvert.
            </p>
          </motion.div>

          {/* Terminal simulé */}
          <TerminalWindow title="contact.sh">
            <div className="space-y-2.5 text-sm">
              <p className="text-slate-500"># Choisissez votre canal</p>
              <p>
                <span className="text-cyan-400">$ </span>
                <span className="text-emerald-400">send</span>
                <span className="text-white"> --to </span>
                <span className="text-yellow-300">"{contactInfo.email}"</span>
              </p>
              <p>
                <span className="text-cyan-400">$ </span>
                <span className="text-emerald-400">connect</span>
                <span className="text-white"> --platform </span>
                <span className="text-yellow-300">"linkedin"</span>
              </p>
              <p className="text-slate-500"># Réponse garantie sous 24 h</p>
              <p>
                <span className="text-cyan-400">$ </span>
                <span className="text-white">_</span>
                <span className="animate-blink text-cyan-400">█</span>
              </p>
            </div>
          </TerminalWindow>

          {/* Bouton email principal */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl
              bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300
              text-[#030712] font-mono font-bold text-sm transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Send size={17} />
            Envoyer un message
          </motion.a>
        </div>

        {/* ── Colonne droite : liens sociaux ── */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-cyan-400 text-xs tracking-wider mb-5">
            // Liens sociaux
          </p>

          {SOCIAL_LINKS.map(({ label, href, icon: Icon, command, colorText, colorBg }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800/60
                ${colorBg} rounded-xl transition-all duration-300 group`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 + 0.15 }}
              whileHover={{ x: 5 }}
              viewport={{ once: true }}
            >
              <Icon className={`${colorText} shrink-0`} size={20} />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">
                  {label}
                </p>
                <p className="font-mono text-xs text-slate-600 truncate">$ {command}</p>
              </div>
              <span className="text-slate-600 group-hover:text-slate-400 transition-colors font-mono text-xs">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>

    {/* ── Footer ── */}
    <motion.footer
      className="max-w-5xl mx-auto mt-20 pt-8 border-t border-slate-800/80 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="font-mono text-slate-600 text-xs leading-relaxed">
        <span className="text-cyan-400/60">{personalInfo.name}</span>
        <span className="mx-2 text-slate-700">//</span>
        Conçu &amp; développé avec React, Tailwind CSS &amp; Framer Motion
        <span className="mx-2 text-slate-700">//</span>
        <span className="text-slate-500">{new Date().getFullYear()}</span>
      </p>
    </motion.footer>
  </section>
)

export default Contact
