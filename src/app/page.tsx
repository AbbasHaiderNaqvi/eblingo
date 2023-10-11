import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service'
import About from './components/About'
import ContactForm from './components/ContactForm'
import AdvantageSection from './components/AdvantageSection'
import Footer from './components/Footer'



export default function Home() {
  return (
    <main>
    <div>
       <Navbar />
       <Hero />
       <Service />
       <About />
       <AdvantageSection />
       <Footer />

    </div>
    </main>
  )
}
