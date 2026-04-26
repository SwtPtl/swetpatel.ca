import { motion } from 'framer-motion'

export function Education() {
  return (
    <section id="education" className="border-t border-edge py-[clamp(4rem,8vw,7rem)] px-[clamp(1.25rem,5vw,3rem)] max-w-[1100px] mx-auto w-full">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-[0.7rem] text-muted uppercase tracking-widest mb-10"
      >
        Education
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-display text-[clamp(1.75rem,4vw,3rem)] text-text mb-12"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.45, ease: 'easeOut' as const }}
        className="pl-5 border-l-2 border-edge"
      >
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <p className="font-display text-text text-xl">Carleton University</p>
            <p className="font-mono text-accent text-[0.78rem] mt-1">
              B.C.S. Computer Science Honours &middot; Neuroscience Minor
            </p>
          </div>
          <p className="font-mono text-muted text-[0.78rem] shrink-0">Ottawa &middot; 2027</p>
        </div>
        <p className="text-muted text-sm">Co-operative Education Program.</p>
      </motion.div>
    </section>
  )
}
