import { motion } from 'framer-motion'

export function Experience() {
  return (
    <section id="experience" className="border-t border-edge py-[clamp(4rem,8vw,7rem)] px-[clamp(1.25rem,5vw,3rem)] max-w-[1100px] mx-auto w-full">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-[0.7rem] text-muted uppercase tracking-widest mb-10"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-display text-[clamp(1.75rem,4vw,3rem)] text-text mb-12"
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.45, ease: 'easeOut' as const }}
        className="pl-5 border-l-2 border-accent/30"
      >
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <p className="font-display text-text text-xl">Loblaw Companies Limited</p>
            <p className="font-mono text-accent text-[0.78rem] mt-1">
              Asset Protection Associate &middot; Part-time &middot; Ottawa ON
            </p>
          </div>
        </div>
        <p className="text-muted text-sm leading-relaxed">
          Loss prevention, inventory control, and security operations for one of Canada&apos;s largest retail chains.
        </p>
      </motion.div>
    </section>
  )
}
