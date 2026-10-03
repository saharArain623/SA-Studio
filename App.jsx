import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import { Why, Stats } from './components/WhyStats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="blob -left-24 top-0 h-80 w-80 bg-violet-600" aria-hidden="true" />
      <div className="blob -right-24 top-1/3 h-96 w-96 bg-cyan-500 [animation-delay:-6s]" aria-hidden="true" />
      <div className="blob bottom-0 left-1/4 hidden h-80 w-80 bg-fuchsia-600 [animation-delay:-12s] sm:block" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero /><About /><Services /><Portfolio /><Why /><Stats /><Testimonials /><Contact />
      </main>
      <Footer />
    </>
  )
}
