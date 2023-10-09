import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service'
import About from './components/About'
import ContactForm from './components/ContactForm'
import AdvantageSection from './components/AdvantageSection'



export default function Home() {
  return (
    <main>
    <div>
       <Navbar />
       <Hero />
       <Service />
       <About />
       <AdvantageSection />

    </div>
    </main>
  )
}
