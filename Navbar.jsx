import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { btnPrimary } from './ui'

export const Logo = () => (
  <a href="#home" className="flex items-center gap-2 font-display text-xl font-extrabold">
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm text-white shadow-lg shadow-violet-500/30">SA</span>
    <span>SA Studio</span>
  </a>
)
const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'glass border-x-0 border-t-0' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-white/70 transition-colors hover:text-white">{l}</a></li>)}
        </ul>
        <a href="#contact" className={`${btnPrimary} hidden !py-2 md:inline-flex`}>Order Now</a>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full glass md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden md:hidden">
            <ul className="flex flex-col gap-1 px-5 pb-5">
              {links.map(l => <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block rounded-xl px-3 py-3 text-lg text-white/80 hover:bg-white/5">{l}</a></li>)}
              <li><a onClick={() => setOpen(false)} href="#contact" className={`${btnPrimary} mt-2 w-full`}>Order Now</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
