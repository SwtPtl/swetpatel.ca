import { motion } from 'framer-motion'

interface Project {
  name: string
  desc: string
  tags: string[]
  github: string
}

const PROJECTS: Project[] = [
  {
    name:   'AI Agent Job Pipeline',
    desc:   'Automated end-to-end job application system: scraping, resume tailoring, cover letter generation.',
    tags:   ['Python', 'n8n', 'Gemini 2.5 Pro', 'JobSpy', 'RAG'],
    github: 'https://github.com/SwtPtl',
  },
  {
    name:   'Directional Strangle System',
    desc:   'Options trading signal engine for QQQ/SPY opening-hour strangles with live IBKR execution.',
    tags:   ['Pine Script', 'Python', 'ib_insync', 'IBKR', 'Black-Scholes'],
    github: 'https://github.com/SwtPtl',
  },
  {
    name:   'KeePassXC + GPGME Fork',
    desc:   'Extended KeePassXC with integrated PGP key management via GPGME — phased open-source fork.',
    tags:   ['C++', 'CMake', 'Qt', 'GPGME', 'libgpg-error'],
    github: 'https://github.com/SwtPtl',
  },
  {
    name:   'OS Page Replacement Simulator',
    desc:   'Implemented LRU, FIFO, and Second Chance page replacement in C for COMP 3000.',
    tags:   ['C', 'vmsim', 'FIFO', 'LRU', 'Second Chance'],
    github: 'https://github.com/SwtPtl',
  },
]

const GH_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' as const }}
      className="bg-card border border-edge rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-200"
    >
      <div>
        <h3 className="font-display text-text text-xl mb-2">{p.name}</h3>
        <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {p.tags.map(t => (
          <span key={t} className="font-mono text-[0.7rem] text-muted bg-surface border border-edge rounded-md px-2.5 py-1">{t}</span>
        ))}
      </div>
      <div className="border-t border-edge pt-3">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors duration-200"
        >
          {GH_ICON}
          GitHub ↗
        </a>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-edge py-[clamp(4rem,8vw,7rem)] px-[clamp(1.25rem,5vw,3rem)] max-w-[1100px] mx-auto w-full">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-[0.7rem] text-muted uppercase tracking-widest mb-10"
      >
        Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-display text-[clamp(1.75rem,4vw,3rem)] text-text mb-12"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => <Card key={p.name} p={p} i={i} />)}
      </div>
    </section>
  )
}
