import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Palette, Share2, Globe } from 'lucide-react'
import { btnPrimary, btnGlass } from './ui'

const Hero3D = lazy(() => import('./Hero3D'))
const floaters = [
  { Icon: Palette, t: 'Brand Identity', c: 'right-[6%] top-[22%]', d: '0s' },
  { Icon: Share2, t: 'Social Creatives', c: 'right-[22%] top-[52%]', d: '-2s' },
  { Icon: Globe, t: 'Web Design', c: 'right-[4%] bottom-[14%]', d: '-4s' },
]
const item = i => ({ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: .9, delay: .15 * i, ease: [.22, 1, .36, 1] } })

export default function Hero() {
  const [show3D, setShow3D] = useState(false)
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) setShow3D(true)
  }, [])
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div className="absolute inset-0" aria-hidden="true">{show3D && <Suspense fallback={null}><Hero3D /></Suspense>}</div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
        <motion.p {...item(0)} className="glass mb-6 inline-block rounded-full px-4 py-1.5 text-sm text-white/70">SA Studio · Creative Design Agency</motion.p>
        <motion.h1 {...item(1)} className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
          Creative Designs That Make Your <span className="grad-text">Brand Stand Out</span>
        </motion.h1>
        <motion.p {...item(2)} className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Professional graphic design, posters, social media creatives and modern digital experiences by SA Studio.
        </motion.p>
        <motion.div {...item(3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#portfolio" className={btnGlass}>View Portfolio <ArrowRight size={18} /></a>
          <a href="#contact" className={btnPrimary}>Order Now</a>
        </motion.div>
      </div>
      {floaters.map(({ Icon, t, c, d }) => (
        <div key={t} className={`bob glass absolute z-10 hidden items-center gap-3 rounded-2xl px-4 py-3 lg:flex ${c}`} style={{ animationDelay: d }}>
          <Icon size={20} className="text-cyan-300" /><span className="text-sm">{t}</span>
        </div>
      ))}
    </section>
  )
}
