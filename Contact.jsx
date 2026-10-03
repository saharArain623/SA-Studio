import { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { Heading, Reveal, btnPrimary, waLink } from './ui'
import { allServices } from '../data'

const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base outline-none transition-colors placeholder:text-white/35 focus:border-cyan-300/60'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = e => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    // Opens WhatsApp with the order details. Swap for your own backend/email service if you prefer.
    window.open(waLink(`New order from ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nService: ${d.service}\n${d.message}`), '_blank', 'noopener')
    setSent(true); e.currentTarget.reset()
  }
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Heading title="Let's design something great" text="Tell us what you need and we will reply quickly. For the fastest response, order directly on WhatsApp." />
          <Reveal>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} w-full !bg-none !bg-emerald-500 !py-5 text-lg shadow-emerald-500/30 sm:w-auto`}>
              <MessageCircle /> Order on WhatsApp
            </a>
          </Reveal>
        </div>
        <Reveal delay={.1}>
          <form onSubmit={submit} className="glass grid gap-4 rounded-3xl p-6 sm:p-8">
            <input required name="name" placeholder="Your name" className={field} autoComplete="name" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input required type="email" name="email" placeholder="Email" className={field} autoComplete="email" />
              <input required type="tel" name="phone" placeholder="Phone" className={field} autoComplete="tel" />
            </div>
            <select required name="service" defaultValue="" className={`${field} [&>option]:text-black`}>
              <option value="" disabled>Select a service</option>
              {allServices.map(s => <option key={s}>{s}</option>)}
            </select>
            <textarea required name="message" rows={4} placeholder="Tell us about your project" className={field} />
            <button className={btnPrimary}><Send size={18} /> Send Order Request</button>
            {sent && <p role="status" className="text-center text-sm text-emerald-300">Thanks! Your order details were opened in WhatsApp.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
