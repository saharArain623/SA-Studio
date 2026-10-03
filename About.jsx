import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Heading, Reveal } from './ui'
import { allServices } from '../data'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80])
  const rot = useTransform(scrollYProgress, [0, 1], [-12, 12])
  return (
    <section id="about" ref={ref} className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Heading title="Modern, creative and fully customized designs" />
          <Reveal delay={.1}>
            <p className="-mt-6 leading-relaxed text-white/65">
              SA Studio creates modern, creative and customized digital designs for people and businesses who want to be remembered. From a single poster to a complete brand, every project is shaped around your story, your audience and your goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {allServices.map(s => <span key={s} className="glass rounded-full px-3 py-1.5 text-xs text-white/75 sm:text-sm">{s}</span>)}
            </div>
          </Reveal>
        </div>
        <div className="relative mx-auto h-72 w-full max-w-md sm:h-96" style={{ perspective: 1000 }}>
          <motion.div style={{ y: y1, rotateY: rot }} className="glass absolute left-2 top-4 h-44 w-36 rounded-3xl bg-gradient-to-br from-violet-500/40 to-transparent sm:h-60 sm:w-48" />
          <motion.div style={{ y: y2, rotateY: rot }} className="glass absolute right-2 top-16 h-48 w-40 rounded-3xl bg-gradient-to-br from-cyan-400/40 to-transparent sm:h-64 sm:w-52" />
          <motion.div style={{ y: y1 }} className="absolute bottom-2 left-1/3 h-20 w-20 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 opacity-80 blur-[2px] sm:h-28 sm:w-28" />
        </div>
      </div>
    </section>
  )
}
