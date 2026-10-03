import { ArrowRight } from 'lucide-react'
import { Heading, Reveal, Tilt } from './ui'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <Heading title="Services built around your brand" text="Everything you need to look professional online and in print." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={(i % 3) * .08} className="h-full">
            <Tilt className="glass group flex h-full flex-col rounded-3xl p-7">
              <div style={{ transform: 'translateZ(40px)' }} className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/30"><Icon size={26} /></div>
              <h3 style={{ transform: 'translateZ(25px)' }} className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{text}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all group-hover:gap-3">Learn More <ArrowRight size={16} /></a>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
