import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Heading, btnPrimary } from './ui'
import { filters, portfolio } from '../data'

export default function Portfolio() {
  const [f, setF] = useState('All')
  const [sel, setSel] = useState(null)
  const items = portfolio.filter(p => f === 'All' || p.cat === f)
  useEffect(() => {
    if (!sel) return
    const k = e => e.key === 'Escape' && setSel(null)
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [sel])
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24">
      <Heading title="Selected work" text="Posters, social media, branding and websites. Tap any project to preview." />
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map(x => (
          <button key={x} onClick={() => setF(x)} className={`rounded-full px-5 py-2 text-sm transition-colors ${f === x ? 'bg-white text-black font-semibold' : 'glass text-white/70 hover:text-white'}`}>{x}</button>
        ))}
      </div>
      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map(p => (
            <motion.button layout key={p.title} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .9 }}
              onClick={() => setSel(p)} className="group relative mb-5 block w-full overflow-hidden rounded-3xl text-left [break-inside:avoid]">
              <img src={p.img} alt={p.title} loading="lazy" className={`${p.ratio} w-full object-cover transition-transform duration-700 group-hover:scale-110`} />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100">
                <ZoomIn className="absolute right-4 top-4" size={20} />
                <p className="font-display text-lg font-bold">{p.title}</p><p className="text-sm text-white/60">{p.cat}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
            <motion.div initial={{ scale: .85, y: 40, rotateX: 15 }} animate={{ scale: 1, y: 0, rotateX: 0 }} exit={{ scale: .9, opacity: 0 }}
              onClick={e => e.stopPropagation()} className="glass relative grid w-full max-w-4xl gap-6 rounded-3xl p-4 sm:p-6 md:grid-cols-2">
              <button aria-label="Close preview" onClick={() => setSel(null)} className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60"><X size={18} /></button>
              <img src={sel.img} alt={sel.title} className="max-h-[60vh] w-full rounded-2xl object-cover" />
              <div className="flex flex-col justify-center p-2">
                <span className="text-sm text-cyan-300">{sel.cat}</span>
                <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{sel.title}</h3>
                <p className="mt-3 text-white/60">Replace this placeholder with your real project image and description. Every design is crafted to match the client's brand and goals.</p>
                <a href="#contact" onClick={() => setSel(null)} className={`${btnPrimary} mt-6 self-start`}>Order Similar Design</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
