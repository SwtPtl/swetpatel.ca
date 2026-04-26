import { motion } from 'framer-motion'

export function Toggle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.4 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      role="navigation"
      aria-label="Switch site version"
    >
      <div className="flex items-center gap-3 bg-card border border-edge rounded-full px-6 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        <span className="font-mono text-[0.8rem] text-accent whitespace-nowrap">
          {'{ React }'}
        </span>
        <span className="w-px h-3.5 bg-edge" aria-hidden="true" />
        <button
          onClick={() => { window.location.href = 'https://php.swetpatel.ca' }}
          className="font-mono text-[0.8rem] text-muted hover:opacity-80 transition-opacity duration-200 whitespace-nowrap bg-transparent border-0 p-0"
        >
          {'< PHP />'}
        </button>
      </div>
    </motion.div>
  )
}
