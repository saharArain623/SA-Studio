import { Image, Share2, Layers, PenTool, Globe, Sparkles, Lightbulb, BadgeCheck, Zap, Wrench, Gem, Smile } from 'lucide-react'

// >>> Change this to your WhatsApp number (country code, no + or spaces)
export const WHATSAPP = '923001234567'

export const allServices = ['Graphic Design','Poster Design','Social Media Post Design','Birthday Posters','Event Posters','Islamic / Shia Posters','Business Promotional Designs','Logo Design','Website Design','Custom Design Services']

export const services = [
  { icon: Image, title: 'Poster Design', text: 'Birthday, event, business and Islamic posters made to be noticed.' },
  { icon: Share2, title: 'Social Media Design', text: 'Scroll-stopping posts, stories and campaign sets for every platform.' },
  { icon: Layers, title: 'Branding', text: 'Colors, type and visuals that make your brand consistent everywhere.' },
  { icon: PenTool, title: 'Logo Design', text: 'Memorable, versatile logos with all the files you need.' },
  { icon: Globe, title: 'Website Design', text: 'Fast, modern websites that look sharp on every screen.' },
  { icon: Sparkles, title: 'Custom Design', text: 'Have something different in mind? We design it your way.' },
]

// Placeholder generator. Replace `img` with your own files, e.g. '/images/poster-1.jpg'
const ph = (a, b, t) => `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='400' height='500' fill='url(#g)'/><text x='200' y='255' fill='white' fill-opacity='.85' font-size='26' text-anchor='middle' font-family='sans-serif'>${t}</text></svg>`)}`

export const filters = ['All', 'Posters', 'Social', 'Branding', 'Websites']
export const portfolio = [
  { title: 'Birthday Poster', cat: 'Posters', ratio: 'aspect-[4/5]', img: ph('#7c3aed', '#ec4899', 'Poster Mockup') },
  { title: 'Event Poster', cat: 'Posters', ratio: 'aspect-[3/4]', img: ph('#0891b2', '#6366f1', 'Event Poster') },
  { title: 'Instagram Campaign', cat: 'Social', ratio: 'aspect-square', img: ph('#f97316', '#db2777', 'Social Post') },
  { title: 'Cafe Brand Identity', cat: 'Branding', ratio: 'aspect-[4/3]', img: ph('#10b981', '#0e7490', 'Branding') },
  { title: 'Islamic Poster', cat: 'Posters', ratio: 'aspect-[4/5]', img: ph('#065f46', '#1e1b4b', 'Islamic Poster') },
  { title: 'Agency Website', cat: 'Websites', ratio: 'aspect-video', img: ph('#2563eb', '#7c3aed', 'Website Design') },
  { title: 'Promo Stories', cat: 'Social', ratio: 'aspect-[3/4]', img: ph('#e11d48', '#9333ea', 'Social Stories') },
  { title: 'Logo Suite', cat: 'Branding', ratio: 'aspect-square', img: ph('#0ea5e9', '#14b8a6', 'Logo Design') },
]

export const why = [
  { icon: Lightbulb, title: 'Creative Designs', text: 'Fresh ideas, never recycled templates.' },
  { icon: BadgeCheck, title: 'Professional Quality', text: 'Pixel-perfect work, print and screen ready.' },
  { icon: Zap, title: 'Fast Delivery', text: 'Quick turnaround without cutting corners.' },
  { icon: Wrench, title: 'Custom Designs', text: 'Every project is built around your brief.' },
  { icon: Gem, title: 'Modern Style', text: 'Current trends with a timeless finish.' },
  { icon: Smile, title: 'Client Satisfaction', text: 'Revisions until you love it.' },
]

export const stats = [
  { n: 500, s: '+', label: 'Projects Completed' },
  { n: 1200, s: '+', label: 'Creative Designs' },
  { n: 300, s: '+', label: 'Happy Clients' },
  { n: 5, s: '+', label: 'Years of Creativity' },
]

export const testimonials = [
  { name: 'Ayesha K.', role: 'Boutique Owner', text: 'SA Studio gave my brand a look I am proud of. Fast, polite and incredibly creative.' },
  { name: 'Hassan R.', role: 'Event Organizer', text: 'The event posters brought in a bigger crowd than ever. Delivered overnight!' },
  { name: 'Zainab M.', role: 'Content Creator', text: 'My social media finally looks consistent and premium. Highly recommended.' },
  { name: 'Ali T.', role: 'Startup Founder', text: 'Logo, branding and website, all handled beautifully. A true creative partner.' },
]
