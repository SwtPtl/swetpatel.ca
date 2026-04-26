import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const }}
        className={`fixed top-0 inset-x-0 z-40 h-14 flex items-center transition-all duration-200 ${
          scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-edge' : ''
        }`}
      >
        <div className="w-full max-w-[1100px] mx-auto px-[clamp(1.25rem,5vw,3rem)] flex items-center justify-between">
          <a href="#hero" aria-label="Swet Patel — home">
            <img src="/logo.svg" alt="SP" height="20" className="h-5 w-auto" />
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-muted text-sm hover:text-text transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1 text-text"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="block w-[22px] h-[2px] bg-current rounded" />
            <span className="block w-[22px] h-[2px] bg-current rounded" />
            <span className="block w-[22px] h-[2px] bg-current rounded" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-canvas flex flex-col items-center justify-center gap-10"
          >
            <button
              className="absolute top-4 right-6 text-muted hover:text-text text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-muted hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
