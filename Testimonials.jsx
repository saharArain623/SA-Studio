import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Heading } from './ui'
import { testimonials as T } from '../data'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = d => setI(x => (x + d + T.length) % T.length)
  useEffect(() => { if (paused) return; const t = setInterval(() => go(1), 5000); return () => clearInterval(t) }, [paused])
  const t = T[i]
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <Heading title="What clients say" />
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="glass relative min-h-[260px] overflow-hidden rounded-3xl p-8 sm:p-12">
          <Quote className="mb-4 text-cyan-300" size={32} />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: .35 }}>
              <p className="text-lg leading-relaxed sm:text-xl">{t.text}</p>
              <p className="mt-6 font-display font-bold">{t.name}</p>
              <p className="text-sm text-white/50">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">{T.map((_, k) => <button key={k} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-cyan-300' : 'w-2 bg-white/25'}`} />)}</div>
          <div className="flex gap-2">
            <button aria-label="Previous" onClick={() => go(-1)} className="glass grid h-10 w-10 place-items-center rounded-full"><ChevronLeft size={18} /></button>
            <button aria-label="Next" onClick={() => go(1)} className="glass grid h-10 w-10 place-items-center rounded-full"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
