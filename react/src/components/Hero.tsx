import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(
      new Date().toLocaleTimeString('en-CA', {
        timeZone: 'America/Toronto',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
      }) + ' EST'
    )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } } as const

const fade = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Hero() {
  const time = useClock()

  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col justify-center pt-20 pb-12 px-[clamp(1.25rem,5vw,3rem)] max-w-[1100px] mx-auto w-full"
    >
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p variants={fade} className="font-mono text-accent text-xs tracking-widest uppercase mb-6">
          Ottawa &middot; <time>{time || '—:—:— EST'}</time>
        </motion.p>

        <motion.h1
          variants={fade}
          className="font-display text-[clamp(3rem,10vw,6rem)] text-text leading-[0.95] mb-6"
        >
          Swet<br />Patel.
        </motion.h1>

        <motion.p variants={fade} className="text-muted text-[clamp(1rem,2vw,1.125rem)] max-w-[38rem] leading-relaxed mb-10">
          CS Honours &middot; Carleton University &middot; Ottawa.<br />
          Building thoughtful software. Seeking co-op for{' '}
          <strong className="text-text font-medium">summer 2026</strong>.
        </motion.p>

        <motion.div variants={fade} className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-accent text-canvas rounded-full text-sm font-medium transition-colors duration-200 hover:bg-accent-d"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-edge text-text rounded-full text-sm transition-colors duration-200 hover:border-accent/50"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-auto flex items-center gap-3 font-mono text-[0.7rem] text-muted tracking-widest"
      >
        <span className="block w-8 h-px bg-edge" />
        scroll
      </motion.p>
    </section>
  )
}
