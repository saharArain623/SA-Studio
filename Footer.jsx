import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'
import { Logo } from './Navbar'
import { services } from '../data'
import { waLink } from './ui'

const social = [[Instagram, '#', 'Instagram'], [Facebook, '#', 'Facebook'], [Youtube, '#', 'YouTube'], [MessageCircle, waLink(), 'WhatsApp']]
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-white/55">Modern, creative and customized digital designs for brands that want to stand out.</p>
          <div className="mt-5 flex gap-3">
            {social.map(([Icon, href, label]) => <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="glass grid h-10 w-10 place-items-center rounded-full transition-transform hover:-translate-y-1"><Icon size={18} /></a>)}
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display font-bold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">{['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(l => <li key={l}><a className="hover:text-white" href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul>
        </div>
        <div>
          <h4 className="mb-3 font-display font-bold">Services</h4>
          <ul className="space-y-2 text-sm text-white/60">{services.map(s => <li key={s.title}><a className="hover:text-white" href="#services">{s.title}</a></li>)}</ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/40">© {new Date().getFullYear()} SA Studio. All rights reserved.</p>
    </footer>
  )
}
