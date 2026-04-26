import { motion } from 'framer-motion'

const SKILLS: Record<string, string[]> = {
  'Languages': ['Python', 'C', 'C++', 'Haskell', 'TypeScript', 'PHP', 'Bash', 'Prolog'],
  'Systems':   ['Linux', 'Nginx', 'GCP', 'Docker', 'Git', 'KeePassXC', 'GPGME'],
  'AI / ML':   ['Gemini API', 'Claude API', 'n8n', 'OpenRouter', 'RAG', 'LangChain'],
  'Finance':   ['IBKR', 'Pine Script', 'Black-Scholes', 'ib_insync', 'Bloomberg Terminal'],
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-edge py-[clamp(4rem,8vw,7rem)] px-[clamp(1.25rem,5vw,3rem)] max-w-[1100px] mx-auto w-full">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-[0.7rem] text-muted uppercase tracking-widest mb-10"
      >
        Toolkit
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-display text-[clamp(1.75rem,4vw,3rem)] text-text mb-12"
      >
        Skills
      </motion.h2>
      <div className="flex flex-col gap-8">
        {Object.entries(SKILLS).map(([cat, tags]) => (
          <div key={cat}>
            <p className="font-mono text-[0.7rem] text-muted uppercase tracking-widest mb-3">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="font-mono text-[0.8rem] text-muted border border-edge rounded-lg px-3 py-1.5 hover:text-accent hover:border-accent/40 transition-colors duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
