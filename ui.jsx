import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { WHATSAPP } from '../data'

export const waLink = (msg = 'Hi SA Studio, I would like to place an order.') => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>
      {children}
    </motion.div>
  )
}

export function Heading({ title, text }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">{title}</h2>
      {text && <p className="mt-4 text-white/60 leading-relaxed">{text}</p>}
    </Reveal>
  )
}

export function Tilt({ children, className = '' }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-.5, .5], [10, -10]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [-.5, .5], [-10, 10]), { stiffness: 200, damping: 20 })
  const move = e => { const b = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - b.left) / b.width - .5); y.set((e.clientY - b.top) / b.height - .5) }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div onPointerMove={move} onPointerLeave={leave} style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.03 }} className={className}>
        {children}
      </motion.div>
    </div>
  )
}

export const btn = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-95'
export const btnPrimary = `${btn} bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-violet-500/30`
export const btnGlass = `${btn} glass hover:bg-white/10`
