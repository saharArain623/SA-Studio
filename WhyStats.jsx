import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { Heading, Reveal, Tilt } from './ui'
import { why, stats } from '../data'

function Counter({ n, s }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => { if (inView) { const c = animate(0, n, { duration: 2, ease: 'easeOut', onUpdate: x => setV(Math.round(x)) }); return () => c.stop() } }, [inView, n])
  return <span ref={ref}>{v.toLocaleString()}{s}</span>
}

export function Why() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading title="Why choose SA Studio" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {why.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={(i % 3) * .08} className="h-full">
            <Tilt className="glass h-full rounded-3xl p-6">
              <Icon className="mb-4 text-fuchsia-300" size={28} style={{ transform: 'translateZ(30px)' }} />
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-white/60">{text}</p>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="glass grid grid-cols-2 gap-8 rounded-[2rem] bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-8 sm:p-12 lg:grid-cols-4">
        {stats.map(x => (
          <div key={x.label} className="text-center">
            <p className="grad-text font-display text-4xl font-extrabold sm:text-5xl"><Counter {...x} /></p>
            <p className="mt-2 text-sm text-white/60">{x.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
